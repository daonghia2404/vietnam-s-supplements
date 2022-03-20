import React from 'react';
import { Select as AntdSelect } from 'antd';

import { TSelectProps } from './Select.types';
import './Select.scss';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const Select: React.FC<TSelectProps> = ({ placeholder, options = [], value, onChange }) => {
  return (
    <div className="Select">
      <AntdSelect
        allowClear
        showSearch
        placeholder={placeholder}
        options={options}
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
