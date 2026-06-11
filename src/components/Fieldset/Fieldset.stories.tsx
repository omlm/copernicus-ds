import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../Checkbox";
import { RadioButton } from "../RadioButton";
import { Fieldset } from "./Fieldset";

const meta = {
  title: "Components/Fieldset",
  component: Fieldset,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    legend: "Legend",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Med avkrysningsbokser (som i Figma). */
export const WithCheckboxes: Story = {
  args: {
    children: (
      <>
        <Checkbox defaultChecked>This is a choice</Checkbox>
        <Checkbox>This is a choice</Checkbox>
      </>
    ),
  },
};

/** Med radioknapper. */
export const WithRadioButtons: Story = {
  args: {
    legend: "Velg ett alternativ",
    children: (
      <>
        <RadioButton name="fieldset-demo" value="a" defaultChecked>
          Alternativ A
        </RadioButton>
        <RadioButton name="fieldset-demo" value="b">
          Alternativ B
        </RadioButton>
      </>
    ),
  },
};

/** Deaktivert gruppe — native `disabled` skrur av alle kontrollene. */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Checkbox defaultChecked>This is a choice</Checkbox>
        <Checkbox>This is a choice</Checkbox>
      </>
    ),
  },
};
