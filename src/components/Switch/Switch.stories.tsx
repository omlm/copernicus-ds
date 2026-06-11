import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    children: "This is a choice",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Av (Figma: "is On=No, State=Default"). */
export const Off: Story = {};

/** På (Figma: "is On=Yes, State=Default"). */
export const On: Story = {
  args: { defaultChecked: true },
};

/** Deaktivert. */
export const Disabled: Story = {
  args: { disabled: true },
};

/** Flere brytere i en innstillingsliste. */
export const SettingsList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
      <Switch defaultChecked>Varslinger</Switch>
      <Switch>Nyhetsbrev</Switch>
      <Switch defaultChecked>Mørk modus følger systemet</Switch>
    </div>
  ),
};
