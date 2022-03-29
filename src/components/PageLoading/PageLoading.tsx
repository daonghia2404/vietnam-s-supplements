import React from 'react';
import classNames from 'classnames';

import { TPageLoadingProps } from '@/components/PageLoading/PageLoading.types';
import Logo from '@/assets/images/logo.png';
import Favicon from '@/assets/images/favicon.png';
import LoadingSpin from '@/assets/icons/icon-loading-spin.svg';

import './PageLoading.scss';

const PageLoading: React.FC<TPageLoadingProps> = ({ isFullPage, showSpin = true }) => {
  return (
    <div className={classNames('PageLoading flex items-center justify-center', { fullPage: isFullPage })}>
      {showSpin ? (
        <div className="PageLoading-spin">
          <img src={LoadingSpin} alt="" />
        </div>
      ) : (
        <div className="PageLoading-image flex items-center">
          <img className="PageLoading-image-favicon" src={Favicon} alt="" />
          <img className="PageLoading-image-logo" src={Logo} alt="" />
        </div>
      )}
    </div>
  );
};

export default PageLoading;
