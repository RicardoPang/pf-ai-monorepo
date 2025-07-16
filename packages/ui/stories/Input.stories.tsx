import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/input';
import { Label } from '../src/components/label';
import { Button } from '../src/components/button';
import { Mail, Search, Eye, EyeOff } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A text input field component with various types and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Types: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="text">Text</Label>
        <Input type="text" id="text" placeholder="Enter text" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Enter email" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Enter password" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number">Number</Label>
        <Input type="number" id="number" placeholder="Enter number" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="search">Search</Label>
        <Input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="relative">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input type="email" placeholder="Email" className="pl-10" />
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="pl-10" />
      </div>
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Input disabled placeholder="Disabled input" />
      <Input disabled value="Disabled with value" />
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="valid">Valid Input</Label>
        <Input 
          id="valid" 
          placeholder="Valid input" 
          className="border-green-500 focus-visible:ring-green-500" 
        />
        <p className="text-sm text-green-600">This input is valid</p>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="invalid">Invalid Input</Label>
        <Input 
          id="invalid" 
          placeholder="Invalid input" 
          className="border-red-500 focus-visible:ring-red-500" 
        />
        <p className="text-sm text-red-600">This field is required</p>
      </div>
    </div>
  ),
};
