import { TDataGlobalStep } from '@/pages/MealScheduleConfig/MealScheduleConfig.types';

export type TMealPackageDetailProps = {
  onBack?: () => void;
  onNext?: () => void;
  id?: string;
  dataGlobalStep?: TDataGlobalStep;
};
