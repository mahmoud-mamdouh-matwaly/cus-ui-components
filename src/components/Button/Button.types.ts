import { ReactNode } from 'react';

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'disabled' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  testId?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: ReactNode;
  reverse?: boolean;
}
