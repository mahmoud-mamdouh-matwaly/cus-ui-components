import React from 'react';
import { SwitchProps } from './Switch.types';
import './style.css';

const Switch = (props: SwitchProps) => {
  const { className = '', isToggled, onToggle, disabled = false } = props;

  return (
    <button
      className={`switch ${isToggled ? 'switch--on' : 'switch--off'} 
      ${disabled ? 'switch--disabled' : ''} 
      ${className || ''}`}
      onClick={onToggle}
      disabled={disabled}
    />
  );
};

export { Switch };
