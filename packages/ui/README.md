# PF React UI Components

A modern React UI component library based on Radix UI primitives with Tailwind CSS styling.

## Features

- 🎨 **Modern Design**: Built with Tailwind CSS for beautiful, customizable styling
- ♿ **Accessible**: Based on Radix UI primitives for excellent accessibility
- 🎯 **Type Safe**: Full TypeScript support
- 🎭 **Theme Support**: Light and dark theme support out of the box
- 📦 **Modular**: Import only what you need
- 🔧 **Customizable**: Easy to customize with CSS variables and Tailwind classes
- 📚 **Well Documented**: Comprehensive Storybook documentation

## Installation

```bash
npm install pf-react-ui
```

## Usage

```tsx
import { Button, Input, Label, Dialog } from 'pf-react-ui';
import 'pf-react-ui/dist/index.css';

function App() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
      <Button>Submit</Button>
    </div>
  );
}
```

## Components

### Layout Components
- **Accordion** - Collapsible content sections
- **Aspect Ratio** - Maintain aspect ratios
- **Card** - Flexible content containers
- **Separator** - Visual dividers
- **Scroll Area** - Custom scrollable areas

### Form Components
- **Button** - Interactive buttons with variants
- **Input** - Text input fields
- **Label** - Accessible form labels
- **Checkbox** - Toggle checkboxes
- **Radio Group** - Single selection from options
- **Select** - Dropdown selection
- **Slider** - Range input sliders
- **Switch** - Toggle switches
- **OTP Field** - One-time password input
- **Password Toggle Field** - Password input with visibility toggle

### Navigation Components
- **Breadcrumb** - Navigation breadcrumbs
- **Menubar** - Application menu bars
- **Navigation Menu** - Complex navigation menus
- **Tabs** - Tabbed interfaces
- **Toolbar** - Action toolbars

### Overlay Components
- **Dialog** - Modal dialogs
- **Alert Dialog** - Confirmation dialogs
- **Context Menu** - Right-click menus
- **Dropdown Menu** - Dropdown action menus
- **Hover Card** - Hover-triggered cards
- **Popover** - Floating content
- **Tooltip** - Helpful tooltips

### Feedback Components
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Progress** - Progress indicators
- **Toast** - Notification messages

### Interactive Components
- **Toggle** - Toggle buttons
- **Toggle Group** - Grouped toggles

## Theming

The component library uses CSS variables for theming. You can customize the appearance by overriding these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... other dark theme variables */
}
```

## Accessibility

All components are built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for all interactive components
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Logical focus flow and visible focus indicators
- **High Contrast**: Support for high contrast mode
- **RTL Support**: Right-to-left language support

## Examples

### Basic Form

```tsx
import { Button, Input, Label, Checkbox } from 'pf-react-ui';

function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Subscribe to newsletter</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Dialog Example

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
} from 'pf-react-ui';

function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

## Development

This package is built with:
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Storybook](https://storybook.js.org/) - Component documentation
- [Microbundle](https://github.com/developit/microbundle) - Zero-configuration bundler

### Development Scripts

```bash
# Start development mode
npm run dev

# Build the library
npm run build

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Run tests
npm run test
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## License

ISC