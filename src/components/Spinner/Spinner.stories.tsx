import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "radio", options: ["x-small", "small", "medium", "large", "x-large"] },
    label: { control: "text" },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standardstørrelsen (Figma: "Size=Medium", 24px). */
export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("status", { name: "Loading…" })).toBeVisible();
  },
};

/** Inline-bruk, f.eks. i knapper (Figma: "Size=Small", 16px). */
export const Small: Story = {
  args: { size: "small" },
};

/** Sidenivå-innlasting (Figma: "Size=Large", 40px). */
export const Large: Story = {
  args: { size: "large" },
};

/** Egendefinert etikett for skjermlesere — synlig kun for hjelpemidler. */
export const CustomLabel: Story = {
  args: { label: "Sender inn skjema …" },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("status", { name: "Sender inn skjema …" })).toBeVisible();
  },
};

/** Alle fem størrelsene side om side (Figma: "Size"-varianten). */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <Spinner size="x-small" label="Loading (x-small)" />
      <Spinner size="small" label="Loading (small)" />
      <Spinner size="medium" label="Loading (medium)" />
      <Spinner size="large" label="Loading (large)" />
      <Spinner size="x-large" label="Loading (x-large)" />
    </div>
  ),
};
