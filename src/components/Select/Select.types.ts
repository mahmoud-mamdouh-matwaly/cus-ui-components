interface optionTest {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  label?: string;
  onChange: () => void;
  value: string;
  options: optionTest[];
  disabled?: boolean;
}
