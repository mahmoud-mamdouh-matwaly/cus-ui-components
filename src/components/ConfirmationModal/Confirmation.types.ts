export interface ConfirmationProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  img?: {
    img: string;
    img2x: string;
    img3x: string;
  };
}
