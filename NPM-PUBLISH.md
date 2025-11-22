# Publishing AutomationAI3to5 Design System to NPM

This guide explains how to publish the Design System packages to NPM.

## Two Packages Available

### 1. Root Package: `@automationai/design-system`
**Contains:** CSS files, icons, and Express server

```bash
npm publish
```

### 2. React Package: `@automationai/design-system-react`
**Contains:** React components, icon library, and Vite build

```bash
cd react-ui
npm publish
```

---

## Prerequisites

1. **NPM Account**
   - Create account at https://www.npmjs.com/
   - Verify email address

2. **Local Authentication**
   ```bash
   npm login
   ```
   Enter your NPM credentials.

3. **Verify Login**
   ```bash
   npm whoami
   ```

---

## Publishing Steps

### Step 1: Build the React Package
```bash
cd react-ui
npm run build
cd ..
```

### Step 2: Update Version Numbers
Edit `package.json` and `react-ui/package.json` with new version (e.g., 1.0.1):

```json
"version": "1.0.1"
```

Follow semantic versioning:
- **Patch** (1.0.1): Bug fixes
- **Minor** (1.1.0): New features (backward compatible)
- **Major** (2.0.0): Breaking changes

### Step 3: Publish Root Package
```bash
npm publish
```

### Step 4: Publish React Package
```bash
cd react-ui
npm publish
cd ..
```

---

## Using Published Packages

### Installation

**CSS and Server:**
```bash
npm install @automationai/design-system
```

**React Components:**
```bash
npm install @automationai/design-system-react
```

### Usage

**Import CSS:**
```javascript
import '@automationai/design-system/css/main.css'
```

**Import React Components:**
```javascript
import { Button, Input, Card } from '@automationai/design-system-react'
import { HomeIcon, SettingsIcon } from '@automationai/design-system-react/icons'
```

---

## Package Configuration

### Root Package (`@automationai/design-system`)

**Files included:**
- `css/` - All CSS files (90 files, 1182 lines)
- `public/` - Built React UI
- `server.js` - Express server
- `README.md` - Documentation

**Usage:**
```bash
npm install @automationai/design-system
node node_modules/@automationai/design-system/server.js
```

### React Package (`@automationai/design-system-react`)

**Files included:**
- `dist/` - Built React components
- `src/` - Source components
- Exports:
  - `.` - All components
  - `./icons` - Icon library
  - `./components` - UI components

---

## Troubleshooting

### "You do not have permission to publish"
- Ensure you're logged in: `npm login`
- Check org/scope permissions
- Ensure username matches in `.npmrc`

### "Package version already exists"
- Increment version number
- Run `npm publish` again

### "Not authenticated"
```bash
npm login
npm logout  # Then login again
```

---

## Version History

- **1.0.0** (November 2024)
  - Initial release
  - 90 CSS files
  - 329 SVG icons
  - 11 React components
  - Full WCAG 2.1 AA support

---

## Resources

- **NPM Docs:** https://docs.npmjs.com/
- **Semantic Versioning:** https://semver.org/
- **Package.json Guide:** https://docs.npmjs.com/cli/v10/configuring-npm/package-json

---

## Additional Notes

- Both packages are **public** by default
- Use `"private": true` in package.json to prevent publishing
- CI/CD integration can automate publishing on releases
- Consider setting up automatic versioning (e.g., semantic-release)

