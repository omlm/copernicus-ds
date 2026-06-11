import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Horisontal (Figma: "Orientation=Horizontal"). */
export const Horizontal: Story = {};

/** Vertikal (Figma: "Orientation=Vertical") — i en horisontal rad. */
export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center", height: 48 }}>
      <span>Venstre</span>
      <Divider {...args} />
      <span>Høyre</span>
    </div>
  ),
};
