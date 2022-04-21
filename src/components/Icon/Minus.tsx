import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="12" height="2" rx="1" fill={color} />
    </svg>
  );
};

export default Icon;
