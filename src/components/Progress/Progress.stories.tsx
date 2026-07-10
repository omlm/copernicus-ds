import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    value: 4,
    size: "medium",
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 7, step: 1 } },
    size: { control: "radio", options: ["medium", "small"] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Fire av sju fullført (Figma: "Active=4, Size=Medium"). */
export const Medium: Story = {};

/** Liten variant (Figma: "Size=Small"). */
export const Small: Story = {
  args: { size: "small" },
};

/** Ingen fullførte steg (Figma: "Active=None"). */
export const Tom: Story = {
  args: { value: 0 },
};

/** Alle steg fullført (Figma: "Active=7"). */
export const Fullfoert: Story = {
  name: "Fullført",
  args: { value: 7 },
};
