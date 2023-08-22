import React from 'react';
import { SpinnerProps } from './Spinner.types';
import './style.css';

const Spinner = ({ left = 'left-2/4', bottom = 'bottom-2/4', testId }: SpinnerProps) => (
  <div data-testid={testId} className={`spinner ${left} ${bottom}`} />
);

export { Spinner };
