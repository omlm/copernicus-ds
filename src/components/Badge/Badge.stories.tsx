import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const tones = ["neutral", "info", "success", "warning", "danger"] as const;

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    tone: { control: "select", options: tones },
    emphasis: { control: "radio", options: ["strong", "weak"] },
  },
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (Figma: "Tone=Neutral, Emphasis=Strong"). */
export const Default: Story = {};

/** Svak utgave (Figma: "Emphasis=Weak"). */
export const Weak: Story = {
  args: { emphasis: "weak" },
};

/** Alle farger i begge utgaver (Figma: hele variantmatrisen). */
export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["strong", "weak"] as const).map((emphasis) => (
        <div key={emphasis} style={{ display: "flex", gap: 8 }}>
          {tones.map((tone) => (
            <Badge key={tone} tone={tone} emphasis={emphasis}>
              {tone}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
