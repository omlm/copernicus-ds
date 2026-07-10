import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepIndicator } from "./StepIndicator";

const meta = {
  title: "Components/StepIndicator",
  component: StepIndicator,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    activeStep: 3,
    size: "large",
  },
  argTypes: {
    activeStep: { control: { type: "range", min: 0, max: 6, step: 1 } },
    size: { control: "radio", options: ["large", "medium", "small"] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 470 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Store pilleformede segmenter (Figma: "Size=Large"). */
export const Large: Story = {};

/** Mellomstørrelse (Figma: "Size=Medium"). */
export const Medium: Story = {
  args: { size: "medium" },
};

/** Liten (Figma: "Size=Small"). */
export const Small: Story = {
  args: { size: "small" },
};

/** Ingen fullførte steg (Figma: "Active step=None"). */
export const Tom: Story = {
  args: { activeStep: 0 },
};
