import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./List";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "radio", options: ["bullet", "number"] },
  },
  args: {
    children: (
      <>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </>
    ),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Punktliste (Figma: "Type=Bullet"). */
export const Bullet: Story = {};

/** Nummerert (Figma: "Type=Number"). */
export const Numbered: Story = {
  args: { type: "number" },
};
