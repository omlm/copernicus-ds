import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip, type ChipTone } from "./Chip";

const tones: ChipTone[] = ["neutral", "info", "success", "danger", "warning"];

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "inline-radio",
      options: tones,
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
    tone: "neutral",
    emphasis: "strong",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Info: Story = {
  args: { tone: "info" },
};

export const Success: Story = {
  args: { tone: "success" },
};

export const Danger: Story = {
  args: { tone: "danger" },
};

export const Warning: Story = {
  args: { tone: "warning" },
};

export const Weak: Story = {
  args: { tone: "info", emphasis: "weak" },
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
          {tones.map((tone) => (
            <Chip key={tone} tone={tone} emphasis={emphasis} dismissable onDismiss={() => {}}>
              {tone}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** Alle 10 kombinasjoner: tone × emphasis (strong / weak). */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["strong", "weak"] as const).map((emphasis) => (
        <div key={emphasis} style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {tones.map((tone) => (
            <Chip key={tone} tone={tone} emphasis={emphasis}>
              {tone}
            </Chip>
          ))}
        </div>
      ))}
    </div>
  ),
};
