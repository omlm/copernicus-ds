import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, expect, userEvent, within } from "storybook/test";
import { NewsletterSignup } from "./NewsletterSignup";

const meta = {
  title: "Components/NewsletterSignup",
  component: NewsletterSignup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof NewsletterSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    title: "Ikke gå glipp av noe",
    description: "Få eksklusive tilbud og nyheter direkte i innboksen din.",
  },
};

/** Viser valideringsfeil når skjemaet sendes inn uten gyldig e-post og samtykke. */
export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /meld meg på/i }));
    await expect(canvas.getByText("Skriv inn en gyldig e-postadresse")).toBeInTheDocument();
    await expect(canvas.getByText("Du må godta vilkårene for å melde deg på")).toBeInTheDocument();
  },
};

/** Fyller ut skjemaet korrekt og sender inn. */
export const SuccessSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(/e-postadresse/i), "test@eksempel.no");
    const checkboxLabel = canvas.getByRole("checkbox").closest("label")!;
    await userEvent.click(checkboxLabel);
    await userEvent.click(canvas.getByRole("button", { name: /meld meg på/i }));
    await expect(canvas.getByText(/takk! du er nå påmeldt/i)).toBeInTheDocument();
  },
};
