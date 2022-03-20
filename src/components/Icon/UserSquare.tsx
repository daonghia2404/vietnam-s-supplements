import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';
import IconBar from '@/assets/icons/icon-bars.png';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1095_6439)">
        <path
          d="M20.5832 0.15C21.9796 0.151695 23.3182 0.707128 24.3055 1.69447C25.2929 2.68183 25.8483 4.02051 25.85 5.41685V20.5832C25.8483 21.9795 25.2929 23.3182 24.3055 24.3055C23.3182 25.2929 21.9795 25.8483 20.5832 25.85H5.41685C4.02051 25.8483 2.68183 25.2929 1.69447 24.3055C0.707108 23.3182 0.151672 21.9795 0.15 20.5832L0.15 5.41676C0.151695 4.02045 0.707128 2.68181 1.69447 1.69447C2.68183 0.707108 4.02051 0.151672 5.41685 0.15L20.5832 0.15ZM7.43333 23.8333V23.9833H7.58333H18.4167H18.5667V23.8333V22.75C18.5667 21.2736 17.9802 19.8577 16.9362 18.8138C15.8923 17.7698 14.4764 17.1833 13 17.1833C11.5236 17.1833 10.1077 17.7698 9.06377 18.8138C8.01982 19.8577 7.43333 21.2736 7.43333 22.75V23.8333ZM20.4333 23.8333V23.9833H20.5833C21.4851 23.9833 22.3499 23.6251 22.9875 22.9875C23.6251 22.3499 23.9833 21.4851 23.9833 20.5833V5.41667C23.9833 4.51493 23.6251 3.65013 22.9875 3.0125C22.3499 2.37488 21.4851 2.01667 20.5833 2.01667H5.41667C4.51493 2.01667 3.65013 2.37488 3.0125 3.0125C2.37488 3.65013 2.01667 4.51493 2.01667 5.41667V20.5833C2.01667 21.4851 2.37488 22.3499 3.0125 22.9875C3.65013 23.6251 4.51493 23.9833 5.41667 23.9833H5.56667V23.8333V22.75C5.56667 20.7786 6.34982 18.8879 7.74384 17.4938C9.13786 16.0998 11.0286 15.3167 13 15.3167C14.9714 15.3167 16.8621 16.0998 18.2562 17.4938C19.6502 18.8879 20.4333 20.7786 20.4333 22.75V23.8333Z"
          fill={color}
          stroke="white"
          strokeWidth="0.3"
        />
        <path
          d="M10.6762 5.18839C11.3641 4.72872 12.1729 4.48337 13.0003 4.48337C14.1098 4.48337 15.1739 4.92412 15.9584 5.70864C16.7429 6.49317 17.1837 7.55722 17.1837 8.66671C17.1837 9.49409 16.9383 10.3029 16.4786 10.9908C16.019 11.6788 15.3656 12.215 14.6012 12.5316C13.8368 12.8482 12.9957 12.9311 12.1842 12.7697C11.3727 12.6082 10.6273 12.2098 10.0423 11.6248C9.45721 11.0397 9.05879 10.2943 8.89738 9.48284C8.73596 8.67135 8.8188 7.83022 9.13543 7.06582C9.45206 6.30141 9.98825 5.64806 10.6762 5.18839ZM11.7133 10.5929C12.0942 10.8475 12.5421 10.9834 13.0003 10.9834C13.6147 10.9834 14.204 10.7393 14.6385 10.3048C15.0729 9.87038 15.317 9.28113 15.317 8.66671C15.317 8.20851 15.1811 7.76061 14.9266 7.37964C14.672 6.99866 14.3102 6.70173 13.8869 6.52639C13.4636 6.35104 12.9978 6.30517 12.5484 6.39455C12.099 6.48394 11.6862 6.70458 11.3622 7.02858C11.0382 7.35257 10.8176 7.76536 10.7282 8.21475C10.6388 8.66414 10.6847 9.12994 10.86 9.55326C11.0354 9.97657 11.3323 10.3384 11.7133 10.5929Z"
          fill={color}
          stroke="white"
          strokeWidth="0.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_1095_6439">
          <rect width="26" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
