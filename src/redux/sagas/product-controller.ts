import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/product-controller';
import { getProductsFavoriteAction } from '@/redux/actions';
import { TGetProductsFavoriteResponse } from '@/services/api/product-controller/types';

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

export default function* root(): Generator {
  yield all([takeLatest(getProductsFavoriteAction.request.type, getProductsFavoriteSaga)]);
}
