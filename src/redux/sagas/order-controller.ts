import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/order-controller';
import { getOrderAction, getOrdersAction } from '@/redux/actions/order-controller';
import { TGetOrderResponse, TGetOrdersResponse } from '@/services/api/order-controller/types';

export function* getOrdersSaga(action: ActionType<typeof getOrdersAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getOrders, params)) as TGetOrdersResponse;

    yield put(getOrdersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getOrdersAction.failure(err));
  }
}
export function* getOrderSaga(action: ActionType<typeof getOrderAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getOrder, id)) as TGetOrderResponse;

    yield put(getOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getOrderAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getOrdersAction.request.type, getOrdersSaga)]);
  yield all([takeLatest(getOrderAction.request.type, getOrderSaga)]);
}
