import type { Meta, StoryObj } from "@storybook/react-vite";
import { KeyValue } from "./KeyValue";

const meta = {
  title: "Components/KeyValue",
  component: KeyValue,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    label: "Key",
    value: "Value",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof KeyValue>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Én rad (Figma: "KeyValue"). */
export const Default: Story = {};

/** Flere rader stablet — typisk oppsummering. */
export const Liste: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <KeyValue label="Navn" value="Ola Nordmann" />
      <KeyValue label="Score" value="4 av 5" />
      <KeyValue label="Varighet" value="12 min" />
    </div>
  ),
};
