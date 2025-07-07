import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@pf/ui';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="rounded-lg border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <p className="text-sm text-gray-600">
              Make changes to your account here. Click save when you're done.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Save changes</Button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="rounded-lg border p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Password</h3>
            <p className="text-sm text-gray-600">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Save password</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
