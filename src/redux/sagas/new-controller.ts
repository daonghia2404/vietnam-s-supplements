import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/new-controller';
import { getNewAction, getNewsAction } from '@/redux/actions/new-controller';
import { TGetNewResponse, TGetNewsResponse } from '@/services/api/new-controller/types';

export function* getNewsSaga(action: ActionType<typeof getNewsAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getNews, params)) as TGetNewsResponse;

    yield put(getNewsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getNewsAction.failure(err));
  }
}
export function* getNewSaga(action: ActionType<typeof getNewAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getNew, id)) as TGetNewResponse;

    yield put(getNewAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getNewAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getNewsAction.request.type, getNewsSaga)]);
  yield all([takeLatest(getNewAction.request.type, getNewSaga)]);
}
