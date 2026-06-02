import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { Compass, icons, iconNames } from "./icons";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["small", "medium", "large", "huge"] },
  },
  args: {
    size: "large",
    children: <Compass />,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Icon size="small"><Compass /></Icon>
      <Icon size="medium"><Compass /></Icon>
      <Icon size="large"><Compass /></Icon>
      <Icon size="huge"><Compass /></Icon>
    </div>
  ),
};

/** Oversikt over alle ikonene i settet (fra "Icons"-siden i Figma). */
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
      {iconNames.map((name) => {
        const IconComponent = icons[name];
        return (
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
            <Icon size="large">
              <IconComponent />
            </Icon>
            <code style={{ fontSize: 12, color: "#494a50" }}>{name}</code>
          </div>
        );
      })}
    </div>
  ),
};
