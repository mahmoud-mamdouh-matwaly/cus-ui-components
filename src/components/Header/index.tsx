import React from 'react';

import { HeaderProps } from './Header.types';

import { Media } from '../Media';
import './style.css';

const Header = (props: HeaderProps) => {
  const { testId, menu, navigationRight, logo, link = '#' } = props;
  return (
    <header className="navigation" data-testid={testId}>
      <div className="navigation__wrap">
        <div className="navigation__container">
          <div className="brand__container">
            <Media avatar={logo} link={link} className="brand__logo" />
          </div>

          <nav className="navbar">{menu}</nav>
          <div className="navigation__right">{navigationRight}</div>
        </div>
      </div>
    </header>
  );
};

export { Header };
