import type { Meta, StoryObj } from '@storybook/react';
import { Button, Input, Label } from '@pf/ui';
import React from 'react';

const SizeDemo = () => {
  return (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="default">Default Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon">🔧</Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Variants</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input Examples</h3>
        <div className="space-y-2 max-w-sm">
          <Label htmlFor="demo-input">Email Address</Label>
          <Input
            id="demo-input"
            type="email"
            placeholder="Enter your email..."
          />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof SizeDemo> = {
  title: 'Examples/Size & Variant Demo',
  component: SizeDemo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};