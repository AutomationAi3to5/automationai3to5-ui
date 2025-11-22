/**
 * Input Component - Form input with validation states
 * @component
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/input.css';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = false,
  success = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const inputClasses = `input ${error ? 'input--error' : ''} ${success ? 'input--success' : ''} ${className}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={inputClasses}
      aria-invalid={error}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
