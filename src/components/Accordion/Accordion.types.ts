import { ReactNode } from 'react';

export interface AccordionProps {
  title?: string;
  className?: string;
  children: ReactNode;
  testId?: string;
}
