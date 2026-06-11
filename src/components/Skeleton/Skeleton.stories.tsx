import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["text", "circle", "rectangle"] },
    width: { control: "text" },
    height: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tekstlinje (Figma: "Variant=Text"). */
export const Text: Story = {};

/** Sirkel (Figma: "Variant=Circle"). */
export const Circle: Story = {
  args: { variant: "circle" },
};

/** Rektangel (Figma: "Variant=Rectangle"). */
export const Rectangle: Story = {
  args: { variant: "rectangle" },
};

/** Sammensatt eksempel — kort som laster. */
export const CardLoading: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }} aria-busy="true">
      <Skeleton variant="circle" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton width="60%" />
        <Skeleton />
        <Skeleton variant="rectangle" />
      </div>
    </div>
  ),
};
