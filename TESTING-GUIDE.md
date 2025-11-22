# Guide des Tests - Design System

Guide complet pour tester le Design System avec Jest et React Testing Library.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Structure des Tests](#structure-des-tests)
4. [Types de Tests](#types-de-tests)
5. [Exécution des Tests](#exécution-des-tests)
6. [Coverage](#coverage)
7. [Bonnes Pratiques](#bonnes-pratiques)
8. [Examples](#examples)

---

## Installation

### Dépendances

```bash
cd react-ui
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save-dev babel-jest @babel/preset-env @babel/preset-react
npm install --save-dev identity-obj-proxy
```

### Root Installation

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

---

## Configuration

### Files Créés

```
jest.config.js           # Configuration Jest
jest.setup.js            # Setup global
react-ui/.babelrc        # Configuration Babel (créer si absent)
__mocks__/fileMock.js    # Mock pour assets
```

### .babelrc (React-UI)

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    "@babel/preset-react"
  ]
}
```

### Script Package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## Structure des Tests

### Organisation Recommandée

```
react-ui/src/
├── components/
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── __tests__/
│   │   ├── Button.test.jsx
│   │   ├── Input.test.jsx
│   │   └── integration.test.jsx
│   └── ...
├── icons/
│   └── __tests__/
│       └── icons.test.jsx
└── __tests__/
    └── setup.test.jsx
```

### Fichiers de Test Inclus

**Déjà créés:**
- `react-ui/src/components/__tests__/Button.test.jsx`
- `react-ui/src/components/__tests__/Icon.test.jsx`
- `react-ui/src/components/__tests__/integration.test.jsx`

---

## Types de Tests

### 1. Tests Unitaires

Tester un composant isolé:

```javascript
// Button.test.jsx - Test unitaire
describe('Button Component', () => {
  it('should render with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

**À tester:**
- Rendering
- Props
- Event handlers
- CSS classes
- States

### 2. Tests d'Intégration

Tester plusieurs composants ensemble:

```javascript
// integration.test.jsx - Test d'intégration
describe('Form Workflow', () => {
  it('should validate and submit form', () => {
    render(<SignupForm />);
    const input = screen.getByTestId('email-input');
    const submit = screen.getByTestId('submit-btn');

    // Interaction multi-composants
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(submit);

    expect(screen.getByText('Success!')).toBeInTheDocument();
  });
});
```

**À tester:**
- Workflows utilisateur
- Interactions entre composants
- State management
- Conditional rendering

### 3. Tests d'Accessibilité

```javascript
it('should have proper ARIA labels', () => {
  render(<Icon name="home" alt="Home" />);
  const icon = screen.getByRole('button', { name: /home/i });
  expect(icon).toBeInTheDocument();
});
```

---

## Exécution des Tests

### Commands

```bash
# Tous les tests
npm test

# Watch mode (réexécute au changement)
npm run test:watch

# Coverage report
npm run test:coverage

# Tests spécifique
npm test Button.test.jsx

# Tests qui match pattern
npm test --testNamePattern="Button"
```

### Output Exemple

```
PASS  src/components/__tests__/Button.test.jsx
  Button Component
    Rendering
      ✓ should render button with default props (45ms)
      ✓ should render with custom text (12ms)
    Variants
      ✓ should apply primary variant (8ms)
      ✓ should apply secondary variant (6ms)
    ...

Test Suites: 3 passed, 3 total
Tests:       45 passed, 45 total
Snapshots:   2 passed, 2 total
Coverage:    78.5% statements, 72% branches
```

---

## Coverage

### Vérifier Coverage

```bash
npm run test:coverage
```

### Coverage Report

```
File                      Lines    Statements   Branches   Functions
────────────────────────────────────────────────────────────────────
Button.jsx                95%      95%          85%        100%
Input.jsx                 90%      90%          80%        95%
Icon.jsx                  85%      85%          75%        90%
...
────────────────────────────────────────────────────────────────────
Total                     78.5%    78.5%        72%        85%
```

### Améliorer Coverage

1. **Tester les edge cases:**
```javascript
it('should handle edge case', () => {
  render(<Component prop={null} />);
  // ...
});
```

2. **Tester les errors:**
```javascript
it('should handle error state', () => {
  render(<Component error={true} />);
  // ...
});
```

3. **Tester les conditions:**
```javascript
it('should render conditional content', () => {
  const { rerender } = render(<Component show={true} />);
  expect(screen.getByText('Content')).toBeInTheDocument();

  rerender(<Component show={false} />);
  expect(screen.queryByText('Content')).not.toBeInTheDocument();
});
```

---

## Bonnes Pratiques

### ✅ DO

```javascript
// ✓ Use descriptive test names
it('should validate email format and show error on invalid input', () => {
  // ...
});

// ✓ Use semantic queries
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')

// ✓ Test user interactions
fireEvent.change(input, { target: { value: 'test' } });
fireEvent.click(button);

// ✓ Use data-testid for complex selectors
screen.getByTestId('email-input')
```

### ❌ DON'T

```javascript
// ✗ Vague test names
it('tests button', () => {
  // ...
});

// ✗ Test implementation details
expect(component.state.internal).toBe(true);

// ✗ Use CSS classes for selection
screen.getByClassName('button--primary')

// ✗ Test internal functions
component.internalFunction()
```

### Test Structure (AAA Pattern)

```javascript
it('should validate email', () => {
  // Arrange - Setup
  render(<Input type="email" />);
  const input = screen.getByRole('textbox');

  // Act - User action
  fireEvent.change(input, { target: { value: 'invalid' } });
  fireEvent.blur(input);

  // Assert - Expected result
  expect(screen.getByText('Invalid email')).toBeInTheDocument();
});
```

---

## Examples

### Test Props

```javascript
describe('Button Props', () => {
  it('should accept size prop', () => {
    render(<Button size="lg">Large Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--lg');
  });

  it('should accept variant prop', () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('button--danger');
  });

  it('should accept disabled prop', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### Test Event Handlers

```javascript
describe('Button Click Handler', () => {
  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click
      </Button>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### Test State Changes

```javascript
describe('Form State', () => {
  it('should update on input change', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');
  });

  it('should clear on button click', () => {
    render(
      <div>
        <Input data-testid="input" />
        <Button onClick={() => {}} data-testid="clear">
          Clear
        </Button>
      </div>
    );

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
```

### Test Accessibility

```javascript
describe('Accessibility', () => {
  it('should have accessible button', () => {
    render(<Button>Save Changes</Button>);
    const button = screen.getByRole('button', { name: /save changes/i });
    expect(button).toBeInTheDocument();
  });

  it('should have aria-label for icon button', () => {
    render(<Icon name="home" alt="Go to home" />);
    const icon = screen.getByLabelText(/go to home/i);
    expect(icon).toBeInTheDocument();
  });

  it('should be keyboard accessible', () => {
    render(<Button>Focus me</Button>);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
  });
});
```

### Test Async Operations

```javascript
it('should load icon asynchronously', async () => {
  render(<Icon name="home" category="navigation" />);

  // Wait for async load
  const icon = await screen.findByRole('img');
  expect(icon).toBeInTheDocument();
});
```

### Test Snapshots

```javascript
describe('Button Snapshots', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Button variant="primary" size="lg">
        Save
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

---

## Debugging Tests

### Utiliser screen.debug()

```javascript
it('should render correctly', () => {
  render(<ComplexComponent />);
  screen.debug(); // Print DOM
});
```

### Utiliser waitFor()

```javascript
it('should show content after async load', async () => {
  render(<Component />);
  
  await waitFor(() => {
    expect(screen.getByText('Loaded')).toBeInTheDocument();
  }, { timeout: 3000 });
});
```

### Mocking

```javascript
// Mock une fonction
const mockFn = jest.fn();

// Mock un module
jest.mock('../api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'test' })),
}));
```

---

## Ressources

- **Jest**: https://jestjs.io/
- **React Testing Library**: https://testing-library.com/react
- **React Testing Best Practices**: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

---

## Support

Questions sur les tests?
- Consulter les fichiers test créés
- Voir CONTRIBUTING.md pour les standards
- Ouvrir une issue sur GitHub

---

**Version:** 1.0.0  
**Last Updated:** November 22, 2024
