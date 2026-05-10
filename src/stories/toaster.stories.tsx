import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toaster",
  component: Toaster,
};

export default meta;
type Story = StoryObj<typeof Toaster>;

function ToastDemo() {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Add to calendar
      </Button>
      <Toaster />
    </div>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};
