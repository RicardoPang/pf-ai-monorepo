import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeProvider, ThemeToggle, useTheme } from '../src/components/theme-provider';
import { Button } from '../src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card';
import { Badge } from '../src/components/badge';

// Demo component to showcase theme
function ThemeDemo() {
  const { theme } = useTheme();
  
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Theme Demo</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm">Current theme: {theme}</span>
          <ThemeToggle />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Colors</CardTitle>
            <CardDescription>
              Primary colors and variants in the current theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div className="flex gap-2">
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>
              Text styles and hierarchy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-medium">Heading 3</h3>
            <h4 className="text-xl">Heading 4</h4>
            <p className="text-base">Body text with normal weight</p>
            <p className="text-sm text-muted-foreground">
              Muted text for secondary information
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Surfaces</CardTitle>
            <CardDescription>
              Background and surface colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-background border rounded">
              Background
            </div>
            <div className="p-4 bg-muted rounded">
              Muted background
            </div>
            <div className="p-4 bg-accent rounded">
              Accent background
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interactive States</CardTitle>
            <CardDescription>
              Hover and focus states
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full">Hover me</Button>
            <input 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Focus me"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const meta: Meta<typeof ThemeProvider> = {
  title: 'Theme/Theme System',
  component: ThemeProvider,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive theme system with light and dark mode support.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeDemo />
    </ThemeProvider>
  ),
};

export const ThemeToggleExample: Story = {
  render: () => (
    <ThemeProvider>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Theme Toggle</h2>
          <ThemeToggle />
        </div>
        <p className="text-muted-foreground">
          Click the toggle button to switch between light and dark themes.
          The theme preference will be saved to localStorage.
        </p>
      </div>
    </ThemeProvider>
  ),
};
