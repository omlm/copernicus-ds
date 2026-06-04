import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { iconNames } from "../Icon";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary"] },
    size: { control: "inline-radio", options: ["small", "medium", "large"] },
    // Velg fritt fra hele Lucide-settet; overstyrer standard-pilen.
    iconName: { control: "select", options: [undefined, ...iconNames] },
    disabled: { control: "boolean" },
    "aria-label": { control: "text" },
  },
  args: {
    "aria-label": "Neste",
    variant: "primary",
    size: "large",
    disabled: false,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

/** Bytt ut pilen med et hvilket som helst Lucide-ikon. */
export const SwappedIcon: Story = {
  args: { iconName: "heart", "aria-label": "Lik" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconButton {...args} size="large" aria-label="Stor" />
      <IconButton {...args} size="medium" aria-label="Medium" />
      <IconButton {...args} size="small" aria-label="Liten" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconButton variant="primary" size="large" aria-label="Primary stor" />
        <IconButton variant="primary" size="medium" aria-label="Primary medium" />
        <IconButton variant="primary" size="small" aria-label="Primary liten" />
        <IconButton variant="primary" size="large" iconName="settings" aria-label="Innstillinger" />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconButton variant="secondary" size="large" aria-label="Secondary stor" />
        <IconButton variant="secondary" size="medium" aria-label="Secondary medium" />
        <IconButton variant="secondary" size="small" aria-label="Secondary liten" />
        <IconButton variant="secondary" size="large" iconName="heart" aria-label="Lik" />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconButton variant="primary" disabled aria-label="Primary deaktivert" />
        <IconButton variant="secondary" disabled aria-label="Secondary deaktivert" />
      </div>
    </div>
  ),
};
