import React from 'react';
import classNames from 'classnames';

import { TUploadFilesListProps } from '@/components/UploadFilesList/UploadFilesList.types';
import Upload from '@/components/Upload/Upload';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import ImageCCCD from '@/assets/images/image-cccd.png';

import './UploadFilesList.scss';

const UploadFilesList: React.FC<TUploadFilesListProps> = ({ className, label, value, onChange }) => {
  return (
    <div className={classNames('UploadFilesList flex items-center flex-wrap justify-between', className)}>
      <div className="UploadFilesList-item">
        <div className="UploadFilesList-item-label">{label}</div>
      </div>
      <div className="UploadFilesList-item">
        <Upload>
          <Button iconName={EIconName.Picture} shadow={false} size="small" />
        </Upload>
      </div>
      <div className="UploadFilesList-images flex flex-wrap">
        <div className="UploadFilesList-images-item">
          <div className="UploadFilesList-images-item-remove">
            <Icon name={EIconName.Close} />
          </div>

          <img src={ImageCCCD} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadFilesList;
