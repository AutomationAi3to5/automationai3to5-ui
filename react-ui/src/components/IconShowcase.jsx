/**
 * IconShowcase Component - Interactive icon explorer with search and filters
 * @component
 * Features: Search, size control, color picker, copy React code
 */

import React, { useState, useMemo } from 'react';
import Icon from './Icon';
import '../styles/IconShowcase.css';

const ICON_CATEGORIES = {
  navigation: ['home', 'menu', 'close', 'search', 'settings', 'back', 'forward'],
  actions: ['download', 'upload', 'edit', 'delete', 'copy', 'save', 'refresh'],
  users: ['user', 'users', 'profile', 'avatar', 'team'],
  communication: ['mail', 'message', 'chat', 'send', 'phone'],
  feedback: ['alert', 'success', 'warning', 'error', 'info', 'help'],
  media: ['image', 'video', 'camera', 'play', 'pause'],
  time: ['clock', 'calendar', 'watch', 'timer'],
  security: ['lock', 'unlock', 'key', 'shield', 'verified'],
  forms: ['checkbox', 'radio', 'toggle', 'switch', 'input', 'textarea', 'select'],
};

export default function IconShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#6366f1');
  const [copiedIcon, setCopiedIcon] = useState(null);

  const allIcons = useMemo(() => {
    const icons = [];
    Object.entries(ICON_CATEGORIES).forEach(([category, names]) => {
      names.forEach(name => {
        icons.push({ name, category });
      });
    });
    return icons;
  }, []);

  const filteredIcons = useMemo(() => {
    return allIcons.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allIcons]);

  const copyToClipboard = (iconName, category) => {
    const code = `import Icon from '@/components/Icon';\n<Icon name="${iconName}" category="${category}" size={24} color="#6366f1" />`;
    navigator.clipboard.writeText(code);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  return (
    <div className="icon-showcase">
      <header className="showcase-header">
        <h1>Icon Showcase - 1006+ Professional Icons</h1>
        <p>Search, preview, and copy React code for any icon</p>
      </header>

      <div className="showcase-controls">
        <div className="control-group">
          <label htmlFor="search">Search Icons:</label>
          <input
            id="search"
            type="text"
            placeholder="e.g., download, user, lock..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="control-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            {Object.keys(ICON_CATEGORIES).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="size">Size: {size}px</label>
          <input
            id="size"
            type="range"
            min="16"
            max="64"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="size-slider"
          />
        </div>

        <div className="control-group">
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="color-picker"
          />
        </div>
      </div>

      <div className="icons-count">Found {filteredIcons.length} icon(s)</div>

      <div className="icons-grid">
        {filteredIcons.map(icon => (
          <div key={`${icon.category}-${icon.name}`} className="icon-item">
            <Icon 
              name={icon.name} 
              category={icon.category} 
              size={size} 
              color={color}
              alt={icon.name}
            />
            <span className="icon-name">{icon.name}</span>
            <button
              className={`copy-btn ${copiedIcon === icon.name ? 'copied' : ''}`}
              onClick={() => copyToClipboard(icon.name, icon.category)}
              title="Copy React code"
            >
              {copiedIcon === icon.name ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
