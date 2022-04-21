export type TProductBoxProps = {
  className?: string;
  id: string;
  image: string;
  title: string;
  price: number;
  sale?: number;
  link?: string;
  hasBg?: boolean;
  onBuy?: () => void;
  onClickDetail?: () => void;
};
