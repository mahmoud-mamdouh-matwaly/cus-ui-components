import { ReactNode } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  className?: string;
  title?: string;
  children: ReactNode;
  testId?: string;
}
