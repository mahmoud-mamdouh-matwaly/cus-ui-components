import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SelectProps } from './Select.types';
import './style.css';

const Select = ({ label, value, options, disabled = false, onChange }: SelectProps) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={onChange}
        className={`select ${disabled ? 'select--disabled' : ''}`}
        disabled={disabled}
      >
        {options.map(item => (
          <option key={uuidv4()} value={item.value} disabled={!!item?.disabled}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export { Select };
