import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { EFormatDate } from '@/common/enums';

import { TDatePickerProps } from './DatePicker.types';
import './DatePicker.scss';

const DatePicker: React.FC<TDatePickerProps> = ({ className, value, placeholder, onChange }) => {
  return (
    <div className={classNames('DatePicker', className)}>
      <AntdDatePicker
        suffixIcon={<Icon name={EIconName.Calendar} color={EIconColor.BOULDER} />}
        format={EFormatDate.COMMON}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePicker;
