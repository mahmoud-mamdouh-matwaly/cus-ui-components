import React from 'react';
import XSvg from '../../img/x.svg';
import { ChipProps } from './Chip.types';
import './style.css';

const Chip = ({ name, onClick, hasClose = false, className = '', testId = '' }: ChipProps) => {
  const textPosition = hasClose ? 'justify-between' : 'justify-center';
  return (
    <div className={`${className} chip ${textPosition}`} data-testid={testId}>
      <span>{name}</span>
      {hasClose && <img src={XSvg} className="chip--close" data-testid="close-icon" onClick={onClick} />}
    </div>
  );
};

export { Chip };
