export type TAddCartModalProps = {
  visible: boolean;
  data?: { id: string; type: string };
  onClose?: () => void;
  onSubmit?: (values: any) => void;
};
