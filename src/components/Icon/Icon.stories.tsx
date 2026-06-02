import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { featuredIconNames, iconNames } from "./icons";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["small", "medium", "large", "huge"] },
    // Velg fritt fra hele Lucide-katalogen (~1500 ikoner).
    name: { control: "select", options: iconNames },
  },
  args: {
    size: "large",
    name: "compass",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Velg hvilket som helst Lucide-ikon i kontrollen «name». */
export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Icon size="small" name="compass" />
      <Icon size="medium" name="compass" />
      <Icon size="large" name="compass" />
      <Icon size="huge" name="compass" />
    </div>
  ),
};

/** Det kuraterte DS-settet (ikonene fra «Icons»-siden i Figma). */
export const Oversikt: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: 16,
        width: 640,
        maxWidth: "100%",
      }}
    >
      {featuredIconNames.map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            padding: "20px 8px",
            border: "1px solid #e4e5e7",
            borderRadius: 12,
          }}
        >
          <Icon size="large" name={name} />
          <code style={{ fontSize: 12, color: "#494a50" }}>{name}</code>
        </div>
      ))}
    </div>
  ),
};
