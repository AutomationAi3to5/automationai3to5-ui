/**
 * Card Component - Container with header, body, and footer sections
 * @component
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/card.css';

const Card = ({ children, header, footer, className = '', ...props }) => (
  <div className={`card ${className}`} {...props}>
    {header && <div className="card-header">{header}</div>}
    <div className="card-body">{children}</div>
    {footer && <div className="card-footer">{footer}</div>}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default Card;
