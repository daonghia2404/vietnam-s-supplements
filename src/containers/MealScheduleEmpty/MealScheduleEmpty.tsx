import React from 'react';

import EmptyBox from '@/components/EmptyBox';

import { TMealScheduleEmptyProps } from './MealScheduleEmpty.types';

const MealScheduleEmpty: React.FC<TMealScheduleEmptyProps> = ({ onNext }) => {
  return (
    <EmptyBox
      title="Bạn chưa có lịch ăn/uống nào!"
      buttonProps={{
        title: 'Đăng Ký Ngay',
        type: 'primary',
        onClick: onNext,
      }}
    />
  );
};

export default MealScheduleEmpty;
