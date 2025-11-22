/**
 * Alert Component - Feedback message with variant colors
 * @component
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/alert.css';

const Alert = ({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...props
}) => (
  <div className={`alert alert--${variant} ${className}`} role="alert" {...props}>
    <div style={{ flex: 1 }}>
      {title && <div style={{ fontWeight: 600, marginBottom: '4px' }}>{title}</div>}
      {children}
    </div>
    {onClose && (
      <button
        onClick={onClose}
        className="alert-close"
        aria-label="Close alert"
      >
        ✕
      </button>
    )}
  </div>
);

Alert.propTypes = {
  variant: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Alert;
