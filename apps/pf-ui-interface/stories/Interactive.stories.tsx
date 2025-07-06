import type { Meta, StoryObj } from '@storybook/react';
import { Button, Input, Label, Checkbox, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@pf/ui';
import { useState } from 'react';

const InteractiveDemo = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-6 p-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="demo-input">Interactive Input</Label>
        <Input
          id="demo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <p className="text-sm text-muted-foreground">
          Current value: {inputValue}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="demo-checkbox"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="demo-checkbox">
          Interactive Checkbox {checked ? '(Checked)' : '(Unchecked)'}
        </Label>
      </div>

      <div className="space-y-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Interactive Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Interactive Dialog</DialogTitle>
              <DialogDescription>
                This dialog demonstrates interactive functionality with state management.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dialog-input">Input in Dialog</Label>
                <Input
                  id="dialog-input"
                  placeholder="Enter text in dialog..."
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="dialog-checkbox" />
                <Label htmlFor="dialog-checkbox">Dialog Checkbox</Label>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Button Variants</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof InteractiveDemo> = {
  title: 'Examples/Interactive Demo',
  component: InteractiveDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};