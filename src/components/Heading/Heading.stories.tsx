import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a heading",
  },
  argTypes: {
    level: { control: "radio", options: [1, 2, 3, 4, 5, 6] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (semantisk h2). */
export const Default: Story = {};

/** Som h1 — samme utseende, annet dokumentnivå. */
export const SomH1: Story = {
  args: { level: 1 },
};
