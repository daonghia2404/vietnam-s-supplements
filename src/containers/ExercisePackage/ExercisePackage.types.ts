import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';
import { TParamsGetPackExercises } from '@/services/api/pack-exercise-controller/types';

export type TExercisePackageProps = {
  onNext?: () => void;
  onBack?: () => void;
  onClickDetail?: () => void;
  paginate: TParamsGetPackExercises & { total: number };
  onPageChange?: (page: number, pageSize?: number) => void;
  title?: string;
  dataSource?: Array<any>;
  type: ETypeExercisePackage;
};
