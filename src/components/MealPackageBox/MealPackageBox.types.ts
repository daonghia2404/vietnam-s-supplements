export type TMealPackageBoxProps = {
  className?: string;
  image: string;
  title: string;
  prePrice?: string;
  date: string;
  price: string;
  onRegister?: () => void;
  onClickDetail?: () => void;
};
