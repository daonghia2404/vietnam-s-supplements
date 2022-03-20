import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_594_11192)">
        <circle cx="13" cy="13" r="12" stroke={color} strokeWidth="2" />
        <path
          d="M20.273 13.0001C20.273 17.0168 17.0169 20.2729 13.0003 20.2729C8.98365 20.2729 5.72754 17.0168 5.72754 13.0001C5.72754 8.98353 8.98365 5.72742 13.0003 5.72742C17.0169 5.72742 20.273 8.98353 20.273 13.0001Z"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M15.546 12.9999C15.546 14.4057 14.4064 15.5454 13.0005 15.5454C11.5947 15.5454 10.4551 14.4057 10.4551 12.9999C10.4551 11.5941 11.5947 10.4545 13.0005 10.4545C14.4064 10.4545 15.546 11.5941 15.546 12.9999Z"
          stroke={color}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_594_11192">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
