import { ReactNode } from 'react';

export interface AlertProps {
  testId?: string;
  message?: string;
  type: 'error' | 'info' | 'success' | 'warning';
  children: ReactNode;
}
