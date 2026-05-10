import { Button } from "@/components/ui/button";
import { Toaster as Sonner } from "@/components/ui/sonner";
import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";

const meta: Meta<typeof Sonner> = {
  title: "UI/Sonner",
  component: Sonner,
};

export default meta;
type Story = StoryObj<typeof Sonner>;

export const Default: Story = {
  render: () => (
    <div>
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>
      <Sonner />
    </div>
  ),
};
