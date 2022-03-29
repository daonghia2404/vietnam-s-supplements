import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/wheel-controller';
import { getWheelAction, getWheelsUserAction } from '@/redux/actions/wheel-controller';
import { TGetWheelResponse, TGetWheelsUserResponse } from '@/services/api/wheel-controller/types';

export function* getWheelsUserSaga(action: ActionType<typeof getWheelsUserAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getWheelsUser, params)) as TGetWheelsUserResponse;

    yield put(getWheelsUserAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getWheelsUserAction.failure(err));
  }
}
export function* getWheelSaga(action: ActionType<typeof getWheelAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getWheel, id)) as TGetWheelResponse;

    yield put(getWheelAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getWheelAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getWheelsUserAction.request.type, getWheelsUserSaga)]);
  yield all([takeLatest(getWheelAction.request.type, getWheelSaga)]);
}
