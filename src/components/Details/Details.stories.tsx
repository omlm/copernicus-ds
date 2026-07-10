import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "../Chip";
import { Details } from "./Details";

const meta = {
  title: "Components/Details",
  component: Details,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    summary: "Oppgavemodus",
    children:
      "Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Lukket (Figma: "is Expanded=No"). */
export const Lukket: Story = {};

/** Åpen (Figma: "is Expanded=Yes"). */
export const Aapen: Story = {
  name: "Åpen",
  args: { open: true },
};

/** Med chip i overskriftsraden (Figma: "show Chip=True"). */
export const MedChip: Story = {
  args: {
    chip: <Chip tone="neutral">Score: 4</Chip>,
    open: true,
  },
};

/** Flere paneler etter hverandre — en enkel "accordion". */
export const Accordion: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Details {...args} summary="Første panel" />
      <Details {...args} summary="Andre panel" />
      <Details {...args} summary="Tredje panel" />
    </div>
  ),
};
