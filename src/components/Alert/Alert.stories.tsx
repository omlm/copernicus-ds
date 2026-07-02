import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warning", "danger"] },
    title: { control: "text" },
  },
  args: {
    title: "Information",
    children: "This is the alert description. It explains what happened and what to do next.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Info (Figma: "Tone=Info"). */
export const Info: Story = {};

/** Suksess (Figma: "Tone=Success"). */
export const Success: Story = {
  args: { tone: "success", title: "Success" },
};

/** Advarsel (Figma: "Tone=Warning"). */
export const Warning: Story = {
  args: { tone: "warning", title: "Warning" },
};

/** Feil (Figma: "Tone=Danger"). */
export const Danger: Story = {
  args: { tone: "danger", title: "Something went wrong" },
};

/** Uten tittel — bare beskrivelse. */
export const WithoutTitle: Story = {
  args: { title: undefined },
};
