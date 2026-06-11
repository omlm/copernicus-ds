import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Dialog } from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    open: false,
    title: "Dialog title",
    children:
      "This is the dialog body text. Explain what the user is confirming or what information they need before acting.",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Åpnes fra en knapp — med Cancel/Confirm-handlinger (som i Figma). */
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Åpne dialog</Button>
        <Dialog
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          actions={
            <>
              <Button variant="secondary" size="medium" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size="medium" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </>
          }
        />
      </>
    );
  },
};

/** Uten handlinger — ren informasjonsdialog. */
export const InfoOnly: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Åpne dialog</Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};
