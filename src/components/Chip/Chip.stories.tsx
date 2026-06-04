import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "./Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["neutral", "accent", "info", "success", "danger"],
    },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "neutral",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Accent: Story = {
  args: { variant: "accent" },
};

export const Info: Story = {
  args: { variant: "info" },
};

export const Success: Story = {
  args: { variant: "success" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <Chip variant="neutral">Neutral</Chip>
      <Chip variant="accent">Accent</Chip>
      <Chip variant="info">Info</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="danger">Danger</Chip>
    </div>
  ),
};
