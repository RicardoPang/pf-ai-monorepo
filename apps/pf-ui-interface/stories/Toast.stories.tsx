import type { Meta, StoryObj } from '@storybook/react';
import { Button, toast, Toaster } from '@pf/ui';

const meta: Meta = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const WithAction: StoryObj = {
  render: () => (
    <>
      <Button
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <Button variant="destructive">Try again</Button>,
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const Destructive: StoryObj = {
  render: () => (
    <>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <Button variant="outline">Try again</Button>,
          });
        }}
      >
        Show destructive toast
      </Button>
      <Toaster />
    </>
  ),
};
