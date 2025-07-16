import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card';
import { Badge } from '../src/components/badge';
import { Progress } from '../src/components/progress';
import { Separator } from '../src/components/separator';

// Component Library Overview
function ComponentLibraryOverview() {
  const componentCategories = [
    {
      title: 'Layout Components',
      description: 'Components for structuring and organizing content',
      components: [
        'Accordion', 'Aspect Ratio', 'Card', 'Collapsible', 'Command', 
        'Separator', 'Scroll Area', 'Sheet', 'Skeleton', 'Table'
      ],
      count: 10,
      color: 'bg-blue-500'
    },
    {
      title: 'Form Components',
      description: 'Interactive form elements and inputs',
      components: [
        'Button', 'Input', 'Label', 'Checkbox', 'Form', 'Radio Group',
        'Select', 'Slider', 'Switch', 'Textarea', 'OTP Field', 'Password Toggle'
      ],
      count: 12,
      color: 'bg-green-500'
    },
    {
      title: 'Navigation Components',
      description: 'Components for navigation and wayfinding',
      components: [
        'Breadcrumb', 'Menubar', 'Navigation Menu', 'Pagination', 
        'Tabs', 'Toolbar'
      ],
      count: 6,
      color: 'bg-purple-500'
    },
    {
      title: 'Overlay Components',
      description: 'Modal dialogs and floating content',
      components: [
        'Dialog', 'Alert Dialog', 'Context Menu', 'Dropdown Menu',
        'Hover Card', 'Popover', 'Tooltip'
      ],
      count: 7,
      color: 'bg-orange-500'
    },
    {
      title: 'Feedback Components',
      description: 'Components for user feedback and status',
      components: [
        'Avatar', 'Badge', 'Progress', 'Toast', 'Toaster'
      ],
      count: 5,
      color: 'bg-pink-500'
    },
    {
      title: 'Interactive Components',
      description: 'Components for user interaction',
      components: [
        'Toggle', 'Toggle Group'
      ],
      count: 2,
      color: 'bg-indigo-500'
    }
  ];

  const totalComponents = componentCategories.reduce((sum, cat) => sum + cat.count, 0);
  const completionPercentage = Math.round((totalComponents / 50) * 100); // Assuming 50 total possible components

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Component Library Overview
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of {totalComponents} React components built with Radix UI primitives and styled with Tailwind CSS
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Components</p>
                  <p className="text-3xl font-bold">{totalComponents}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-3xl font-bold">{componentCategories.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completion</p>
                  <p className="text-3xl font-bold">{completionPercentage}%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={completionPercentage} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {componentCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <Badge variant="secondary">{category.count} components</Badge>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.components.map((component, compIndex) => (
                    <Badge key={compIndex} variant="outline" className="text-xs">
                      {component}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              What makes our component library special
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold">Accessible</h3>
                <p className="text-sm text-muted-foreground">Built with Radix UI primitives for excellent accessibility</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold">Customizable</h3>
                <p className="text-sm text-muted-foreground">Styled with Tailwind CSS for easy customization</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold">Type Safe</h3>
                <p className="text-sm text-muted-foreground">Full TypeScript support with comprehensive types</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold">Modern</h3>
                <p className="text-sm text-muted-foreground">Contemporary design with smooth animations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground">
                  Explore individual components or check out the documentation
                </p>
              </div>
              <div className="flex gap-2">
                <Button>View Components</Button>
                <Button variant="outline">Documentation</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const meta: Meta<typeof ComponentLibraryOverview> = {
  title: 'Overview/Component Library',
  component: ComponentLibraryOverview,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete overview of all available components in the library.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
