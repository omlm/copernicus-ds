import type { Meta, StoryObj } from "@storybook/react-vite";
import { RatingButton } from "./RatingButton";

const meta = {
  title: "Components/RatingButton",
  component: RatingButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 5, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 362 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Ingen valgt (Figma: "Active=None"). Ukontrollert — klikk for å velge. */
export const Default: Story = {};

/** Tre av fem (Figma: "Active=3"). */
export const TreAvFem: Story = {
  args: { value: 3 },
};

/** Full pott (Figma: "Active=5"). */
export const FullPott: Story = {
  args: { value: 5 },
};
