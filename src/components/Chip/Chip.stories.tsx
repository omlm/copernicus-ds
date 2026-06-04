import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip, type ChipVariant } from "./Chip";

const variants: ChipVariant[] = ["neutral", "info", "success", "danger", "warning"];

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: variants,
    },
    emphasis: {
      control: "inline-radio",
      options: ["strong", "weak"],
    },
    dismissable: { control: "boolean" },
    children: { control: "text" },
  },
  args: {
    children: "Label",
    variant: "neutral",
    emphasis: "strong",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Info: Story = {
  args: { variant: "info" },
};

export const Success: Story = {
  args: { variant: "success" },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const Warning: Story = {
  args: { variant: "warning" },
};

export const Weak: Story = {
  args: { variant: "info", emphasis: "weak" },
};

/** Dismissable — viser Lucide X. Sett onDismiss for å gjøre den klikkbar. */
export const Dismissable: Story = {
  args: { dismissable: true, onDismiss: () => {} },
};

/** Dismissable på tvers av alle varianter (strong + weak). */
export const DismissableAll: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["strong", "weak"] as const).map((emphasis) => (
        <div key={emphasis} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {variants.map((variant) => (
            <Chip key={variant} variant={variant} emphasis={emphasis} dismissable onDismiss={() => {}}>
              {variant}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Alle 10 kombinasjoner: variant × emphasis (strong / weak). */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["strong", "weak"] as const).map((emphasis) => (
        <div key={emphasis} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {variants.map((variant) => (
            <Chip key={variant} variant={variant} emphasis={emphasis}>
              {variant}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  ),
};
