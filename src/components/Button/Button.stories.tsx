import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary"] },
    size: { control: "inline-radio", options: ["medium", "large"] },
    trailingIcon: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "primary",
    size: "large",
    trailingIcon: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const WithIcon: Story = {
  args: { trailingIcon: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="primary" size="large">Primary Large</Button>
        <Button variant="primary" size="medium">Primary Medium</Button>
        <Button variant="primary" size="large" trailingIcon>Med ikon</Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="secondary" size="large">Secondary Large</Button>
        <Button variant="secondary" size="medium">Secondary Medium</Button>
        <Button variant="secondary" size="large" trailingIcon>Med ikon</Button>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
      </div>
    </div>
  ),
};
