import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    children:
      "Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 487 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard brødtekst. */
export const Default: Story = {};
