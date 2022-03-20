import React from 'react';
import classNames from 'classnames';

import { TWheelRotationItemProps } from '@/components/WheelRotation/WheelRotation.types';

import './WheelRotationItem.scss';

const WheelRotationItem: React.FC<TWheelRotationItemProps> = ({ skewY, rotate, label, index }) => {
  return (
    <li
      style={{
        transform: `rotate(${rotate * index}deg) skewY(-${skewY}deg)`,
      }}
    >
      <p
        className={classNames(
          'WheelRotationItem-item-wheel',
          { 'item-wheel-1': index % 2 === 0 },
          { 'item-wheel-2': index % 2 !== 0 },
        )}
        style={{
          transform: `skewY(${skewY}deg) rotate(${rotate / 2}deg)`,
        }}
      >
        <b>{label}</b>
      </p>
    </li>
  );
};

export default WheelRotationItem;
