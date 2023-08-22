import React, { useState, useRef } from 'react';
import { DropDownProps } from './dropDown.types';
import './style.css';
import useClickOutside from '../../hooks/useClickOutside';
import { Button } from '../Button';

const DropDown = (props: DropDownProps) => {
  const { testId, title, children } = props;
  const [isActive, setIsActive] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    dropDownMenuRef,
    () => {
      setIsActive(false);
    },
    isActive
  );
  return (
    <div className="dropdown" data-testid={testId} ref={dropDownMenuRef}>
      <Button
        text={title}
        onClick={() => setIsActive(!isActive)}
        variant="tertiary"
        testId="dropdown-btn"
        className="dropdown__btn"
        icon={
          <svg
            className="dropdown__arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0
             111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        }
      />

      {isActive && (
        <div className="dropdown__menu">
          <div className="dropdown__container">
            <div className="dropdown__wrapper">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export { DropDown };
