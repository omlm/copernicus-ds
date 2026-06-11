import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup } from "./ToggleGroup";

const meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    "aria-label": "Velg visning",
    options: [
      { value: "one", label: "Option" },
      { value: "two", label: "Option" },
      { value: "three", label: "Option" },
    ],
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — første valg aktivt (som i Figma). */
export const Default: Story = {};

/** Med meningsfulle etiketter. */
export const ViewSwitcher: Story = {
  args: {
    options: [
      { value: "list", label: "Liste" },
      { value: "grid", label: "Rutenett" },
      { value: "map", label: "Kart" },
    ],
  },
};

/** Kontrollert — styrer egen tilstand. */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("two");
    return <ToggleGroup {...args} value={value} onChange={setValue} />;
  },
};
