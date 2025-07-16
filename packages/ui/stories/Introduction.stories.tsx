import type { Meta, StoryObj } from '@storybook/react';

// Introduction component
function Introduction() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">PF React UI Components</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        A modern React UI component library based on Radix UI primitives with Tailwind CSS styling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            <li>🎨 <strong>Modern Design</strong>: Built with Tailwind CSS</li>
            <li>♿ <strong>Accessible</strong>: Based on Radix UI primitives</li>
            <li>🎯 <strong>Type Safe</strong>: Full TypeScript support</li>
            <li>🎭 <strong>Theme Support</strong>: Light and dark themes</li>
            <li>📦 <strong>Modular</strong>: Import only what you need</li>
            <li>🔧 <strong>Customizable</strong>: Easy to customize</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <code>npm install pf-react-ui</code>
          </div>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">Usage</h3>
          <div className="bg-gray-100 p-4 rounded-lg text-sm">
            <pre>{`import { Button, Input, Label } from 'pf-react-ui';
import 'pf-react-ui/dist/index.css';

function App() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
      <Button>Submit</Button>
    </div>
  );
}`}</pre>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Component Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Layout Components</h3>
            <p className="text-sm text-gray-600 mb-2">Structure and organize content</p>
            <ul className="text-sm space-y-1">
              <li>• Accordion</li>
              <li>• Card</li>
              <li>• Separator</li>
              <li>• Scroll Area</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Form Components</h3>
            <p className="text-sm text-gray-600 mb-2">User input and interaction</p>
            <ul className="text-sm space-y-1">
              <li>• Button</li>
              <li>• Input</li>
              <li>• Checkbox</li>
              <li>• Select</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <p className="text-sm text-gray-600 mb-2">Help users navigate</p>
            <ul className="text-sm space-y-1">
              <li>• Breadcrumb</li>
              <li>• Tabs</li>
              <li>• Navigation Menu</li>
              <li>• Menubar</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Overlay Components</h3>
            <p className="text-sm text-gray-600 mb-2">Modal and floating content</p>
            <ul className="text-sm space-y-1">
              <li>• Dialog</li>
              <li>• Popover</li>
              <li>• Tooltip</li>
              <li>• Context Menu</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Feedback</h3>
            <p className="text-sm text-gray-600 mb-2">Status and notifications</p>
            <ul className="text-sm space-y-1">
              <li>• Badge</li>
              <li>• Progress</li>
              <li>• Toast</li>
              <li>• Avatar</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Interactive</h3>
            <p className="text-sm text-gray-600 mb-2">User interactions</p>
            <ul className="text-sm space-y-1">
              <li>• Toggle</li>
              <li>• Toggle Group</li>
              <li>• Collapsible</li>
              <li>• Hover Card</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-600 mb-4">
          Explore the components in the sidebar to see examples, documentation, and interactive demos.
          Each component includes multiple variants and usage examples to help you get started quickly.
        </p>
        <p className="text-gray-600">
          All components are built with accessibility in mind and follow modern React patterns.
          They're fully customizable and work great with Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {};
