import React from 'react';

import { TSvgProps } from './Icon.types';
import IconSearch from '@/assets/icons/icon-search.png';

const Icon: React.FC<TSvgProps> = () => {
  return <img src={IconSearch} alt="" />;
};

export default Icon;
