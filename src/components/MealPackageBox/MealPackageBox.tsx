import React from 'react';
import classNames from 'classnames';

import { TMealPackageBoxProps } from './MealPackageBox.types';

import './MealPackageBox.scss';

const MealPackageBox: React.FC<TMealPackageBoxProps> = ({
  className,
  image,
  title,
  price,
  date,
  onClickDetail,
  onRegister,
}) => {
  return (
    <div className={classNames('MealPackageBox flex', className)}>
      <div className="MealPackageBox-image" onClick={onClickDetail}>
        <img src={image} alt="" />
      </div>
      <div className="MealPackageBox-info">
        <div className="MealPackageBox-info-title" onClick={onClickDetail}>
          {title}
        </div>
        <div className="MealPackageBox-info-description" onClick={onClickDetail}>
          <span>{price}</span> / {date}
        </div>
        <div className="MealPackageBox-info-btn flex">
          <div className="MealPackageBox-info-cta" onClick={onRegister}>
            Đăng ký ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPackageBox;
