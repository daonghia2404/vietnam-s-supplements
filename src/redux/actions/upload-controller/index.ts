import { createActionCreator } from 'deox';

import { EUploadControllerAction } from '@/redux/actions/upload-controller/constants';
import { TUploadResponse } from '@/services/api/upload-controller/types';
import { TUploadRequest, TUploadSuccess, TUploadFailed } from '@/redux/actions/upload-controller/types';

export const uploadAction = {
  request: createActionCreator(
    EUploadControllerAction.UPLOAD_REQUEST,
    (resolve) =>
      (body: FormData, cb?: (response: TUploadResponse) => void): TUploadRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EUploadControllerAction.UPLOAD_SUCCESS,
    (resolve) =>
      (response: TUploadResponse): TUploadSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUploadControllerAction.UPLOAD_FAILED,
    (resolve) =>
      (error: unknown): TUploadFailed =>
        resolve({ error }),
  ),
};
