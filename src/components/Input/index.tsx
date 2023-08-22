import React from 'react';
import { InputProps } from './Input.types';

const Input = ({ id, disabled, label, message, onChange, placeholder, ...props }: InputProps) => {
  return (
    <>
      <label>
        <span>{label}</span>
      </label>
      <input id={id} type="text" onChange={onChange} disabled={disabled} placeholder={placeholder} {...props} />
      <div>
        <p>{message}</p>
      </div>
    </>
  );
};

export { Input };
