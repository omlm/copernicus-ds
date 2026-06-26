import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { iconNames } from "../Icon";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary"] },
    size: { control: "inline-radio", options: ["small", "medium", "large"] },
    trailingIcon: { control: "boolean" },
    trailingIconName: { control: "select", options: [undefined, ...iconNames] },
    leadingIcon: { control: "boolean" },
    leadingIconName: { control: "select", options: [undefined, ...iconNames] },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "primary",
    size: "large",
    trailingIcon: false,
    leadingIcon: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const WithTrailingIcon: Story = {
  args: { trailingIcon: true },
};

export const WithLeadingIcon: Story = {
  args: { leadingIcon: true },
};

export const BothIcons: Story = {
  args: { leadingIcon: true, trailingIcon: true },
};

/** Bytt ut pilen med et hvilket som helst Lucide-ikon. */
export const SwappedIcon: Story = {
  args: { trailingIconName: "heart" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

/** Alle tre størrelsene side om side. */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="large">Large</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="small">Small</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="primary" size="large">Primary Large</Button>
        <Button variant="primary" size="medium">Primary Medium</Button>
        <Button variant="primary" size="small">Primary Small</Button>
        <Button variant="primary" size="large" trailingIcon>Trailing ikon</Button>
        <Button variant="primary" size="large" leadingIcon>Leading ikon</Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="secondary" size="large">Secondary Large</Button>
        <Button variant="secondary" size="medium">Secondary Medium</Button>
        <Button variant="secondary" size="small">Secondary Small</Button>
        <Button variant="secondary" size="medium" trailingIconName="settings">Innstillinger</Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
      </div>
    </div>
  ),
};
