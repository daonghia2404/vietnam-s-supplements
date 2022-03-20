import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';
import IconQuote from '@/assets/icons/icon-quote.png';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return <img src={IconQuote} alt="" />;
};

export default Icon;
