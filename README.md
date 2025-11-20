# AutomationAI3to5 Design System

**Ce dépôt contient le socle UI/UX de tous nos produits SaaS (branding AutomationAI3to5).**

- Palette et variables CSS
- Styles unifiés pour : headers, menus, cards, boutons, modals, inputs, grid, etc.
- Demo interactive : `design-system.html` pour prévisualiser/utiliser chaque brique
- Licence interne/usage AutomationAI3to5

## Structure

- `/css` : Tous les styles modulaires à importer/reprendre dans vos apps/modules
- `/img` : Logos et icônes principaux
- `design-system.html` : Playground visuel (ouvre sur Replit, CodeSandbox ou local)
- `README.md` : Charte, instructions, releases

## Usage (intégration rapide dans vos apps)

1. Importez `css/design-system.css` dans votre projet front.
2. Utilisez les classes `.btn`, `.card`, `.modal`, etc. selon vos besoins.
3. Ajoutez vos variantes/états dans ce dépôt, ouvrez une Pull Request, ou contactez le designer.
4. Faites évoluer, testez, publiez dans tous les SaaS sous ce style garanti.

## Brand palette
| Name          | Color     | Usage             |
|---------------|-----------|-------------------|
| Primary       | `#6366f1` | Accent, CTA       |
| Secondary     | `#8b5cf6` | Highlight, hover  |
| Dark          | `#0f172a` | Background, nav   |
| Darker        | `#020617` | Background - plus sombre  |
| Text          | `#f8fafc` | Texte principal   |
| Text Secondary| `#94a3b8` | Sous-titres       |
| Cyan          | `#06b6d4` | Hover, icons      |
| Pink          | `#d946ef` | Alertes, Danger   |
| Purple        | `#a78bfa` | Badges, Info      |
| Accent Gold   | `#fbbf24` | Accent Or         |
| Accent Silver | `#cbd5e1` | Accent Argent     |

## Application React - Kit d'Icônes Interactif

Le projet inclut une bibliothèque d'icônes React avec plus de 100 icônes personnalisables.

### Accès sur Replit

L'application React est accessible de deux façons :

1. **Via le Design System** (recommandé)
   - Ouvrez `/` dans la prévisualisation
   - Scrollez jusqu'à "Démo interactive – Icônes React"
   - Cliquez sur "Ouvrir l'application React"

2. **URL directe** : `/react-ui/`

### Fonctionnalités

- 🔍 Recherche instantanée parmi toutes les icônes
- 🎨 Personnalisation : taille, épaisseur et couleur
- 📋 Copie du code React en un clic
- 📱 Interface responsive avec Tailwind CSS

### Architecture technique (Replit)

Le projet utilise :
- **Express (port 5000)** : Serveur principal avec proxy inverse vers React
- **Vite (port 5173)** : Serveur de développement React (interne)

Le proxy injecte automatiquement une balise `<base href="/react-ui/">` pour la résolution correcte des assets React à travers le proxy.

### Développement local

```bash
# Démarrer les deux serveurs
bash start.sh

# Ou séparément
node server.js
cd react-ui && npm run dev
```

### Production

Pour le déploiement, buildez l'application React :

```bash
cd react-ui
npm run build
```

Le serveur Express servira automatiquement le build statique en mode production.
