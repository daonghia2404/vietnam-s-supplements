import React from 'react';
import classNames from 'classnames';

import { THeaderSkewProps } from '@/components/HeaderSkew/HeaderSkew.types';

import './HeaderSkew.scss';

const HeaderSkew: React.FC<THeaderSkewProps> = ({ className, center, title }) => {
  return (
    <div className={classNames('HeaderSkew flex', className, { 'justify-center': center })}>
      <div className="HeaderSkew-item">
        <div className="HeaderSkew-title">{title}</div>
        <div className="HeaderSkew-subtitle">VNSUPPLEMENTS</div>
      </div>
    </div>
  );
};

export default HeaderSkew;
