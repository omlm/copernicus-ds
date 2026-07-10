import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "./Sheet";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Sheet title",
    onClose: () => {},
    children: "Innholdet i panelet — send inn hva som helst som children.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 402 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Med lukkeknapp (Figma-standarden). */
export const Default: Story = {};

/** Med både tilbake- og lukkeknapp (Figma: "Back icon" + "Close icon"). */
export const MedTilbake: Story = {
  args: { onBack: () => {} },
};

/** Kun håndtak — ingen knapper. */
export const UtenKnapper: Story = {
  args: { onBack: undefined, onClose: undefined },
};
