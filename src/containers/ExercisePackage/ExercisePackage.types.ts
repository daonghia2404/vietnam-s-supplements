import { TPackExerciseResponse } from '@/services/api/pack-exercise-controller/types';

export type TExercisePackageProps = {
  onNext?: () => void;
  onBack?: () => void;
  onClickDetail?: () => void;
  title?: string;
  dataSource?: TPackExerciseResponse[];
};
