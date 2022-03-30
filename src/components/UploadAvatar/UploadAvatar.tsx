import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { TUploadAvatarProps } from '@/components/UploadAvatar/UploadAvatar.types';
import Upload from '@/components/Upload/Upload';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { uploadAction } from '@/redux/actions';
import { TUploadResponse } from '@/services/api/upload-controller/types';
import { TRootState } from '@/redux/reducers';
import { EUploadControllerAction } from '@/redux/actions/upload-controller/constants';
import LoadingSpin from '@/assets/icons/icon-loading-spin.svg';

import './UploadAvatar.scss';

const UploadAvatar: React.FC<TUploadAvatarProps> = ({ className, value, onChange }) => {
  const dispatch = useDispatch();

  const uploadLoading = useSelector((state: TRootState) => state.loadingReducer[EUploadControllerAction.UPLOAD]);

  const handleUpload = (data: FileList | null): void => {
    const singleFile = data?.[0];

    if (singleFile) {
      const bodyFormData = new FormData();
      bodyFormData.append('file', singleFile);

      dispatch(uploadAction.request(bodyFormData, handleUploadSuccess));
    }
  };

  const handleUploadSuccess = (data: TUploadResponse): void => {
    onChange?.(data.filename);
  };

  return (
    <div className={classNames('UploadAvatar', className)}>
      <Upload disabled={uploadLoading} onChange={handleUpload}>
        <div className="UploadAvatar-image flex">
          <img src={value || ImageAvatarDefault} alt="" />

          {uploadLoading && (
            <div className="UploadAvatar-loading flex items-center justify-center">
              <img src={LoadingSpin} alt="" />
            </div>
          )}
        </div>
        <div className="UploadAvatar-icon">
          <Icon name={EIconName.Camera} color={EIconColor.WHITE} />
        </div>
      </Upload>
    </div>
  );
};

export default UploadAvatar;
