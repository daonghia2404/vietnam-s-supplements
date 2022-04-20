import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/category-controller';
import { getCategoryAction, getCategorysAction } from '@/redux/actions/category-controller';
import { TGetCategoryResponse, TGetCategorysResponse } from '@/services/api/category-controller/types';

export function* getCategorysSaga(action: ActionType<typeof getCategorysAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getCategorys, params)) as TGetCategorysResponse;

    yield put(getCategorysAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getCategorysAction.failure(err));
  }
}
export function* getCategorySaga(action: ActionType<typeof getCategoryAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getCategory, id)) as TGetCategoryResponse;

    yield put(getCategoryAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getCategoryAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getCategorysAction.request.type, getCategorysSaga)]);
  yield all([takeLatest(getCategoryAction.request.type, getCategorySaga)]);
}
