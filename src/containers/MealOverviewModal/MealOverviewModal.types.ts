import { TMeal } from '@/services/api/user-meal-schedule-controller/types';

export type TMealOverviewModalProps = {
  className?: string;
  visible: boolean;
  data?: TMeal[];
  onClose?: () => void;
};
