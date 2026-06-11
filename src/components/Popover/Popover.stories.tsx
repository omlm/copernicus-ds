import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Popover title",
    children: "This is the popover content. Use it for short contextual help or actions.",
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — med tittel og lukkeknapp (som i Figma). */
export const Default: Story = {
  args: { onClose: () => {} },
};

/** Uten lukkeknapp. */
export const WithoutClose: Story = {};

/** Bare innhold. */
export const BodyOnly: Story = {
  args: { title: undefined },
};
