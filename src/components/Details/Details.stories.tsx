import type { Meta, StoryObj } from "@storybook/react-vite";
import { Details } from "./Details";

const meta = {
  title: "Components/Details",
  component: Details,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    summary: "Summary title",
    children:
      "This is the expanded content of the details element. It can contain longer explanatory text.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Lukket (Figma: "State=Closed"). */
export const Closed: Story = {};

/** Åpen (Figma: "State=Open"). */
export const Open: Story = {
  args: { open: true },
};

/** Flere paneler etter hverandre — en enkel "accordion". */
export const Accordion: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Details {...args} summary="Første panel" />
      <Details {...args} summary="Andre panel" />
      <Details {...args} summary="Tredje panel" />
    </div>
  ),
};
