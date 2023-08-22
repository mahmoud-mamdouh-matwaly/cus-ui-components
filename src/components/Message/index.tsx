import React from 'react';
import { MessageProps } from './Message.types';

import './style.css';

const Message = (props: MessageProps) => {
  const { testId, message = '', type, title = '' } = props;

  return (
    <div data-testid={testId} className={`message message--${type} duration`}>
      {title && <h6 className="message__title">{title}</h6>}
      <p>{message}</p>
    </div>
  );
};

export { Message };
