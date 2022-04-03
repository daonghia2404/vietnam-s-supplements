import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/pack-pt-online-controller';
import {
  buyPackPtOnlineAction,
  getPackPtOnlineAction,
  getPackPtOnlinesAction,
} from '@/redux/actions/pack-pt-online-controller';
import {
  TBuyPackPtOnlineResponse,
  TGetPackPtOnlineResponse,
  TGetPackPtOnlinesResponse,
} from '@/services/api/pack-pt-online-controller/types';

export function* getPackPtOnlinesSaga(action: ActionType<typeof getPackPtOnlinesAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackPtOnlines, params)) as TGetPackPtOnlinesResponse;

    yield put(getPackPtOnlinesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackPtOnlinesAction.failure(err));
  }
}
export function* getPackPtOnlineSaga(action: ActionType<typeof getPackPtOnlineAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackPtOnline, id)) as TGetPackPtOnlineResponse;

    yield put(getPackPtOnlineAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackPtOnlineAction.failure(err));
  }
}

export function* buyPackPtOnlineSaga(action: ActionType<typeof buyPackPtOnlineAction.request>): Generator {
  const { id, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.buyPackPtOnline, id)) as TBuyPackPtOnlineResponse;

    yield put(buyPackPtOnlineAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(buyPackPtOnlineAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getPackPtOnlinesAction.request.type, getPackPtOnlinesSaga)]);
  yield all([takeLatest(getPackPtOnlineAction.request.type, getPackPtOnlineSaga)]);
  yield all([takeLatest(buyPackPtOnlineAction.request.type, buyPackPtOnlineSaga)]);
}
