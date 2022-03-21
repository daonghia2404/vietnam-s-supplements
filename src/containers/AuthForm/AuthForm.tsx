import React from 'react';

import { TAuthFormProps } from '@/containers/AuthForm/AuthForm.types';
import ImageAuthBanner from '@/assets/images/image-auth-banner.png';

import './AuthForm.scss';

const AuthForm: React.FC<TAuthFormProps> = ({ children }) => {
  return (
    <div className="AuthForm">
      <div className="AuthForm-card flex flex-wrap">
        <div className="AuthForm-item">
          <div className="AuthForm-item-image">
            <img src={ImageAuthBanner} alt="" />
          </div>
        </div>
        <div className="AuthForm-item">{children}</div>
      </div>
    </div>
  );
};

export default AuthForm;
