import React from 'react';
import classNames from 'classnames';

import { TWheelBoxProps } from '@/components/WheelBox/WheelBox.types';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import { handleErrorImageUrl } from '@/utils/functions';

import './WheelBox.scss';

const WheelBox: React.FC<TWheelBoxProps> = ({ className, title, description, image, onClick }) => {
  return (
    <div className={classNames('WheelBox', className)} onClick={onClick}>
      <div className="WheelBox-image">
        <img src={image} onError={handleErrorImageUrl} alt="" />
      </div>
      <div className="WheelBox-content flex items-center justify-between">
        <div className="WheelBox-content-item flex items-center">
          <div className="WheelBox-content-item-icon">
            <Button shadow={false} iconName={EIconName.Wheel} size="small" />
          </div>

          <div className="WheelBox-content-item-info">
            <div className="WheelBox-content-item-info-title">{title}</div>
            <div className="WheelBox-content-item-info-description">{description}</div>
          </div>
        </div>

        <div className="WheelBox-content-item flex items-center">
          <Icon name={EIconName.AngleRight} />
        </div>
      </div>
    </div>
  );
};

export default WheelBox;
