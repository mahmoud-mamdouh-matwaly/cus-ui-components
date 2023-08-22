import React from 'react';
import { PageHeadingProps } from './PageHeading.types';
import './style.css';

const PageHeading = (props: PageHeadingProps) => {
  const { title, children } = props;

  return (
    <div className="pageHeading__container">
      <div className="pagHeading__title">
        <h2>{title}</h2>
      </div>
      <div className="pageHeading__actions">{children}</div>
    </div>
  );
};

export { PageHeading };
