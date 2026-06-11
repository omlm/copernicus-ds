import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    page: { control: "number" },
    count: { control: "number" },
  },
  args: {
    page: 2,
    count: 10,
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — som i Figma (side 2 av 10, med ellipse). */
export const Default: Story = {};

/** Få sider — ingen ellipse. */
export const FewPages: Story = {
  args: { page: 1, count: 5 },
};

/** Interaktiv — styrer egen tilstand. */
export const Interactive: Story = {
  render: (args) => {
    const [page, setPage] = useState(args.page);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  },
};
