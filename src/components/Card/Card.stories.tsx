import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { iconNames } from "../Icon";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    buttonLabel: { control: "text" },
    // Velg ikon fritt fra hele Lucide-settet.
    iconName: { control: "select", options: iconNames },
    showIcon: { control: "boolean" },
    showButton: { control: "boolean" },
  },
  args: {
    title: "Dagens trening",
    description: "I dag skal du trene på konsentrasjon.",
    buttonLabel: "Kom igang",
    iconName: "banana",
    showIcon: true,
    showButton: true,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Velg et annet ikon fra Lucide-settet. */
export const AnnetIkon: Story = {
  args: { iconName: "dumbbell", title: "Styrke", description: "Tid for litt motstandstrening." },
};

export const UtenIkon: Story = {
  args: { showIcon: false },
};

export const UtenKnapp: Story = {
  args: { showButton: false },
};
