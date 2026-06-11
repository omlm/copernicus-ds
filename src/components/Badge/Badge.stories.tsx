import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const colors = ["neutral", "info", "success", "warning", "danger"] as const;

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: colors },
    variant: { control: "radio", options: ["strong", "weak"] },
  },
  args: {
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (Figma: "Color=Neutral, Style=Strong"). */
export const Default: Story = {};

/** Svak utgave (Figma: "Style=Weak"). */
export const Weak: Story = {
  args: { variant: "weak" },
};

/** Alle farger i begge utgaver (Figma: hele variantmatrisen). */
export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {(["strong", "weak"] as const).map((variant) => (
        <div key={variant} style={{ display: "flex", gap: 8 }}>
          {colors.map((color) => (
            <Badge key={color} color={color} variant={variant}>
              {color}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
