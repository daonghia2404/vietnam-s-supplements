import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/cart-controller';
import {
  addCartAction,
  createCartAction,
  deleteCartAction,
  getCartAction,
  patchCartAction,
} from '@/redux/actions/cart-controller';
import {
  TAddCartResponse,
  TCreateCartResponse,
  TDeleteCartResponse,
  TGetCartResponse,
  TPatchCartResponse,
} from '@/services/api/cart-controller/types';

export function* getCartSaga(action: ActionType<typeof getCartAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(Instance.getCart)) as TGetCartResponse;

    yield put(getCartAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getCartAction.failure(err));
  }
}
export function* addCartSaga(action: ActionType<typeof addCartAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.addCart, body)) as TAddCartResponse;

    yield put(addCartAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(addCartAction.failure(err));
  }
}
export function* createCartSaga(action: ActionType<typeof createCartAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.createCart, body)) as TCreateCartResponse;

    yield put(createCartAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createCartAction.failure(err));
  }
}
export function* patchCartSaga(action: ActionType<typeof patchCartAction.request>): Generator {
  const { id, body, cb } = action.payload;
  try {
    const response = (yield call(Instance.patchCart, id, body)) as TPatchCartResponse;

    yield put(patchCartAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(patchCartAction.failure(err));
  }
}
export function* deleteCartSaga(action: ActionType<typeof deleteCartAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.deleteCart, id)) as TDeleteCartResponse;

    yield put(deleteCartAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(deleteCartAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getCartAction.request.type, getCartSaga)]);
  yield all([takeLatest(addCartAction.request.type, addCartSaga)]);
  yield all([takeLatest(createCartAction.request.type, createCartSaga)]);
  yield all([takeLatest(patchCartAction.request.type, patchCartSaga)]);
  yield all([takeLatest(deleteCartAction.request.type, deleteCartSaga)]);
}
