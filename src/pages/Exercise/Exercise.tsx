import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackage from '@/containers/ExercisePackage';

import './Exercise.scss';

const Exercise: React.FC = () => {
  return (
    <div className="Exercise style-container">
      <HeaderSkew title="Gói tập" />

      <div className="Exercise-main">{/* <ExercisePackage /> */}</div>
    </div>
  );
};

export default Exercise;
