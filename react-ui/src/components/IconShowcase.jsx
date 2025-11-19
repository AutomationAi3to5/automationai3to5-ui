import React, { useState } from 'react';

// Composant Icon flexible (chemins SVG fournis précédemment)
const Icon = ({ name, size = 24, color = 'currentColor', strokeWidth = 2, className = '', ...props }) => {
  const icons = {
    // ... (toutes les icônes fournies précédemment) ...
  };

  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
      style={{ borderRadius: '6px' }} // coin arrondi
    >
      {path.split(' M').filter(Boolean).map((d, i) => (
        <path key={i} d={`M${d}`} />
      ))}
    </svg>
  );
};

// Composant de démonstration complet avec grille et filtres
const IconShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [size, setSize] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState('#1f2937');
  const [copiedIcon, setCopiedIcon] = useState(null);

  const iconCategories = {
    'Navigation & Interface': ['home', 'menu', 'close', 'search', 'settings', 'filter', 'grid', 'list'],
    'Flèches': ['arrowLeft', 'arrowRight', 'arrowUp', 'arrowDown', 'chevronLeft', 'chevronRight', 'chevronDown', 'chevronUp'],
    'Utilisateurs': ['user', 'users', 'userPlus', 'userCheck'],
    'IA & Automatisation': ['cpu', 'zap', 'activity', 'brain', 'robot', 'workflow'],
    'Fichiers': ['file', 'fileText', 'folder', 'folderOpen', 'download', 'upload'],
    'Actions': ['plus', 'minus', 'edit', 'trash', 'copy', 'check', 'checkCircle', 'save'],
    'Communication': ['mail', 'messageSquare', 'bell', 'phone'],
    'Statut': ['alertCircle', 'info', 'helpCircle', 'xCircle'],
    'Sécurité': ['lock', 'unlock', 'key', 'shield'],
    'Temps': ['clock', 'calendar'],
    'Médias': ['eye', 'eyeOff', 'image', 'play', 'pause'],
    'Analytics': ['barChart', 'trendingUp', 'trendingDown', 'pieChart', 'dollar'],
    'Système': ['server', 'database', 'code', 'terminal', 'package'],
    'Réseau': ['wifi', 'link', 'globe'],
    'E-commerce': ['shoppingCart', 'creditCard', 'tag'],
    'Divers': ['star', 'heart', 'bookmark', 'layers', 'maximize', 'minimize', 'refresh'],
  };

  const allIcons = Object.values(iconCategories).flat();

  const filteredIcons = searchTerm
    ? allIcons.filter(icon => icon.toLowerCase().includes(searchTerm.toLowerCase()))
    : allIcons;

  const copyToClipboard = (iconName) => {
    const code = `<Icon name="${iconName}" size={${size}} strokeWidth={${strokeWidth}} color="${color}" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Kit d'Icônes SaaS & IA</h1>
          <p className="text-gray-600 text-lg">Plus de 100 icônes pour votre portail d'automatisation & SaaS</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher</label>
              <div className="relative">
                <Icon name="search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Nom de l'icône..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Taille: {size}px
              </label>
              <input
                type="range"
                min="16"
                max="48"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Épaisseur: {strokeWidth}
              </label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.5"
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Couleur</label>
            <div className="flex gap-2">
              {['#1f2937', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    color === c ? 'border-gray-900 scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`Couleur ${c}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {filteredIcons.map((iconName) => (
              <button
                key={iconName}
                onClick={() => copyToClipboard(iconName)}
                className="flex flex-col items-center p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                title={`Copier le code de l'icône ${iconName}`}
              >
                <Icon name={iconName} size={size} strokeWidth={strokeWidth} color={color} />
                <span className="text-xs mt-1 text-gray-700 truncate max-w-full">{iconName}</span>
                {copiedIcon === iconName && (
                  <span className="text-xs text-green-500 mt-1">Copié !</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Icon, IconShowcase };

