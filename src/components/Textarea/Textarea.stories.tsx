import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    description: "Textarea description",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tom (Figma: "State=Default"). */
export const Default: Story = {};

/** Utfylt (Figma: "State=Filled"). */
export const Filled: Story = {
  args: { defaultValue: "This is the text the user has written." },
};

/** Feiltilstand (Figma: "State=Error"). */
export const Error: Story = {
  args: {
    defaultValue: "This is the text the user has written.",
    error: "This is an error message",
  },
};

/** Deaktivert (Figma: "State=Disabled"). */
export const Disabled: Story = {
  args: { disabled: true },
};
