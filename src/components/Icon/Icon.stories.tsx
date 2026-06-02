import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { Compass, Banana, ArrowRight } from "./icons";

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

export const BuiltInIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Icon size="large"><Compass /></Icon>
      <Icon size="large"><Banana /></Icon>
      <Icon size="large"><ArrowRight /></Icon>
    </div>
  ),
};
