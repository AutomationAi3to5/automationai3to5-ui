/**
 * Icon Component - Renders SVG icons with customizable size, color, and accessibility
 * @component
 * @example
 * import Icon from './Icon';
 * <Icon name="home" size={24} color="#6366f1" alt="Home page" />
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Icon = ({ 
  name = 'home', 
  category = 'navigation', 
  size = 24, 
  color = 'currentColor',
  alt = '',
  className = '',
  onClick = null,
  aria-label = null,
  ...props
}) => {
  const [svgContent, setSvgContent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const response = await import(`../icons/${category}/${name}.svg?react`);
        setSvgContent(response.default);
        setError(false);
      } catch (err) {
        console.warn(`Icon not found: ${category}/${name}`);
        setError(true);
      }
    };
    
    loadIcon();
  }, [name, category]);

  if (error) return <span className={className} title={alt || name}>✗</span>;
  if (!svgContent) return <span className={className}>Loading...</span>;

  const SvgComponent = svgContent;
  
  return (
    <SvgComponent
      width={size}
      height={size}
      stroke={color}
      fill={color}
      className={`icon ${className}`}
      aria-label={aria-label || alt}
      aria-hidden={!alt && !aria-label}
      focusable={Boolean(onClick)}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
