import { ConfirmDialog } from "@/components/helpers/confirm-dialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ConfirmDialog> = {
  title: "Helpers/ConfirmDialog",
  component: ConfirmDialog,
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

export const Default: Story = {};

export const Danger: Story = {
  args: {
    title: "Delete account",
    description: "This will permanently remove your data. You cannot undo this.",
    confirmLabel: "Delete",
    confirmVariant: "destructive",
    triggerLabel: "Delete account",
  },
};
