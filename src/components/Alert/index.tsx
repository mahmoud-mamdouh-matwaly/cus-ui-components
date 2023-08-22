import React, { useState } from 'react';
import { AlertProps } from './Alert.types';
import './style.css';

const Alert = (props: AlertProps) => {
  const { children, type, message } = props;
  const [isShow, setIsShow] = useState(true);

  const handleClose = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className={`alert alert--${type} ${!isShow && 'hide'}`}>
      {children || message}
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
    </div>
  );
};

export { Alert };
