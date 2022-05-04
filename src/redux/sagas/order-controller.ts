import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/order-controller';
import {
  cancelOrderAction,
  createOrderAction,
  getOrderAction,
  getOrdersAction,
} from '@/redux/actions/order-controller';
import {
  TCancelOrderResponse,
  TCreateOrderResponse,
  TGetOrderResponse,
  TGetOrdersResponse,
} from '@/services/api/order-controller/types';

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

export function* createOrderSaga(action: ActionType<typeof createOrderAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.createOrder, body)) as TCreateOrderResponse;

    yield put(createOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createOrderAction.failure(err));
  }
}

export function* cancelOrderSaga(action: ActionType<typeof cancelOrderAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.cancelOrder, id)) as TCancelOrderResponse;

    yield put(cancelOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(cancelOrderAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getOrdersAction.request.type, getOrdersSaga)]);
  yield all([takeLatest(getOrderAction.request.type, getOrderSaga)]);
  yield all([takeLatest(createOrderAction.request.type, createOrderSaga)]);
  yield all([takeLatest(cancelOrderAction.request.type, cancelOrderSaga)]);
}
