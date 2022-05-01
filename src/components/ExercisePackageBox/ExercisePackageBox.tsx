import React from 'react';
import classNames from 'classnames';

import { TExercisePackageBoxProps } from './ExercisePackageBox.types';
import Icon, { EIconName } from '@/components/Icon';

import './ExercisePackageBox.scss';

const ExercisePackageBox: React.FC<TExercisePackageBoxProps> = ({
  className,
  image,
  title,
  owner,
  description,
  onClickDetail,
  onBuy,
}) => {
  return (
    <div className={classNames('ExercisePackageBox flex', className)}>
      <div className="ExercisePackageBox-image" onClick={onClickDetail}>
        <img src={image} alt="" />
      </div>
      <div className="ExercisePackageBox-info">
        <div className="ExercisePackageBox-info-title flex justify-between" onClick={onClickDetail}>
          {title}
          <Icon name={EIconName.AngleRight} />
        </div>
        <div className="ExercisePackageBox-info-description" onClick={onClickDetail}>
          {description}
        </div>
        {!owner && (
          <div className="ExercisePackageBox-info-btn flex">
            <div className="ExercisePackageBox-info-cta" onClick={onBuy}>
              Mua ngay
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisePackageBox;
