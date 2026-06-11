import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "./Search";

const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
  },
  args: {
    placeholder: "Search…",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (Figma: "State=Default"). Fokus følger feltet selv. */
export const Default: Story = {};

/** Med etikett over feltet. */
export const WithLabel: Story = {
  args: { label: "Søk i biblioteket" },
};

/** Med egen knappetekst. */
export const CustomButtonLabel: Story = {
  args: { buttonLabel: "Søk" },
};
