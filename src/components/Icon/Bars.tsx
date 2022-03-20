import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';
import IconBar from '@/assets/icons/icon-bars.png';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return <img src={IconBar} alt="" />;
};

export default Icon;
