import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/handbook-controller';
import { getHandbookAction, getHandbooksAction } from '@/redux/actions/handbook-controller';
import { TGetHandbookResponse, TGetHandbooksResponse } from '@/services/api/handbook-controller/types';

export function* getHandbooksSaga(action: ActionType<typeof getHandbooksAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getHandbooks, params)) as TGetHandbooksResponse;

    yield put(getHandbooksAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHandbooksAction.failure(err));
  }
}
export function* getHandbookSaga(action: ActionType<typeof getHandbookAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getHandbook, id)) as TGetHandbookResponse;

    yield put(getHandbookAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHandbookAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getHandbooksAction.request.type, getHandbooksSaga)]);
  yield all([takeLatest(getHandbookAction.request.type, getHandbookSaga)]);
}
