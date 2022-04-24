import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/product-controller';
import {
  getProductAction,
  getProductsAction,
  getProductsFavoriteAction,
  getProductsSearchAction,
  isFavoriteProductAction,
  likeProductAction,
  unlikeProductAction,
} from '@/redux/actions';
import {
  TGetProductResponse,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
  TIsFavoriteProductResponse,
  TLikeProductResponse,
  TUnlikeProductResponse,
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
export function* getProductsSearchSaga(action: ActionType<typeof getProductsSearchAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getProductsSearch, params)) as TGetProductsResponse;

    yield put(getProductsSearchAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getProductsSearchAction.failure(err));
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
export function* likeProductSaga(action: ActionType<typeof likeProductAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.likeProduct, id)) as TLikeProductResponse;

    yield put(likeProductAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(likeProductAction.failure(err));
  }
}
export function* unlikeProductSaga(action: ActionType<typeof unlikeProductAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.unlikeProduct, id)) as TUnlikeProductResponse;

    yield put(unlikeProductAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(unlikeProductAction.failure(err));
  }
}
export function* isFavoriteProductSaga(action: ActionType<typeof isFavoriteProductAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.isFavoriteProduct, id)) as TIsFavoriteProductResponse;

    yield put(isFavoriteProductAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(isFavoriteProductAction.failure(err));
  }
}
export default function* root(): Generator {
  yield all([takeLatest(getProductsFavoriteAction.request.type, getProductsFavoriteSaga)]);
  yield all([takeLatest(getProductsAction.request.type, getProductsSaga)]);
  yield all([takeLatest(getProductsSearchAction.request.type, getProductsSearchSaga)]);
  yield all([takeLatest(getProductAction.request.type, getProductSaga)]);
  yield all([takeLatest(likeProductAction.request.type, likeProductSaga)]);
  yield all([takeLatest(unlikeProductAction.request.type, unlikeProductSaga)]);
  yield all([takeLatest(isFavoriteProductAction.request.type, isFavoriteProductSaga)]);
}
