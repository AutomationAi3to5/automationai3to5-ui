import React from "react";

const Icon = ({ name, size = 24, color = 'currentColor', strokeWidth = 2, className = '', ...props }) => {
  const icons = {
    home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    // ... (mets ici tous les chemins comme dans ton code)
    // Pense à bien copier exactement tous les chemins de ton snippet original
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
      style={{ borderRadius: '6px' }}
    >
      {path.split(' M').filter(Boolean).map((d, i) => (
        <path key={i} d={`M${d}`} />
      ))}
    </svg>
  );
};

export default Icon;

