export interface CardProps {
  image: string;
  content: string;
  className?: string;
  vertical?: boolean;
  title?: string;
  subTitle?: string;
  meta?: string;
  onClick?: () => void;
}
