export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  onChange?: (option: TSelectOption) => void;
};

export type TSelectOption = {
  label: string;
  value: string;
  data?: any;
  disabled?: boolean;
};
