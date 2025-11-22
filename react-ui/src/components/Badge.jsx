/**
 * Badge Component - Status indicator badge
 * @component
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/badge.css';

const Badge = ({ children, variant = 'primary', className = '', ...props }) => (
  <span className={`badge badge--${variant} ${className}`} {...props}>
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),
  className: PropTypes.string,
};

export default Badge;
