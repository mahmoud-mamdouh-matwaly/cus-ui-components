import React from 'react';

import { ButtonProps } from './Button.types';
import './style.css';

const Button = ({
  size,
  variant,
  disabled,
  text,
  onClick,
  type = 'button',
  className = '',
  icon,
  reverse,
}: ButtonProps) => {
  const styleVariant = variant && !disabled ? `btn--${variant}` : '';
  const styleSize = size ? `btn--${size}` : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || variant === 'disabled'}
      className={`btn ${styleSize} ${styleVariant} ${className} ${disabled ? 'btn--disabled' : ''} 
      ${reverse ? 'btn--reverse' : ''}`}
    >
      <span>{text}</span>
      {icon && icon}
    </button>
  );
};

export { Button };
