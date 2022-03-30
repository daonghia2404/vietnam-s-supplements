import { EUploadControllerAction } from '@/redux/actions/upload-controller/constants';
import { TUploadResponse } from '@/services/api/upload-controller/types';

export type TUploadRequest = {
  type: EUploadControllerAction.UPLOAD_REQUEST;
  payload: {
    body: FormData;
    cb?: (response: TUploadResponse) => void;
  };
};

export type TUploadSuccess = {
  type: EUploadControllerAction.UPLOAD_SUCCESS;
  payload: { response: TUploadResponse };
};

export type TUploadFailed = { type: EUploadControllerAction.UPLOAD_FAILED; payload: { error: unknown } };
