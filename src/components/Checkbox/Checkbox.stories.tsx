import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    children: "This is a choice",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Frittstående. Klikk for å krysse av/på. */
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const Checked: Story = {
  args: { checked: true, onChange: () => {} },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, onChange: () => {} },
};

/** Begge tilstandene (Figma: "is Selected" = Yes / No). */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox checked onChange={() => {}}>
        Checked
      </Checkbox>
      <Checkbox checked={false} onChange={() => {}}>
        Not checked
      </Checkbox>
    </div>
  ),
};

/** Flere uavhengige valg (checkbokser er ikke gjensidig utelukkende). */
export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>(["a"]);
    const toggle = (v: string) =>
      setValues((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {["a", "b", "c"].map((v) => (
          <Checkbox key={v} value={v} checked={values.includes(v)} onChange={() => toggle(v)}>
            This is a choice
          </Checkbox>
        ))}
      </div>
    );
  },
};
