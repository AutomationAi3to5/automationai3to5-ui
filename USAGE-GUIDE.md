# Guide d'Utilisation Complet - Design System AutomationAI3to5

Guide détaillé pour utiliser le Design System dans vos projets.

## Table of Contents

1. [Installation](#installation)
2. [Démarrage Rapide](#démarrage-rapide)
3. [Utilisation CSS](#utilisation-css)
4. [Composants React](#composants-react)
5. [Icônes SVG](#icônes-svg)
6. [Mode Dark](#mode-dark)
7. [Personnalisation](#personnalisation)
8. [Accessibilité](#accessibilité)
9. [Performance](#performance)
10. [Troubleshooting](#troubleshooting)

---

## Installation

### Option 1: NPM (Recommandé)

```bash
# Package CSS + Server
npm install @automationai/design-system

# Package React Components
npm install @automationai/design-system-react
```

### Option 2: Local Development

```bash
# Clone le repo
git clone https://github.com/automationai/design-system.git
cd design-system

# Install dependencies
npm install
cd react-ui && npm install && cd ..
```

### Option 3: Replit

```bash
# Ouvrir dans Replit
# Lien: https://replit.com/@automationai/design-system
# Cliquer sur "Publish" pour déployer
```

---

## Démarrage Rapide

### Development

```bash
# Express server + Vite dev
npm run dev

# Ou séparément
npm start                  # Express (port 5000)
npm run react:dev          # Vite (port 5173)
```

Accès: `http://localhost:5000`

### Production Build

```bash
npm run build

# Output: public/dist/ (prêt pour déploiement)
```

### Quick Test

```bash
# Vérifier l'installation
npm run build
echo "✅ Build réussi"
```

---

## Utilisation CSS

### Import Minimal (Production)

```html
<!-- HTML -->
<link rel="stylesheet" href="node_modules/@automationai/design-system/css/main.css">
```

```javascript
// JavaScript/React
import '@automationai/design-system/css/main.css'
```

### Structure CSS

```
css/
├── tokens.css              # Variables CSS - IMPORTER TOUJOURS
├── main.css                # Master aggregator
├── reset.css               # Browser defaults
├── components/buttons.css  # Composants spécifiques
└── ... (90 fichiers total)
```

### Exemple: Utilisation Basique

```html
<!-- Button -->
<button class="button button--primary">Primary Button</button>
<button class="button button--secondary button--sm">Small Secondary</button>

<!-- Input -->
<input type="text" class="input" placeholder="Entrez votre email...">
<input type="text" class="input input--error" placeholder="Avec erreur...">

<!-- Card -->
<div class="card">
  <div class="card-header">Titre</div>
  <div class="card-body">Contenu</div>
  <div class="card-footer">Footer</div>
</div>

<!-- Alert -->
<div class="alert alert--success">
  ✅ Succès!
  <button class="alert-close">✕</button>
</div>

<!-- Badge -->
<span class="badge badge--primary">Active</span>
```

### Utilisation des Tokens CSS

```css
/* Dans vos propres CSS -->
.my-component {
  /* Couleurs */
  color: var(--text-primary);
  background: var(--bg-secondary);
  
  /* Espacements */
  padding: var(--space-md);
  margin: var(--space-lg);
  
  /* Typographie */
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  
  /* Radius */
  border-radius: var(--radius-md);
  
  /* Ombres */
  box-shadow: var(--shadow-md);
  
  /* Transitions */
  transition: all var(--transition-base);
}
```

### Classes Utilitaires

```html
<!-- Flexbox -->
<div class="flex items-center justify-between gap-md">...</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-lg">...</div>

<!-- Spacing -->
<div class="p-md m-lg">...</div>

<!-- Display -->
<div class="hidden">...</div>
<div class="flex flex-col">...</div>

<!-- Colors -->
<div class="bg-primary text-white">...</div>
<p class="text-secondary">...</p>

<!-- Text -->
<p class="text-center truncate">...</p>
```

---

## Composants React

### Installation React

```bash
npm install @automationai/design-system-react
```

### Import & Utilisation

```jsx
import { 
  Button, 
  Input, 
  Card, 
  Alert, 
  Badge,
  Accordion,
  Icon,
  IconShowcase,
  Modal,
  Loader,
  Table
} from '@automationai/design-system-react'

export function MyApp() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Email..." />
    </div>
  )
}
```

### Détails Composants

#### Button

```jsx
import { Button } from '@automationai/design-system-react'

// Variants: primary, secondary, danger, success
// Sizes: sm, md, lg
// States: disabled

<Button variant="primary" size="lg">
  Save
</Button>

<Button variant="danger" disabled>
  Delete (Disabled)
</Button>

<Button onClick={() => alert('Clicked!')}>
  Clickable
</Button>
```

#### Input

```jsx
import { Input } from '@automationai/design-system-react'

const [value, setValue] = useState('')

<Input 
  type="email"
  placeholder="Enter email..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={!value.includes('@')}
  success={value.length > 0}
/>
```

#### Card

```jsx
import { Card } from '@automationai/design-system-react'

<Card
  header={<h2>Card Title</h2>}
  footer={<button>Action</button>}
>
  <p>Card content here</p>
</Card>
```

#### Alert

```jsx
import { Alert } from '@automationai/design-system-react'

const [visible, setVisible] = useState(true)

{visible && (
  <Alert 
    variant="success" 
    title="Success!"
    onClose={() => setVisible(false)}
  >
    Your action completed successfully
  </Alert>
)}
```

#### Badge

```jsx
import { Badge } from '@automationai/design-system-react'

<div>
  <Badge variant="primary">Active</Badge>
  <Badge variant="success">Verified</Badge>
  <Badge variant="danger">Inactive</Badge>
</div>
```

#### Accordion

```jsx
import { Accordion } from '@automationai/design-system-react'

const items = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
]

<Accordion items={items} />
```

#### Modal

```jsx
import { Modal } from '@automationai/design-system-react'
import { useState } from 'react'

export function ModalExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Modal Title</h2>
        <p>Modal content</p>
      </Modal>
    </>
  )
}
```

#### Loader

```jsx
import { Loader } from '@automationai/design-system-react'

<div style={{ textAlign: 'center' }}>
  <Loader />
  <p>Loading...</p>
</div>
```

#### Table

```jsx
import { Table } from '@automationai/design-system-react'

const data = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' },
]

<Table data={data} columns={['id', 'name', 'email']} />
```

---

## Icônes SVG

### Installation

```bash
npm install @automationai/design-system-react
```

### 3 Façons d'Utiliser

#### Option 1: Import Direct (Recommandé)

```jsx
import { HomeIcon, SettingsIcon, DownloadIcon } from '@automationai/design-system-react/icons'

<HomeIcon width={24} height={24} stroke="currentColor" />
<SettingsIcon width={32} color="blue" />
```

#### Option 2: Par Catégorie

```jsx
import * as navigation from '@automationai/design-system-react/icons/navigation'
import * as actions from '@automationai/design-system-react/icons/actions'

<navigation.home />
<actions.download />
```

#### Option 3: Composant Dynamique

```jsx
import { Icon } from '@automationai/design-system-react'

<Icon 
  name="download" 
  category="actions"
  size={24}
  color="#6366f1"
  alt="Download file"
/>
```

### Explorer les Icônes

```jsx
import { IconShowcase } from '@automationai/design-system-react'

// Interface interactive pour explorer 329+ icônes
<IconShowcase />
```

### Catégories Disponibles

```
navigation     (home, menu, search, settings, back, forward, ...)
actions        (download, upload, edit, delete, copy, save, ...)
users          (user, users, profile, avatar, team, ...)
communication  (mail, message, chat, send, phone, ...)
feedback       (alert, success, warning, error, info, help, ...)
media          (image, video, camera, play, pause, ...)
time           (clock, calendar, watch, timer, ...)
security       (lock, unlock, key, shield, verified, ...)
forms          (checkbox, radio, toggle, switch, input, ...)
```

### Styling Icons

```jsx
// Inline CSS
<DownloadIcon 
  width={24} 
  height={24} 
  style={{ color: 'blue', cursor: 'pointer' }}
/>

// CSS Classes
<HomeIcon className="icon-large icon-highlight" />

/* CSS */
.icon-large {
  width: 32px;
  height: 32px;
}
.icon-highlight {
  color: var(--color-primary);
}
```

---

## Mode Dark

### CSS Automatique

Mode dark s'active automatiquement selon les préférences système:

```css
/* Les tokens CSS s'ajustent automatiquement */
@media (prefers-color-scheme: dark) {
  body {
    background: var(--bg-dark);
    color: var(--text-light);
  }
}
```

### CSS Tokens

Les tokens CSS changent selon le mode:

```css
--bg-primary     /* Light: white, Dark: dark-gray */
--bg-secondary   /* Light: gray, Dark: darker-gray */
--text-primary   /* Light: dark, Dark: light */
--color-primary  /* Constant: indigo */
```

### Forcer le Mode Dark (optionnel)

```javascript
// Ajouter classe HTML
document.documentElement.classList.add('dark')

// Ou CSS
html.dark {
  color-scheme: dark;
}
```

---

## Personnalisation

### Override des Tokens

```css
:root {
  /* Override les couleurs */
  --color-primary: #ff0000;
  --color-secondary: #00ff00;
  
  /* Override l'espacement */
  --space-md: 1.5rem;
  
  /* Override la typographie */
  --font-size-lg: 1.25rem;
}
```

### Override des Composants

```css
/* Override button */
.button {
  border-radius: 0; /* Square buttons */
  text-transform: uppercase; /* Uppercase text */
}

.button--primary {
  background: var(--color-custom);
}
```

### Custom Variants

```css
/* Ajouter une variante */
.button--custom {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  font-weight: 800;
}
```

---

## Accessibilité

### WCAG 2.1 AA Compliance

Tous les composants respectent WCAG 2.1 AA:

```jsx
// ✅ BON - Avec aria-label
<Button aria-label="Close modal">✕</Button>

// ✅ BON - Alt text pour icons
<Icon name="download" alt="Download file" />

// ✅ BON - Focus visible
button:focus-visible {
  outline: 2px solid var(--color-primary);
}

// ✅ BON - Keyboard support
<input type="text" aria-label="Search..." />
```

### Keyboard Navigation

Tous les composants supportent la navigation au clavier:

- `Tab` - Navigate to next element
- `Shift+Tab` - Previous element
- `Enter` - Activate button
- `Escape` - Close modal
- `Arrow Keys` - Navigate menus

### Respect prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Performance

### Bundle Size

```
CSS:        ~15KB (minified)
React:      ~180KB (with dependencies)
Icons:      ~0.3KB per icon (SVG)
Total:      ~200KB (gzipped: ~50KB)
```

### Lazy Loading Icons

```jsx
import { lazy, Suspense } from 'react'
const IconShowcase = lazy(() => import('@automationai/design-system-react/IconShowcase'))

<Suspense fallback={<Loader />}>
  <IconShowcase />
</Suspense>
```

### Code Splitting

```jsx
// Importer seulement ce que vous utilisez
import { Button } from '@automationai/design-system-react'
// Ne charge pas: Input, Card, Alert, etc.
```

---

## Troubleshooting

### Problème: Styles non appliqués

```jsx
// ✓ SOLUTION: Importer CSS en premier
import '@automationai/design-system/css/main.css'
import MyComponent from './MyComponent'
```

### Problème: Icônes non affichées

```jsx
// ✓ SOLUTION: Vérifier vite.config.js
// Doit avoir: vite-plugin-svgr configuré

// ✓ Vérifier l'import
import { HomeIcon } from '@automationai/design-system-react/icons'
```

### Problème: Mode dark non actif

```javascript
// ✓ SOLUTION: Vérifier les préférences système
// Windows: Settings > Colors > App mode
// macOS: System Preferences > General > Appearance
// Linux: GNOME Settings > Appearance

// Ou forcer:
document.documentElement.style.colorScheme = 'dark'
```

### Problème: Build échoue

```bash
# ✓ SOLUTION: Nettoyer et rebuild
rm -rf node_modules react-ui/node_modules
npm install
npm run build
```

---

## Exemples Complets

### Dashboard Layout

```jsx
import { Button, Card, Alert, Badge } from '@automationai/design-system-react'
import { DashboardIcon } from '@automationai/design-system-react/icons/navigation'

export function Dashboard() {
  return (
    <div style={{ padding: 'var(--space-lg)' }}>
      <header style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1>Dashboard</h1>
      </header>

      <Alert variant="success" title="Welcome">
        You're all set to get started!
      </Alert>

      <div className="grid grid-cols-3 gap-lg" style={{ marginTop: 'var(--space-lg)' }}>
        <Card header={<h3>Stats</h3>}>
          <p>Key metrics</p>
        </Card>
        <Card header={<h3>Users</h3>}>
          <Badge variant="primary">12 Active</Badge>
        </Card>
        <Card header={<h3>Reports</h3>}>
          <Button>View All</Button>
        </Card>
      </div>
    </div>
  )
}
```

### Form with Validation

```jsx
import { Input, Button, Alert } from '@automationai/design-system-react'
import { useState } from 'react'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('Invalid email')
      return
    }
    console.log('Submitted:', email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
      />
      {error && <Alert variant="error">{error}</Alert>}
      <Button type="submit">Sign Up</Button>
    </form>
  )
}
```

---

## Ressources

- **Repository**: https://github.com/automationai/design-system
- **NPM**: https://www.npmjs.com/package/@automationai/design-system
- **Documentation**: README.md, CHANGELOG.md, COMPONENT-USAGE.md
- **Contributing**: CONTRIBUTING.md
- **Pub NPM**: NPM-PUBLISH.md

---

## Support

- **Issues**: Create issue on GitHub
- **Discussions**: GitHub Discussions
- **Email**: contact@automationai.com

---

**Version:** 1.0.0  
**Last Updated:** November 22, 2024  
**Status:** Production Ready ✅
