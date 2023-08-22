export interface MessageProps {
  testId?: string;
  message: string;
  type: 'error' | 'info' | 'success' | 'warning';
  title?: string;
}
