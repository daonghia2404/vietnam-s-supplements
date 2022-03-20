import React from 'react';
import classNames from 'classnames';
import { Input as AntdInput } from 'antd';

import { TInputProps } from '@/components/Input/Input.types';

import './Input.scss';

const Input: React.FC<TInputProps> = ({ className, type, size, placeholder, prefix, suffix, onChange, value }) => {
  return (
    <div className={classNames('Input', className, { affix: suffix || prefix })}>
      <AntdInput
        type={type}
        size={size}
        placeholder={placeholder}
        value={value}
        prefix={prefix}
        suffix={suffix}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
