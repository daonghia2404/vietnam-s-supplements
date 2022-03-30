import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { TUploadFilesListProps } from '@/components/UploadFilesList/UploadFilesList.types';
import Upload from '@/components/Upload/Upload';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { uploadAction } from '@/redux/actions';
import { EUploadControllerAction } from '@/redux/actions/upload-controller/constants';
import { TRootState } from '@/redux/reducers';
import { TUploadResponse } from '@/services/api/upload-controller/types';

import './UploadFilesList.scss';

const UploadFilesList: React.FC<TUploadFilesListProps> = ({ className, label, value = [], onChange, useSingle }) => {
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
    if (useSingle) onChange?.([data.filename]);
  };

  const handleRemoveImage = (removeFile: string): void => {
    const newFilesList = value.filter((item) => item !== removeFile);
    onChange?.(newFilesList);
  };

  return (
    <div className={classNames('UploadFilesList flex items-center flex-wrap justify-between', className)}>
      <div className="UploadFilesList-item">
        <div className="UploadFilesList-item-label">{label}</div>
      </div>
      <div className="UploadFilesList-item">
        <Upload onChange={handleUpload} disabled={uploadLoading}>
          <Button iconName={uploadLoading ? EIconName.LoadingSpin : EIconName.Picture} shadow={false} size="small" />
        </Upload>
      </div>
      <div className="UploadFilesList-images flex flex-wrap">
        {Array.isArray(value) &&
          value?.map((item) => (
            <div key={item} className="UploadFilesList-images-item">
              <div className="UploadFilesList-images-item-remove" onClick={(): void => handleRemoveImage(item)}>
                <Icon name={EIconName.Close} />
              </div>

              <img src={item} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadFilesList;
