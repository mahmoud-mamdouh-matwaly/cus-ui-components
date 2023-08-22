import React from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';

import './style.css';

const Breadcrumb = (props: BreadcrumbProps) => {
  let children = React.Children.toArray(props.children);

  const stackItems = window.location.pathname.split('/').filter(item => item);

  children = children
    .map((child, index) => <li key={`breadcrumb_item--${index}`}>{child}</li>)
    .slice(0, stackItems.length + 1);

  return <ol className="breadcrumb">{children}</ol>;
};

export { Breadcrumb };
