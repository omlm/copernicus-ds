import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageTitle } from "./PageTitle";

const meta = {
  title: "Components/PageTitle",
  component: PageTitle,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
  args: {
    children: "Hi there",
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
