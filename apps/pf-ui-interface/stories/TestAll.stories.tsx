import type { Meta, StoryObj } from '@storybook/react';
import { Button, Input, Label, Checkbox, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@pf/ui';
import React, { useState } from 'react';

const TestAllComponents = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-8 p-8 max-w-2xl">
      {/* Button Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Buttons</h2>
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">🔧</Button>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </div>

      {/* Input Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Input</h2>
        <div className="space-y-2">
          <div>
            <Label htmlFor="test-input">Test Input</Label>
            <Input
              id="test-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="mt-1"
            />
            <p className="text-sm text-gray-600 mt-1">Value: {inputValue}</p>
          </div>
        </div>
      </div>

      {/* Checkbox Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Checkbox</h2>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="test-checkbox"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="test-checkbox">
            Test Checkbox (Currently: {checked ? 'Checked' : 'Unchecked'})
          </Label>
        </div>
      </div>

      {/* Dialog Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Test Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test Dialog</DialogTitle>
              <DialogDescription>
                This is a test dialog to verify that all components are working properly.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Input inside dialog..." />
              <div className="flex items-center space-x-2">
                <Checkbox id="dialog-checkbox" />
                <Label htmlFor="dialog-checkbox">Checkbox in dialog</Label>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Label Tests */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Labels</h2>
        <div className="space-y-2">
          <Label>Standalone Label</Label>
          <Label htmlFor="associated-input">Associated Label</Label>
          <Input id="associated-input" placeholder="Input with associated label" />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof TestAllComponents> = {
  title: 'Test/All Components',
  component: TestAllComponents,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};