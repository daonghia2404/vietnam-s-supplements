export type TProductBoxProps = {
  className?: string;
  id: string;
  image: string;
  title: string;
  price: number;
  sale?: number;
  costPrice?: number;
  link?: string;
  type: string;
  hasBg?: boolean;
  onBuy?: () => void;
  onClickDetail?: () => void;
};
