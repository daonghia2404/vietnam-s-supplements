import React from 'react';

import ImageEmptyMealSchedule from '@/assets/images/image-empty-meal-schedule.png';
import Button from '@/components/Button';

import { TEmptyBoxProps } from './EmptyBox.types';
import './EmptyBox.scss';

const EmptyBox: React.FC<TEmptyBoxProps> = ({ title, buttonProps }) => {
  return (
    <div className="EmptyBox">
      <div className="EmptyBox-image">
        <img src={ImageEmptyMealSchedule} alt="" />
      </div>

      <div className="EmptyBox-title">{title}</div>

      {buttonProps && (
        <div className="EmptyBox-btn">
          <Button {...buttonProps} type="primary" />
        </div>
      )}
    </div>
  );
};

export default EmptyBox;
