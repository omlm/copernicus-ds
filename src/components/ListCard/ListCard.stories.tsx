import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListCard } from "./ListCard";

const meta = {
  title: "Components/ListCard",
  component: ListCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
  args: {
    title: "Lyst modus",
    description: "Copy goes here",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 334 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (Figma: "Type=List card"). */
export const Default: Story = {};

/** Med andre ikoner. */
export const CustomIcons: Story = {
  args: {
    title: "Varslinger",
    description: "Styr hvordan du blir varslet",
    iconName: "bell",
    trailingIconName: "chevron-right",
  },
};

/** Flere kort i en liste. */
export const Stacked: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <ListCard {...args} title="Lyst modus" />
      <ListCard {...args} title="Mørkt modus" iconName="moon" />
      <ListCard {...args} title="Følg systemet" iconName="monitor" />
    </div>
  ),
};
