import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/button';
import { Toaster } from '../src/components/toaster';
import { useToast } from '../src/hooks/use-toast';

// Wrapper component to demonstrate toast functionality
function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="space-y-4">
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            variant: "destructive",
          });
        }}
      >
        Show Error Toast
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your changes have been saved.",
          });
        }}
      >
        Show Success Toast
      </Button>

      <Button
        variant="ghost"
        onClick={() => {
          toast({
            title: "Info",
            description: "This is an informational message.",
          });
        }}
      >
        Show Info Toast
      </Button>
      
      <Toaster />
    </div>
  );
}

const meta: Meta<typeof ToastDemo> = {
  title: 'Components/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A succinct message that is displayed temporarily.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <div className="space-y-4">
        <Button
          onClick={() => {
            toast({
              title: "Undo",
              description: "Your message has been sent.",
              action: (
                <Button variant="outline" size="sm">
                  Undo
                </Button>
              ),
            });
          }}
        >
          Show Toast with Action
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => {
            toast({
              title: "Default Toast",
              description: "This is a default toast message.",
            });
          }}
        >
          Default
        </Button>
        
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              title: "Error Toast",
              description: "This is an error toast message.",
              variant: "destructive",
            });
          }}
        >
          Destructive
        </Button>
        
        <Toaster />
      </div>
    );
  },
};
