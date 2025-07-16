import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card';
import { Badge } from '../src/components/badge';

// Style test component
function StyleTest() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Style Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-blue-500">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-900">Tailwind CSS Test</CardTitle>
            <CardDescription className="text-blue-700">
              This card should have blue styling if Tailwind is working
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Gradient Button
              </Button>
              <div className="flex gap-2">
                <Badge className="bg-green-500">Success</Badge>
                <Badge className="bg-yellow-500">Warning</Badge>
                <Badge className="bg-red-500">Error</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Component Variants</CardTitle>
            <CardDescription>
              Testing all button variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="default" className="w-full">Default</Button>
            <Button variant="secondary" className="w-full">Secondary</Button>
            <Button variant="outline" className="w-full">Outline</Button>
            <Button variant="destructive" className="w-full">Destructive</Button>
            <Button variant="ghost" className="w-full">Ghost</Button>
            <Button variant="link" className="w-full">Link</Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-900">
          Background Gradient Test
        </h2>
        <p className="text-indigo-700">
          If you can see this gradient background and colored text, 
          Tailwind CSS is working correctly in Storybook!
        </p>
      </div>
    </div>
  );
}

const meta: Meta<typeof StyleTest> = {
  title: 'Development/Style Test',
  component: StyleTest,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A test component to verify that Tailwind CSS styles are working correctly in Storybook.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomColors: Story = {
  render: () => (
    <div className="p-8 bg-slate-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Dark Theme Test</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-red-600 rounded">Red</div>
        <div className="p-4 bg-green-600 rounded">Green</div>
        <div className="p-4 bg-blue-600 rounded">Blue</div>
      </div>
    </div>
  ),
};
