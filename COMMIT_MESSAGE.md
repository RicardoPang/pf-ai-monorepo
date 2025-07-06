feat: implement radix-ui component library with tailwind styling

## Summary
- Built modern React UI component library based on Radix UI primitives
- Integrated Tailwind CSS for responsive, accessible styling  
- Set up Storybook development environment for component testing
- Published package to npm registry as 'pf-react-ui'

## Components Added
- **Button**: Multiple variants (default, secondary, outline, destructive, ghost, link) and sizes (sm, default, lg, icon)
- **Input**: Styled input component with focus states and accessibility
- **Label**: Accessible label component with proper form associations
- **Checkbox**: Interactive checkbox with custom SVG checkmark
- **Dialog**: Modal dialog with overlay, close button, and proper focus management

## Key Features
- ✅ **Accessibility**: Built on Radix UI primitives for WCAG compliance
- ✅ **Type Safety**: Full TypeScript support with proper type definitions
- ✅ **Styling**: Tailwind CSS with CSS custom properties for theming
- ✅ **Build System**: Microbundle for optimized bundle generation
- ✅ **Testing**: Storybook for component development and testing
- ✅ **Publishing**: Configured for npm publication

## Project Structure
```
packages/ui/               # Component library
├── src/
│   ├── components/        # React components
│   ├── utils/            # Utility functions (cn for class merging)
│   └── globals.css       # Tailwind base styles
├── dist/                 # Built assets (JS + CSS)
└── package.json          # Package configuration

apps/pf-ui-interface/     # Storybook development app
├── stories/              # Component stories
├── .storybook/          # Storybook configuration
└── src/                 # Custom styles and utilities
```

## Security & Configuration
- **SECURITY**: Removed .npmrc files containing sensitive npm tokens
- **Updated .gitignore**: Added patterns for dist/, .npmrc, package-lock.json
- **Build Assets**: Excluded from git (auto-generated)
- **Dependencies**: Configured peer dependencies for React ecosystem

## Development Commands
```bash
# Component library
cd packages/ui
npm run build              # Build components
npm run dev               # Watch mode

# Storybook development  
cd apps/pf-ui-interface
npm run storybook         # Start development server
npm run build-storybook   # Build static site
```

## Usage Example
```tsx
import { Button, Input, Label } from 'pf-react-ui';
import 'pf-react-ui/dist/index.css';

function App() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter email" />
      <Button variant="primary" size="lg">Submit</Button>
    </div>
  );
}
```

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>