import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/product-controller';
import { getProductAction, getProductsAction, getProductsFavoriteAction } from '@/redux/actions';
import {
  TGetProductResponse,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
} from '@/services/api/product-controller/types';

export function* getProductsFavoriteSaga(action: ActionType<typeof getProductsFavoriteAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getProductsFavorite, params)) as TGetProductsFavoriteResponse;

    yield put(getProductsFavoriteAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getProductsFavoriteAction.failure(err));
  }
}

export function* getProductsSaga(action: ActionType<typeof getProductsAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getProducts, params)) as TGetProductsResponse;

    yield put(getProductsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getProductsAction.failure(err));
  }
}
export function* getProductSaga(action: ActionType<typeof getProductAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getProduct, id)) as TGetProductResponse;

    yield put(getProductAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getProductAction.failure(err));
  }
}
export default function* root(): Generator {
  yield all([takeLatest(getProductsFavoriteAction.request.type, getProductsFavoriteSaga)]);
  yield all([takeLatest(getProductsAction.request.type, getProductsSaga)]);
  yield all([takeLatest(getProductAction.request.type, getProductSaga)]);
}
