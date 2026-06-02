import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonLabel: { control: "text" },
    showIcon: { control: "boolean" },
    showButton: { control: "boolean" },
  },
  args: {
    title: "Dagens trening",
    description: "I dag skal du trene på konsentrasjon.",
    buttonLabel: "Kom igang",
    showIcon: true,
    showButton: true,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const UtenIkon: Story = {
  args: { showIcon: false },
};

export const UtenKnapp: Story = {
  args: { showButton: false },
};
