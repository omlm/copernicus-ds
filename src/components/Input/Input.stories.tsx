import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    error: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    description: "Input description",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Tom (Figma: "State=Default"). */
export const Default: Story = {};

/** Utfylt (Figma: "State=Filled"). */
export const Filled: Story = {
  args: { defaultValue: "Value" },
};

/** Feiltilstand (Figma: "State=Error"). Setter `error` for rød border + melding. */
export const Error: Story = {
  args: { defaultValue: "Value", error: "Noe er galt med verdien" },
};

/** Deaktivert (Figma: "State=Disabled"). */
export const Disabled: Story = {
  args: { disabled: true },
};

/** Uten etikett og beskrivelse — bare feltet. */
export const FieldOnly: Story = {
  args: { label: undefined, description: undefined },
};

/** Alle tilstandene samlet (fokus vises ved å tabbe inn i et felt). */
export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 320 }}>
      <Input {...args} label="Default" />
      <Input {...args} label="Filled" defaultValue="Value" />
      <Input {...args} label="Error" defaultValue="Value" error="Noe er galt med verdien" />
      <Input {...args} label="Disabled" disabled />
    </div>
  ),
};
