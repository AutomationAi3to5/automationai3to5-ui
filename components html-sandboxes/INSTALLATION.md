# Installation & Setup Guide

## Quick Start

1. All components are self-contained HTML files
2. Each file links to `../../css/main.css` for styling
3. No build process required - open `.html` files directly in browser

## Accessing Components

### Via Local Server (Recommended)
```bash
npm run dev
# Browse to http://localhost:5000/components
```

### Direct File Access
Open any HTML file directly:
- `components html-sandboxes/index.html` - Component hub
- `components html-sandboxes/forms/button.html` - Button component
- `components html-sandboxes/navigation/navbar.html` - Navigation
- etc.

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- All modern browsers supporting ES2020

## CSS Integration

All components share common styles:
```html
<link rel="stylesheet" href="../../css/main.css">
```

Main CSS structure:
- `main.css` - Loads all component styles
- `design-system.css` - Core design tokens
- `components/` - Individual component styles

## Customization

### Using CSS Variables
Components use CSS custom properties for easy theming:

```css
:root {
  --color-primary: #0066cc;
  --color-secondary: #8b5cf6;
  /* More tokens in assets/tokens.json */
}
```

### Adding New Components

1. Create new HTML file in appropriate category folder
2. Link to main CSS: `<link rel="stylesheet" href="../../css/main.css">`
3. Use existing component classes and patterns
4. Add to index.html navigation

## Development

### File Structure
```
components html-sandboxes/
├── forms/          # Form inputs and buttons
├── navigation/     # Nav bars, breadcrumbs, tabs
├── feedback/       # Alerts, badges, spinners
├── containers/     # Cards, modals, tables
├── guidelines/     # Design guidelines
├── docs/          # Documentation
├── assets/        # Design tokens
└── index.html     # Main navigation
```

### Creating New Files

Follow naming convention:
- Kebab-case for filenames: `button.html`, `form-input.html`
- Lowercase component names
- One component per file for maintainability

## Integration

### HTML/CSS Only
Copy component HTML directly into your project and link the CSS file.

### React
For React projects, import styled components from `react-ui/src/components/`

### Vue/Angular
CSS is framework-agnostic - use classes directly in your templates.

## Performance

- ~5KB total CSS (with gzip)
- No JavaScript required (HTML/CSS components only)
- Images are SVG (optimized and scalable)
- Cross-browser compatible

## Support

For issues or questions:
1. Check component documentation
2. Review design guidelines
3. Examine similar component examples
4. See accessibility standards in guidelines/

---

**Version:** 1.0.0
