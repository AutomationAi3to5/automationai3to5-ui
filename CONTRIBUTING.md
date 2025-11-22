# Guide de Contribution

Merci de vouloir contribuer au Design System AutomationAI3to5! Ce guide explique comment contribuer au projet.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [CSS Standards](#css-standards)
- [React Component Standards](#react-component-standards)
- [Submitting Changes](#submitting-changes)
- [Questions](#questions)

---

## Code of Conduct

En participant à ce projet, vous acceptez:
- Respecter les autres contributeurs
- Maintenir une communication constructive
- Suivre les standards de code établis
- Tester vos changements avant de les soumettre

---

## Getting Started

### Prerequisites

- Node.js 18+ et npm
- Git
- Éditeur de code (VS Code recommandé)

### Installation

```bash
# Clone le repo
git clone https://github.com/automationai/design-system.git
cd design-system

# Install dependencies
npm install
cd react-ui && npm install && cd ..

# Start development
bash start.sh
```

### Development Server

```bash
# Start both Express + Vite
npm run dev

# Or separately
node server.js &
cd react-ui && npm run dev
```

Accès: `http://localhost:5000`

---

## Development Workflow

### 1. Créer une branche

```bash
git checkout -b feature/my-feature
# ou
git checkout -b fix/my-bug
```

### 2. Faire les modifications

Voir sections [CSS Standards](#css-standards) et [React Standards](#react-component-standards).

### 3. Tester localement

```bash
# Test CSS
# Ouvrir http://localhost:5000 et vérifier visuellement

# Test React
cd react-ui
npm run build
npm run preview
```

### 4. Commit et Push

```bash
git add .
git commit -m "feat: add new button variant" # Utiliser conventional commits
git push origin feature/my-feature
```

### 5. Créer Pull Request

- Décrire les changements clairement
- Référencer les issues associées
- Attacher screenshots si relevant

---

## CSS Standards

### File Organization

```
css/
├── tokens.css          # Design tokens
├── main.css            # Master aggregator
├── reset.css           # Browser reset
├── normalize.css       # Normalize browser defaults
├── typography.css      # Typography styles
├── layout.css          # Layout utilities
├── flexbox.css         # Flexbox utilities
├── grid.css            # Grid utilities
├── spacing.css         # Margin/padding utilities
├── colors.css          # Color utilities
├── shadows.css         # Shadow utilities
├── animations.css      # Keyframes and animations
├── transitions.css     # Transition utilities
├── interactions.css    # Interactive elements
├── accessibility.css   # WCAG 2.1 AA compliance
├── utilities.css       # General utilities
├── responsive.css      # Media queries
├── print.css           # Print styles
└── components/         # Component-specific CSS
    ├── buttons.css
    ├── forms.css
    ├── cards.css
    ├── modals.css
    └── ... (60+ files)
```

### Naming Convention

**BEM (Block, Element, Modifier)** en kebab-case:

```css
/* Block */
.button { }

/* Element */
.button__text { }

/* Modifier */
.button--primary { }
.button--sm { }
.button--disabled { }

/* Combined */
.button--primary:hover { }
```

### CSS Variables

Toujours utiliser les tokens CSS:

```css
.my-component {
  padding: var(--space-md);
  background: var(--color-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}
```

### Accessibility

```css
/* Focus states obligatoires */
button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Respect prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  body { background: var(--bg-dark); }
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

### Template

```css
/* [Component Name] - [Description] */

.component {
  /* Layout */
  display: flex;
  gap: var(--space-md);
  
  /* Sizing */
  width: 100%;
  padding: var(--space-md);
  
  /* Styling */
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  
  /* Effects */
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.component:hover { }
.component:focus { }
.component:disabled { }
```

---

## React Component Standards

### File Structure

```
react-ui/src/
├── components/
│   ├── ComponentName.jsx     # Component file
│   ├── index.js              # Export all
│   └── ... (11 components)
├── icons/
│   ├── category-name/
│   │   ├── icon-name.svg
│   │   └── index.js
│   └── index.js              # Central exports
├── styles/
│   ├── ComponentName.css
│   └── index.css
└── index.jsx
```

### Component Template

```jsx
/**
 * ComponentName - Brief description
 * @component
 * @example
 * <ComponentName prop="value">Content</ComponentName>
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

const ComponentName = ({ 
  prop1 = 'default',
  prop2,
  children,
  ...props
}) => {
  return (
    <div className="component-name" {...props}>
      {children}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ComponentName;
```

### PropTypes Validation

```jsx
PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
})

PropTypes.oneOf(['small', 'medium', 'large'])

PropTypes.arrayOf(PropTypes.string)

PropTypes.func
```

### JSDoc Documentation

```jsx
/**
 * Button Component - Reusable button with variants
 * @component
 * @param {Object} props
 * @param {string} [props.variant='primary'] - Button style variant
 * @param {string} [props.size='md'] - Button size
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {function} [props.onClick] - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @returns {React.ReactElement} Rendered button element
 * @example
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 */
```

### Accessibility

```jsx
// ARIA labels
<button aria-label="Close modal">✕</button>

// ARIA disabled
<div aria-disabled={isDisabled}>Content</div>

// ARIA expanded
<button aria-expanded={isOpen}>Menu</button>

// Role attributes
<div role="alert">Alert message</div>
<div role="status">Loading...</div>
```

---

## Submitting Changes

### Before Submitting

1. **Test Locally**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check Linting** (if configured)
   ```bash
   npm run lint
   ```

3. **Format Code**
   ```bash
   npm run format
   ```

4. **Validate Changes**
   - Visual inspection in browser
   - Check accessibility with keyboard
   - Test in different browsers
   - Verify responsive design

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Enhancement
- [ ] Documentation

## Related Issues
Closes #(issue number)

## Testing
Steps to test changes:
1. ...
2. ...

## Screenshots
Attach if relevant

## Checklist
- [ ] Code follows style guidelines
- [ ] Changes tested locally
- [ ] Documentation updated
- [ ] No breaking changes
```

---

## Questions?

- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions
- **Email**: contact@automationai.com
- **Documentation**: Check README.md

---

## Licence

By contributing, you agree that your contributions are licensed under the MIT License.

---

Merci de contribuer! 🎉
