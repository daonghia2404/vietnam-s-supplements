import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackageDetail from '@/containers/ExercisePackageDetail';

import './ExerciseDetail.scss';

const ExerciseDetail: React.FC = () => {
  const handleNavigateExercisePackage = (): void => {
    navigate(-1);
  };
  return (
    <div className="Exercise style-container">
      <HeaderSkew title="Gói tập" />

      <div className="Exercise-main">
        <ExercisePackageDetail onBack={handleNavigateExercisePackage} />
      </div>
    </div>
  );
};

export default ExerciseDetail;
