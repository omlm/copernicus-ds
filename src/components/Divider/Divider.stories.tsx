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
    type: { control: "radio", options: ["strong", "subdued"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Horisontal (Figma: "Orientation=Horizontal, Type=Strong"). */
export const Horizontal: Story = {};

/** Nedtonet (Figma: "Type=Subdued") — border-subdued i stedet for border-default. */
export const Subdued: Story = {
  args: { type: "subdued" },
};

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
