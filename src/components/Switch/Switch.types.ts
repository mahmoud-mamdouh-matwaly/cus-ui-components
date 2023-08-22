export interface SwitchProps {
  className?: string;
  onToggle: () => void;
  isToggled: boolean;
  disabled?: boolean;
}
