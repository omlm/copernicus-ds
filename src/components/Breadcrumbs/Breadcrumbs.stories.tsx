import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Current page" },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — to lenker og gjeldende side (som i Figma). */
export const Default: Story = {};

/** Kort sti — bare ett nivå opp. */
export const TwoLevels: Story = {
  args: {
    items: [{ label: "Home", href: "#" }, { label: "Current page" }],
  },
};

/** Dyp sti. */
export const Deep: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Components", href: "#" },
      { label: "Navigation", href: "#" },
      { label: "Breadcrumbs" },
    ],
  },
};
