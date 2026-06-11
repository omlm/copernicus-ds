import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    items: [
      { id: "one", label: "Tab label", content: "Innhold i første fane." },
      { id: "two", label: "Tab label", content: "Innhold i andre fane." },
      { id: "three", label: "Tab label", content: "Innhold i tredje fane." },
    ],
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — første fane aktiv (Figma: "Tabs"). */
export const Default: Story = {};

/** Annen fane aktiv ved start. */
export const SecondActive: Story = {
  args: { defaultActiveId: "two" },
};

/** Med meningsfulle etiketter. */
export const Example: Story = {
  args: {
    items: [
      { id: "overview", label: "Oversikt", content: "Nøkkeltall og status." },
      { id: "details", label: "Detaljer", content: "Full gjennomgang av dataene." },
      { id: "settings", label: "Innstillinger", content: "Konfigurasjon for visningen." },
    ],
  },
};
