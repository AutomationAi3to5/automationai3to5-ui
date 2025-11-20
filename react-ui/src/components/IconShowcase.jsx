import React, { useState } from 'react';
import Icon from './Icon';  // On importe Icon – ne surtout pas redéfinir Icon ici

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
    const code = `<Icon name="${iconName}" size={24} />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Kit d'Icônes SaaS & IA</h1>
          <p className="text-gray-600 text-lg">Plus de 100 icônes pour votre portail d'automatisation</p>
        </div>

        {/* Contrôles */}
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Taille: {size}px</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Épaisseur: {strokeWidth}</label>
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
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grille d'icônes */}
        {searchTerm ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
              {filteredIcons.map((iconName) => (
                <button
                  key={iconName}
                  onClick={() => copyToClipboard(iconName)}
                  className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-all group relative"
                  title={iconName}
                >
                  <Icon name={iconName} size={size} color={color} strokeWidth={strokeWidth} />
                  <span className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {iconName}
                  </span>
                  {copiedIcon === iconName && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
                      Copié!
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          Object.entries(iconCategories).map(([category, icons]) => (
            <div key={category} className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded"></div>
                {category}
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
                {icons.map((iconName) => (
                  <button
                    key={iconName}
                    onClick={() => copyToClipboard(iconName)}
                    className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-all group relative"
                    title={iconName}
                  >
                    <Icon name={iconName} size={size} color={color} strokeWidth={strokeWidth} />
                    <span className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      {iconName}
                    </span>
                    {copiedIcon === iconName && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Copié!
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Guide d'utilisation */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Guide d'utilisation</h2>
          {/* ...le reste de la documentation, comme dans ton code initial... */}
        </div>
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm">
            {allIcons.length} icônes • Style arrondi • 24x24px • Personnalisable
          </p>
          <p className="text-xs mt-2">
            Cliquez sur une icône pour copier le code • Compatible React & SVG
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconShowcase;
