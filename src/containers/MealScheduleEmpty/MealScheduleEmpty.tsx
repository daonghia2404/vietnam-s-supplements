import React from 'react';

import ImageEmptyMealSchedule from '@/assets/images/image-empty-meal-schedule.png';
import Button from '@/components/Button';

import { TMealScheduleEmptyProps } from './MealScheduleEmpty.types';
import './MealScheduleEmpty.scss';

const MealScheduleEmpty: React.FC<TMealScheduleEmptyProps> = ({ onNext }) => {
  return (
    <div className="MealScheduleEmpty">
      <div className="MealScheduleEmpty-image">
        <img src={ImageEmptyMealSchedule} alt="" />
      </div>

      <div className="MealScheduleEmpty-title">Bạn chưa có lịch ăn/uống nào!</div>

      {onNext && (
        <div className="MealScheduleEmpty-btn">
          <Button type="primary" title="Đăng Ký Ngay" onClick={onNext} />
        </div>
      )}
    </div>
  );
};

export default MealScheduleEmpty;
