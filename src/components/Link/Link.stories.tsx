import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    children: "This is a link",
    href: "#",
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard (Figma: "State=Default"). Hover og fokus følger lenka selv. */
export const Default: Story = {};

/** I løpende tekst. */
export const InText: Story = {
  render: (args) => (
    <p style={{ fontFamily: "var(--typography-family-default)", maxWidth: 400 }}>
      Les mer om designsystemet i <Link {...args}>dokumentasjonen</Link> før du går videre.
    </p>
  ),
};

/** Ekstern lenke. */
export const External: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noreferrer",
    children: "Ekstern lenke",
  },
};
