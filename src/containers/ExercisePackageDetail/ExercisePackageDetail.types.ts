import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

export type TExercisePackageDetailProps = {
  onBack?: () => void;
  onNext?: () => void;
  type: ETypeExercisePackage;
};
