export type TAmountProps = {
  value?: number;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
};
