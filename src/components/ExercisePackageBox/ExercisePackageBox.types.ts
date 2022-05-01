export type TExercisePackageBoxProps = {
  className?: string;
  image: string;
  title: string;
  description: string;
  owner?: boolean;
  onBuy?: () => void;
  onClickDetail?: () => void;
};
