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
      <div className="Amount-minus" onClick={handlePlus}>
        <Icon name={EIconName.Plus} color={EIconColor.BLACK} />
      </div>
      <span>{currentValue}</span>
      <div className="Amount-plus" onClick={handleMinus}>
        <Icon name={EIconName.Minus} color={EIconColor.BLACK} />
      </div>
    </div>
  );
};

export default Amount;
