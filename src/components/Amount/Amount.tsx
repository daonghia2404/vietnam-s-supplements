import React, { useState } from 'react';
import classNames from 'classnames';

import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TAmountProps } from './Amount.types';
import './Amount.scss';

const DEFAULT_VALUE = 1;

const Amount: React.FC<TAmountProps> = ({ value, step = 1, onChange, min = 1, max, disabled }) => {
  const [stateValue, setStateValue] = useState(DEFAULT_VALUE);
  const isHaveValueProp = value !== undefined;

  const currentValue = isHaveValueProp ? value : stateValue;

  const handleMinus = (): void => {
    if (!disabled) {
      const isNotMinValue = currentValue !== min;
      if (isNotMinValue) {
        const newValue = currentValue - step;
        onChange?.(newValue);
        if (!onChange) setStateValue(newValue);
      }
    }
  };

  const handlePlus = (): void => {
    if (!disabled) {
      const isNotMaxValue = !max || currentValue !== max;
      if (isNotMaxValue) {
        const newValue = currentValue + step;
        onChange?.(newValue);
        if (!onChange) setStateValue(newValue);
      }
    }
  };

  return (
    <div className={classNames('Amount flex items-center', { disabled })}>
      <div className={classNames('Amount-minus', { disabled: value === min })} onClick={handleMinus}>
        <Icon name={EIconName.Minus} color={EIconColor.WHITE} />
      </div>
      <span>{currentValue}</span>
      <div className={classNames('Amount-plus', { disabled: value === max })} onClick={handlePlus}>
        <Icon name={EIconName.Plus} color={EIconColor.WHITE} />
      </div>
    </div>
  );
};

export default Amount;
