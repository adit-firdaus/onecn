import { PageHeader } from "@/components/helpers/page-header";
import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageHeader> = {
  title: "Helpers/PageHeader",
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    description: "Welcome back! Here's what's happening.",
  },
};

export const WithActions: Story = {
  args: {
    title: "Users",
    description: "Manage your team members.",
    actions: (
      <>
        <Button variant="outline">Import</Button>
        <Button>Add user</Button>
      </>
    ),
  },
};
