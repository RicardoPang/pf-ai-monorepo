# ricardopang-ui-components

A modern React UI component library based on Radix UI with Tailwind CSS styling.

## Features

- 🎨 **Modern Design**: Built with Tailwind CSS for beautiful, customizable styling
- ♿ **Accessible**: Based on Radix UI primitives for excellent accessibility
- 🎯 **Type Safe**: Full TypeScript support
- 🎭 **Theme Support**: Light and dark theme support out of the box
- 📦 **Modular**: Import only what you need

## Installation

```bash
npm install ricardopang-ui-components
```

## Usage

```tsx
import { Button, Input, Label, Checkbox, Dialog } from 'ricardopang-ui-components';
import 'ricardopang-ui-components/dist/index.css';

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

- **Button**: Multiple variants (default, secondary, outline, destructive, ghost, link)
- **Input**: Styled input component
- **Label**: Accessible label component
- **Checkbox**: Interactive checkbox component
- **Dialog**: Modal dialog component

## Development

This package is built with:
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Microbundle](https://github.com/developit/microbundle) - Zero-configuration bundler

## License

ISC