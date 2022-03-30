export type TSelectProps = {
  className?: string;
  placeholder?: string;
  value?: TSelectOption;
  options?: TSelectOption[];
  showSearch?: boolean;
  disabled?: boolean;
  onChange?: (option: TSelectOption) => void;
};

export type TSelectOption = {
  label: string;
  value: string;
  data?: any;
  disabled?: boolean;
};
