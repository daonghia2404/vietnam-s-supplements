import React from 'react';

import { TSvgProps } from './Icon.types';
import IconCart from '@/assets/icons/icon-cart.png';

const Icon: React.FC<TSvgProps> = () => {
  return <img src={IconCart} alt="" />;
};

export default Icon;
