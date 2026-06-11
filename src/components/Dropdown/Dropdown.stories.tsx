import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    options: [
      { value: "one", label: "Option 1" },
      { value: "two", label: "Option 2" },
      { value: "three", label: "Option 3" },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: 260 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Lukket (Figma: "State=Closed"). Klikk for å åpne. */
export const Default: Story = {};

/** Kontrollert med valgt verdi. */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>("two");
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
};

/** Med egen placeholder-tekst. */
export const CustomPlaceholder: Story = {
  args: { placeholder: "Velg et alternativ" },
};
