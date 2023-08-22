import React from 'react';

import { EmptyProps } from './Empty.types';

import './style.css';

const Empty = (props: EmptyProps) => {
  const { children, testId, message } = props;
  return (
    <div data-testid={testId} className="empty">
      {children || message || 'It seems that you don’t have any data yet'}
    </div>
  );
};

export { Empty };
