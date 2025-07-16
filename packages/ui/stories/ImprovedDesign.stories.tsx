import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/card';
import { Input } from '../src/components/input';
import { Label } from '../src/components/label';
import { Badge } from '../src/components/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../src/components/avatar';
import { Separator } from '../src/components/separator';

// Improved design showcase component
function ImprovedDesignShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Improved Component Design
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhanced components with better styling, animations, and attention to detail
          </p>
        </div>

        {/* Button Showcase */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Enhanced Buttons
            </CardTitle>
            <CardDescription>
              Improved with better shadows, hover effects, and active states
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button size="lg" className="font-semibold">
                Primary Large
              </Button>
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
              <Button variant="outline" size="lg">
                Outline
              </Button>
              <Button variant="destructive">
                Destructive
              </Button>
              <Button variant="ghost">
                Ghost
              </Button>
              <Button variant="link">
                Link Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Form</CardTitle>
              <CardDescription>
                Better input styling with improved focus states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 hover:border-ring/50"
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>
                Enhanced card design with better spacing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback className="text-lg">CN</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-muted-foreground">Product Designer</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Design</Badge>
                    <Badge variant="outline">Remote</Badge>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Projects</span>
                  <span className="text-sm text-muted-foreground">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Team Members</span>
                  <span className="text-sm text-muted-foreground">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Completion Rate</span>
                  <span className="text-sm text-muted-foreground">98%</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">Message</Button>
                <Button size="sm" variant="outline" className="flex-1">Follow</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2">Better Animations</h3>
              <p className="text-sm text-muted-foreground">
                Smooth transitions and micro-interactions
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2">Enhanced Shadows</h3>
              <p className="text-sm text-muted-foreground">
                Subtle depth and layering effects
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2">Refined Colors</h3>
              <p className="text-sm text-muted-foreground">
                Improved color palette and contrast
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const meta: Meta<typeof ImprovedDesignShowcase> = {
  title: 'Design/Improved Components',
  component: ImprovedDesignShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Showcase of improved component designs with better styling, animations, and attention to detail.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
