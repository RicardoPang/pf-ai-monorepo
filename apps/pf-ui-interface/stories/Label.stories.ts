import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@pf/ui';
import React from 'react';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'input-id',
    children: 'Email Address',
  },
};