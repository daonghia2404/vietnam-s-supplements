import React from 'react';
import classNames from 'classnames';

import { TUploadAvatarProps } from '@/components/UploadAvatar/UploadAvatar.types';
import Upload from '@/components/Upload/Upload';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './UploadAvatar.scss';

const UploadAvatar: React.FC<TUploadAvatarProps> = ({ className, value, onChange }) => {
  return (
    <div className={classNames('UploadAvatar', className)}>
      <Upload>
        <div className="UploadAvatar-image flex">
          <img src={value || ImageAvatarDefault} alt="" />
        </div>
        <div className="UploadAvatar-icon">
          <Icon name={EIconName.Camera} color={EIconColor.WHITE} />
        </div>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
