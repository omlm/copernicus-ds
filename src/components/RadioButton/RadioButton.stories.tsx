import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { RadioButton } from "./RadioButton";

const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    value: "choice",
    children: "This is a choice",
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Frittstående radio. Klikk for å velge. */
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <RadioButton {...args} checked={checked} onChange={() => setChecked(true)} />;
  },
};

export const Selected: Story = {
  args: { checked: true, onChange: () => {} },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledSelected: Story = {
  args: { disabled: true, checked: true, onChange: () => {} },
};

/** Begge tilstandene (Figma: "is Selected" = Yes / No). */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <RadioButton value="a" checked onChange={() => {}}>
        Selected
      </RadioButton>
      <RadioButton value="b" checked={false} onChange={() => {}}>
        Not selected
      </RadioButton>
    </div>
  ),
};
