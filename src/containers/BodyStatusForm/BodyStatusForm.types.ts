import { TBodyCreateUserMealSchedule } from '@/services/api/user-meal-schedule-controller/types';

export type TBodyStatusFormProps = {
  onNext?: (data: Omit<TBodyCreateUserMealSchedule, 'id'>) => void;
  onBack?: () => void;
};
