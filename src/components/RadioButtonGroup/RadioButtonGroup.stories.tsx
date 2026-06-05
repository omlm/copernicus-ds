import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { RadioButton } from "../RadioButton";
import { RadioButtonGroup } from "./RadioButtonGroup";

const meta = {
  title: "Components/RadioButtonGroup",
  component: RadioButtonGroup,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Group label",
    orientation: "vertical",
    children: (
      <>
        <RadioButton value="1">This is a choice</RadioButton>
        <RadioButton value="2">This is a choice</RadioButton>
        <RadioButton value="3">This is a choice</RadioButton>
      </>
    ),
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Vertikal gruppe med 5 valg (Figma: "Radio button group"). */
export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState("1");
    return (
      <RadioButtonGroup {...args} value={value} onChange={setValue}>
        {["1", "2", "3", "4", "5"].map((v) => (
          <RadioButton key={v} value={v}>
            This is a choice
          </RadioButton>
        ))}
      </RadioButtonGroup>
    );
  },
};

/** Horisontal gruppe, maks 3 valg (Figma: "Radio button group (Horizontal)"). */
export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => {
    const [value, setValue] = useState("1");
    return (
      <RadioButtonGroup {...args} value={value} onChange={setValue}>
        <RadioButton value="1">This is a choice</RadioButton>
        <RadioButton value="2">This is a choice</RadioButton>
        <RadioButton value="3">This is a choice</RadioButton>
      </RadioButtonGroup>
    );
  },
};

/**
 * Horisontal der valg 3 er valgfritt (Figma-boolean "Show option 3").
 * Skru av/på via knappen.
 */
export const HorizontalOptionalThird: Story = {
  args: { orientation: "horizontal" },
  render: (args) => {
    const [value, setValue] = useState("1");
    const [showThird, setShowThird] = useState(true);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
        <button type="button" onClick={() => setShowThird((s) => !s)}>
          {showThird ? "Skjul valg 3" : "Vis valg 3"}
        </button>
        <RadioButtonGroup {...args} value={value} onChange={setValue}>
          <RadioButton value="1">This is a choice</RadioButton>
          <RadioButton value="2">This is a choice</RadioButton>
          {showThird && <RadioButton value="3">This is a choice</RadioButton>}
        </RadioButtonGroup>
      </div>
    );
  },
};

/** Hele gruppa deaktivert. */
export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <RadioButtonGroup {...args} defaultValue="1">
      <RadioButton value="1">This is a choice</RadioButton>
      <RadioButton value="2">This is a choice</RadioButton>
      <RadioButton value="3">This is a choice</RadioButton>
    </RadioButtonGroup>
  ),
};
