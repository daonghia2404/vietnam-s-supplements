import React from 'react';

import { TSvgProps } from './Icon.types';
import IconQuote from '@/assets/icons/icon-quote.png';

const Icon: React.FC<TSvgProps> = () => {
  return <img src={IconQuote} alt="" />;
};

export default Icon;
