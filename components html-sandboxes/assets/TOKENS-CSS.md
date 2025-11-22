# Using Design Tokens in CSS

Import design tokens as CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #0066cc;
  --color-secondary: #8b5cf6;
  --color-danger: #dc3545;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-info: #0c5460;
  --color-light: #f5f5f5;
  --color-dark: #1a1a1a;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* Shadows */
  --shadow-small: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-large: 0 8px 16px rgba(0, 0, 0, 0.1);
  --shadow-xlarge: 0 12px 24px rgba(0, 0, 0, 0.15);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-base: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
}
```

## Usage Examples

```css
/* Button */
.btn {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  padding: var(--space-sm) var(--space-md);
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-small);
}

/* Card */
.card {
  padding: var(--space-lg);
  background-color: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-medium);
}

/* Heading */
h1 {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-lg);
}
```
