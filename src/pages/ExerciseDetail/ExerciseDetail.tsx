import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackageDetail from '@/containers/ExercisePackageDetail';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

import './ExerciseDetail.scss';

const ExerciseDetail: React.FC = () => {
  const handleNavigateExercisePackage = (): void => {
    navigate(-1);
  };
  return (
    <div className="Exercise style-container">
      <HeaderSkew title="Gói tập" />

      <div className="Exercise-main">
        <ExercisePackageDetail type={ETypeExercisePackage.EXERCISE} onBack={handleNavigateExercisePackage} />
      </div>
    </div>
  );
};

export default ExerciseDetail;
