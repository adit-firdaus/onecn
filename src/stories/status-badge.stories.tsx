import { StatusBadge } from "@/components/helpers/status-badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusBadge> = {
  title: "Helpers/StatusBadge",
  component: StatusBadge,
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Success: Story = {
  args: {
    status: "success",
    children: "Active",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    children: "Pending",
  },
};

export const ErrorState: Story = {
  args: {
    status: "error",
    children: "Failed",
  },
};

export const Info: Story = {
  args: {
    status: "info",
    children: "Info",
  },
};
