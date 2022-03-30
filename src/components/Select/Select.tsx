import React from 'react';
import { Select as AntdSelect } from 'antd';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { searchString } from '@/utils/functions';

import { TSelectProps } from './Select.types';
import './Select.scss';

const Select: React.FC<TSelectProps> = ({
  placeholder,
  disabled,
  options = [],
  showSearch = true,
  value,
  onChange,
}) => {
  const filterOption = (input: string, option: any): boolean => {
    return searchString(option.label || '', input);
  };

  return (
    <div className="Select">
      <AntdSelect
        allowClear
        showSearch={showSearch}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
        filterOption={filterOption}
        value={value}
        onChange={onChange}
        labelInValue
        suffixIcon={<Icon name={EIconName.AngleRight} color={EIconColor.BOULDER} />}
        notFoundContent="Không tìm thấy dữ liệu"
      />
    </div>
  );
};

export default Select;
