import { TDataGlobalStep } from '@/pages/MealScheduleConfig/MealScheduleConfig.types';

export type TMealPackageProps = {
  dataGlobalStep?: TDataGlobalStep;
  onNext?: () => void;
  onBack?: () => void;
  onClickDetail?: (id: string) => void;
};
