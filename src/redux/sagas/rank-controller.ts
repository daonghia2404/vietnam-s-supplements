import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/rank-controller';
import { getBonusAction, getHistoryPointsAction } from '@/redux/actions/rank-controller';
import { TGetBonusResponse, TGetHistoryPointsResponse } from '@/services/api/rank-controller/types';

export function* getHistoryPointsSaga(action: ActionType<typeof getHistoryPointsAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getHistoryPoints, params)) as TGetHistoryPointsResponse;

    yield put(getHistoryPointsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getHistoryPointsAction.failure(err));
  }
}
export function* getBonusSaga(action: ActionType<typeof getBonusAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(Instance.getBonus)) as TGetBonusResponse;

    yield put(getBonusAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBonusAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getHistoryPointsAction.request.type, getHistoryPointsSaga)]);
  yield all([takeLatest(getBonusAction.request.type, getBonusSaga)]);
}
