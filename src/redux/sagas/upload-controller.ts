import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/upload-controller';
import { uploadAction } from '@/redux/actions';
import { TUploadResponse } from '@/services/api/upload-controller/types';

export function* uploadSaga(action: ActionType<typeof uploadAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.upload, body)) as TUploadResponse;

    yield put(uploadAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(uploadAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(uploadAction.request.type, uploadSaga)]);
}
