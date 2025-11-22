# Détails d'Usage des Composants

Guide complet d'utilisation de tous les composants du Design System.

## Table of Contents

- [Icon](#icon)
- [IconShowcase](#iconshowcase)
- [Button](#button)
- [Input](#input)
- [Card](#card)
- [Alert](#alert)
- [Badge](#badge)
- [Accordion](#accordion)
- [Modal](#modal)
- [Loader](#loader)
- [Table](#table)

---

## Icon

**Composant:** Affiche une icône SVG avec customization complète

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | string | 'home' | Nom de l'icône |
| `category` | string | 'navigation' | Catégorie de l'icône |
| `size` | number | 24 | Taille en pixels |
| `color` | string | 'currentColor' | Couleur (hex, rgb, ou CSS color) |
| `alt` | string | '' | Texte alternatif (accessibilité) |
| `onClick` | function | null | Handler au clic |
| `className` | string | '' | Classes CSS additionnelles |

### Exemples

```jsx
// Simple
<Icon name="home" />

// Customisé
<Icon 
  name="settings" 
  category="navigation"
  size={32}
  color="#6366f1"
  alt="Settings"
/>

// Clickable
<Icon 
  name="download"
  category="actions"
  size={24}
  onClick={() => console.log('Downloaded')}
/>

// Avec classe CSS
<Icon 
  name="user"
  category="users"
  className="icon-highlight"
/>
```

### Catégories Disponibles

- `navigation` - home, menu, close, search, settings, back, forward, bell, chevron-*
- `actions` - download, upload, edit, delete, copy, save, refresh, plus, minus, check
- `users` - user, users, profile, avatar, team, user-plus, user-minus
- `communication` - mail, message, chat, send, phone, phone-call, mail-open
- `feedback` - alert, success, warning, error, info, help, question, mark
- `media` - image, video, camera, play, pause, stop, volume, *
- `time` - clock, calendar, watch, timer, hourglass, stopwatch, alarm
- `security` - lock, unlock, key, shield, verified, badge, lock-open
- `forms` - checkbox, radio, toggle, switch, input, textarea, select

---

## IconShowcase

**Composant:** Interface interactive pour explorer et copier toutes les icônes

### Features

- 🔍 Recherche instantanée
- 🎨 Sélecteur taille (16-64px)
- 🎨 Sélecteur couleur
- 📋 Copy code en un clic (2 options)
- 📱 Responsive design

### Usage

```jsx
import IconShowcase from '@/components/IconShowcase'

export function MyApp() {
  return <IconShowcase />
}
```

### Output Code

Quand l'utilisateur clique "Copy", le composant génère:

```jsx
// Option 1: Using Icon component
import Icon from '@/components/Icon'
<Icon name="download" category="actions" size={24} color="#6366f1" />

// Option 2: Direct import
import { DownloadIcon } from '@/icons'
<DownloadIcon width={24} height={24} stroke="currentColor" />
```

---

## Button

**Composant:** Bouton réutilisable avec variants

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary' \| 'secondary' \| 'danger' \| 'success' | 'primary' | Style du bouton |
| `size` | 'sm' \| 'md' \| 'lg' | 'md' | Taille |
| `disabled` | boolean | false | État désactivé |
| `onClick` | function | null | Handler au clic |
| `type` | 'button' \| 'submit' \| 'reset' | 'button' | Type HTML |
| `children` | React.ReactNode | required | Contenu |

### Exemples

```jsx
// Simple
<Button>Click me</Button>

// Variant
<Button variant="danger">Delete</Button>
<Button variant="success">Save</Button>

// Taille
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Désactivé
<Button disabled>Disabled</Button>

// Form submission
<Button type="submit" variant="primary">Submit</Button>

// Avec icône
<Button variant="primary">
  <DownloadIcon size={16} /> Download
</Button>
```

### CSS Classes

```css
.button
.button--primary
.button--secondary
.button--danger
.button--success
.button--sm
.button--md
.button--lg
.button:disabled
```

---

## Input

**Composant:** Champ de saisie avec états de validation

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | 'text' | Type d'input (text, email, password, etc.) |
| `placeholder` | string | '' | Placeholder text |
| `value` | string | '' | Valeur contrôlée |
| `onChange` | function | null | Handler au changement |
| `error` | boolean | false | État erreur (bordure rouge) |
| `success` | boolean | false | État succès (bordure verte) |
| `disabled` | boolean | false | État désactivé |

### Exemples

```jsx
// Simple text input
const [email, setEmail] = useState('')
<Input 
  type="email"
  placeholder="Email..."
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Avec validation
const [password, setPassword] = useState('')
<Input
  type="password"
  placeholder="Password..."
  value={password}
  error={password.length < 8}
  onChange={(e) => setPassword(e.target.value)}
/>

// Succès
<Input
  type="text"
  value="john@example.com"
  success={true}
  disabled={true}
/>

// Avec message d'erreur
<>
  <Input error={true} />
  <span style={{ color: 'red' }}>Email invalide</span>
</>
```

---

## Card

**Composant:** Container flexible avec sections

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | React.ReactNode | null | Section header |
| `footer` | React.ReactNode | null | Section footer |
| `children` | React.ReactNode | required | Body content |
| `className` | string | '' | Classes CSS additionnelles |

### Exemples

```jsx
// Simple
<Card>
  <p>Card content</p>
</Card>

// Avec header et footer
<Card
  header={<h2>Card Title</h2>}
  footer={<button>Action</button>}
>
  <p>Main content here</p>
</Card>

// Avec icônes
<Card
  header={
    <div style={{ display: 'flex', gap: '8px' }}>
      <UserIcon /> 
      <h3>Profile</h3>
    </div>
  }
>
  <p>User information</p>
</Card>

// Styled
<Card className="featured-card">
  Content
</Card>
```

---

## Alert

**Composant:** Message d'alerte avec variants

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'info' \| 'success' \| 'warning' \| 'error' | 'info' | Type d'alerte |
| `title` | string | null | Titre optionnel |
| `children` | React.ReactNode | required | Message |
| `onClose` | function | null | Handler fermeture |

### Exemples

```jsx
// Simple
<Alert variant="success">
  Votre action a réussi!
</Alert>

// Avec titre
<Alert variant="warning" title="Attention">
  Vous êtes sur le point de supprimer...
</Alert>

// Dismissible
const [visible, setVisible] = useState(true)
{visible && (
  <Alert 
    variant="error"
    title="Erreur"
    onClose={() => setVisible(false)}
  >
    Une erreur est survenue
  </Alert>
)}
```

---

## Badge

**Composant:** Indicateur de statut

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | 'primary' \| 'success' \| 'danger' \| 'warning' \| 'info' | 'primary' | Style |
| `children` | React.ReactNode | required | Contenu |

### Exemples

```jsx
<Badge variant="primary">Active</Badge>
<Badge variant="success">Verified</Badge>
<Badge variant="danger">Inactive</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">Info</Badge>

// Avec données
const status = 'active'
<Badge variant={status === 'active' ? 'success' : 'danger'}>
  {status}
</Badge>
```

---

## Accordion

**Composant:** Section repliable

### Features

- Animations fluides
- Support clavier
- ARIA labels
- State management

### Usage

```jsx
import Accordion from '@/components/Accordion'

const items = [
  { title: 'Section 1', content: 'Content 1' },
  { title: 'Section 2', content: 'Content 2' },
]

<Accordion items={items} />
```

---

## Modal

**Composant:** Dialog modal avec backdrop

### Features

- Backdrop clickable
- Close button
- Animations
- Scrollable content

### Usage

```jsx
import Modal from '@/components/ModalPortal'

const [open, setOpen] = useState(false)

<>
  <Button onClick={() => setOpen(true)}>Open Modal</Button>
  
  <Modal isOpen={open} onClose={() => setOpen(false)}>
    <h2>Modal Title</h2>
    <p>Modal content</p>
  </Modal>
</>
```

---

## Loader

**Composant:** Indicateur de chargement

### Usage

```jsx
import Loader from '@/components/Loader'

// Simple
<Loader />

// Avec message
<div style={{ textAlign: 'center' }}>
  <Loader />
  <p>Chargement en cours...</p>
</div>
```

---

## Table

**Composant:** Tableau avec tri et pagination

### Features

- Tri par colonne
- Pagination
- Responsive design
- Données dynamiques

### Usage

```jsx
import Table from '@/components/TableSortable'

const data = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' },
]

<Table data={data} columns={['id', 'name', 'email']} />
```

---

## Bonnes Pratiques

### Accessibilité

```jsx
// ✓ BON - Avec aria-label
<Button aria-label="Close modal">✕</Button>

// ✗ MAUVAIS - Pas d'accessibilité
<Button>✕</Button>

// ✓ BON - Alt text pour les icônes
<Icon name="download" alt="Download file" />

// ✗ MAUVAIS - Pas de contexte
<Icon name="download" />
```

### Performance

```jsx
// ✓ BON - Memoized callback
const handleClick = useCallback(() => { }, [])

// ✗ MAUVAIS - Inline function (recréée à chaque render)
<Button onClick={() => doSomething()}>
```

### Responsive

```jsx
// ✓ BON - Responsive
<div style={{ 
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem'
}}>

// ✗ MAUVAIS - Fixed width
<div style={{ width: '1200px' }}>
```

---

## Support

Pour des questions:
- Consulter la documentation (README.md)
- Ouvrir une issue
- Voir NPM-PUBLISH.md pour la publication
