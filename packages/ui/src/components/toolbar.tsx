import * as React from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { cn } from '../utils/cn';

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root
    ref={ref}
    className={cn(
      'flex min-h-[40px] items-center space-x-1 rounded-md border bg-background p-1',
      className
    )}
    {...props}
  />
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    ref={ref}
    className={cn('mx-2 h-4 w-px bg-border', className)}
    {...props}
  />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

const ToolbarLink = ToolbarPrimitive.Link;

const ToolbarButton = ToolbarPrimitive.Button;

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

const ToolbarToggleItem = ToolbarPrimitive.ToggleItem;

export {
  Toolbar,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarButton,
  ToolbarToggleGroup,
  ToolbarToggleItem,
};
