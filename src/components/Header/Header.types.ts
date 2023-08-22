import { ReactNode } from 'react';

export interface HeaderProps {
  testId?: string;
  menu: ReactNode;
  navigationRight: ReactNode;
  logo: string;
  link?: string;
}
