import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/turn-wheel-controller';
import { buyTurnWheelAction, getTurnWheelUserAction, shareSocialTurnWheelAction } from '@/redux/actions';
import {
  TBuyTurnWheelResponse,
  TGetTurnWheelUserResponse,
  TShareSocialTurnWheelResponse,
} from '@/services/api/turn-wheel-controller/types';

export function* getTurnWheelUserSaga(action: ActionType<typeof getTurnWheelUserAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getTurnWheelUser, id)) as TGetTurnWheelUserResponse;

    yield put(getTurnWheelUserAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getTurnWheelUserAction.failure(err));
  }
}
export function* buyTurnWheelSaga(action: ActionType<typeof buyTurnWheelAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.buyTurnWheel, id)) as TBuyTurnWheelResponse;

    yield put(buyTurnWheelAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(buyTurnWheelAction.failure(err));
  }
}
export function* shareSocialTurnWheelSaga(action: ActionType<typeof shareSocialTurnWheelAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.shareSocialTurnWheel, id)) as TShareSocialTurnWheelResponse;

    yield put(shareSocialTurnWheelAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(shareSocialTurnWheelAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getTurnWheelUserAction.request.type, getTurnWheelUserSaga)]);
  yield all([takeLatest(buyTurnWheelAction.request.type, buyTurnWheelSaga)]);
  yield all([takeLatest(shareSocialTurnWheelAction.request.type, shareSocialTurnWheelSaga)]);
}
