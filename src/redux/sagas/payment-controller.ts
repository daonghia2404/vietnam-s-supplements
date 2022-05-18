import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/payment-controller';
import {
  getPaymentHistoryAction,
  getPaymentHistorysAction,
  createPaymentAction,
  returnPaymentAction,
  createPaymentOrderAction,
} from '@/redux/actions/payment-controller';
import {
  TCreatePaymentResponse,
  TGetPaymentHistoryResponse,
  TGetPaymentHistorysResponse,
} from '@/services/api/payment-controller/types';

export function* getPaymentHistorysSaga(action: ActionType<typeof getPaymentHistorysAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPaymentHistorys, params)) as TGetPaymentHistorysResponse;

    yield put(getPaymentHistorysAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPaymentHistorysAction.failure(err));
  }
}
export function* getPaymentHistorySaga(action: ActionType<typeof getPaymentHistoryAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPaymentHistory, id)) as TGetPaymentHistoryResponse;

    yield put(getPaymentHistoryAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPaymentHistoryAction.failure(err));
  }
}
export function* returnPaymentSaga(action: ActionType<typeof returnPaymentAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.returnPayment, params)) as TGetPaymentHistoryResponse;

    yield put(returnPaymentAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(returnPaymentAction.failure(err));
  }
}
export function* createPaymentSaga(action: ActionType<typeof createPaymentAction.request>): Generator {
  const { body, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.createPayment, body)) as TCreatePaymentResponse;

    yield put(createPaymentAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(createPaymentAction.failure(err));
  }
}

export function* createPaymentOrderSaga(action: ActionType<typeof createPaymentOrderAction.request>): Generator {
  const { body, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.createPaymentOrder, body)) as TCreatePaymentResponse;

    yield put(createPaymentOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(createPaymentOrderAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getPaymentHistorysAction.request.type, getPaymentHistorysSaga)]);
  yield all([takeLatest(getPaymentHistoryAction.request.type, getPaymentHistorySaga)]);
  yield all([takeLatest(createPaymentAction.request.type, createPaymentSaga)]);
  yield all([takeLatest(createPaymentOrderAction.request.type, createPaymentOrderSaga)]);
}
