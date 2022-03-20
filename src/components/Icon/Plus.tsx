import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C4.65482 0 4.375 0.279822 4.375 0.625V4.375H0.625C0.279822 4.375 0 4.65482 0 5C0 5.34518 0.279822 5.625 0.625 5.625H4.375V9.375C4.375 9.72018 4.65482 10 5 10C5.34518 10 5.625 9.72018 5.625 9.375V5.625H9.375C9.72018 5.625 10 5.34518 10 5C10 4.65482 9.72018 4.375 9.375 4.375H5.625V0.625C5.625 0.279822 5.34518 0 5 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Icon;
