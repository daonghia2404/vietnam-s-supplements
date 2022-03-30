import React from 'react';

import { TSvgProps } from './Icon.types';
import IconBar from '@/assets/icons/icon-bars.png';

const Icon: React.FC<TSvgProps> = () => {
  return <img src={IconBar} alt="" />;
};

export default Icon;
