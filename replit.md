# AutomationAI3to5 Design System

## Vue d'ensemble

Ce projet contient le système de design UI/UX complet pour tous les produits SaaS AutomationAI3to5. Il comprend une palette de couleurs, des composants réutilisables et une démo interactive.

## État actuel

Le projet est configuré et fonctionnel dans l'environnement Replit avec :
- Un serveur Express sur le port 5000 qui sert le design system
- Une application React/Vite pour la démo interactive des icônes
- Un workflow unique qui lance les deux serveurs en développement
- Configuration de déploiement avec build automatique du React app

## Structure du projet

```
/
├── css/                    # Styles modulaires CSS
│   ├── design-system.css  # Variables et styles de base
│   ├── buttons.css        # Styles de boutons
│   ├── cards.css          # Styles de cartes
│   ├── forms.css          # Styles de formulaires
│   ├── modals.css         # Styles de modales
│   └── sidebar.css        # Styles de sidebar
├── img/                   # Logos et icônes
│   └── AI3to5_Logo.png
├── react-ui/              # Application React interactive
│   ├── src/
│   │   ├── components/
│   │   │   ├── Icon.jsx           # Composant icône réutilisable
│   │   │   └── IconShowcase.jsx   # Démo interactive des icônes
│   │   └── index.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── design-system.html     # Page principale du design system
├── server.js              # Serveur Express
├── start.sh               # Script de démarrage
└── package.json           # Dépendances du projet
```

## Palette de couleurs

| Nom              | Couleur   | Usage                |
|------------------|-----------|----------------------|
| Primary          | `#6366f1` | Accent, CTA          |
| Secondary        | `#8b5cf6` | Highlight, hover     |
| Dark             | `#0f172a` | Background, nav      |
| Darker           | `#020617` | Background sombre    |
| Text             | `#f8fafc` | Texte principal      |
| Text Secondary   | `#94a3b8` | Sous-titres          |
| Cyan             | `#06b6d4` | Hover, icons         |
| Pink             | `#d946ef` | Alertes, Danger      |
| Purple           | `#a78bfa` | Badges, Info         |
| Accent Gold      | `#fbbf24` | Accent Or            |
| Accent Silver    | `#cbd5e1` | Accent Argent        |

## Architecture technique

### Développement
- **Frontend principal** : HTML/CSS statique avec composants modulaires
- **Application React** : Vite + React 18 pour la démo interactive
- **Serveur** : Express qui sert les fichiers statiques et proxy vers Vite en dev
- **Port** : 5000 (accessible publiquement), 5173 (Vite en interne)

### Production (Déploiement)
- Le build Vite génère les fichiers statiques dans `react-ui/dist/`
- Express sert les fichiers buildés au lieu de faire du proxy
- Déploiement configuré en mode "autoscale"

## Utilisation

### Développement local
Le workflow "Design System" lance automatiquement :
1. Le serveur Vite (React) sur le port 5173
2. Le serveur Express sur le port 5000

### Intégration dans d'autres projets
1. Copiez les fichiers CSS depuis `/css/` dans votre projet
2. Importez `css/design-system.css` comme base
3. Utilisez les classes CSS : `.btn`, `.card`, `.modal`, etc.
4. Pour React : utilisez le composant `Icon` depuis `react-ui/src/components/Icon.jsx`

## Commandes disponibles

```bash
# Démarrer le serveur en développement
npm start
# ou
bash start.sh

# Build de l'application React (pour production)
cd react-ui && npm run build
```

## Dernières modifications

**19 novembre 2025** : Import depuis GitHub et configuration pour Replit
- Configuration de Vite avec proxy support
- Serveur Express avec routing pour dev/prod
- Workflow unique pour les deux serveurs
- Configuration de déploiement autoscale

## Composants disponibles

- Boutons (primary, secondary, danger)
- Formulaires (inputs, textarea, select)
- Cards avec header/footer
- Modales
- Alertes (info, success, warning, error)
- Tabs (onglets)
- Datatable
- Badges
- Sidebar de navigation
- Accordéon
- Loader/Progression
- Plus de 100 icônes SVG (via composant React)

## Notes importantes

- Le design system utilise un thème sombre par défaut avec option de mode clair
- Tous les composants sont accessibles (ARIA, tabindex, rôles)
- Les icônes React sont copiables via le showcase interactif
- Le système est responsive et mobile-friendly
