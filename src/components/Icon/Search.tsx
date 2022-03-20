import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';
import IconSearch from '@/assets/icons/icon-search.png';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return <img src={IconSearch} alt="" />;
};

export default Icon;
