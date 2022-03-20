import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';
import IconCart from '@/assets/icons/icon-cart.png';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return <img src={IconCart} alt="" />;
};

export default Icon;
