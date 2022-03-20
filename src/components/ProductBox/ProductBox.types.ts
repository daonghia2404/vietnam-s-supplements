export type TProductBoxProps = {
  className?: string;
  image: string;
  title: string;
  price: string;
  sale?: string;
  oldPrice?: string;
  hasBg?: boolean;
  onBuy?: () => void;
  onClickDetail?: () => void;
};
