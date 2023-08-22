import React, { useState } from 'react';
import { AccordionProps } from './Accordion.types';

import './style.css';

const Accordion = ({ title, children, className, testId }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${className || ''} accordion__container`} data-testid={testId}>
      <div className="accordion__wrapper">
        <div
          className={`accordion__header ${isActive ? 'accordion__header--space' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          <h3 className="capitalize">{title}</h3>
          {isActive ? <div className="arrow up" /> : <div className="arrow down" />}
        </div>
        <div className={`accordion__content ${isActive ? 'active' : ''}`}>{children}</div>
      </div>
    </div>
  );
};

export { Accordion };
