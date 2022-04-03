import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackageDetail from '@/containers/ExercisePackageDetail';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

import './ExerciseOnlineDetail.scss';

const ExerciseOnlineDetail: React.FC = () => {
  const handleNavigateExercisePackage = (): void => {
    navigate(-1);
  };
  return (
    <div className="Exercise style-container">
      <HeaderSkew title="Gói PT Online" />

      <div className="Exercise-main">
        <ExercisePackageDetail type={ETypeExercisePackage.PT_ONLINE} onBack={handleNavigateExercisePackage} />
      </div>
    </div>
  );
};

export default ExerciseOnlineDetail;
