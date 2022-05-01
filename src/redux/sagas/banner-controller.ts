import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/banner-controller';
import { getBannerAction, getBannersAction } from '@/redux/actions/banner-controller';
import { TGetBannerResponse, TGetBannersResponse } from '@/services/api/banner-controller/types';

export function* getBannersSaga(action: ActionType<typeof getBannersAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(Instance.getBanners)) as TGetBannersResponse;

    yield put(getBannersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannersAction.failure(err));
  }
}
export function* getBannerSaga(action: ActionType<typeof getBannerAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getBanner, id)) as TGetBannerResponse;

    yield put(getBannerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannerAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getBannersAction.request.type, getBannersSaga)]);
  yield all([takeLatest(getBannerAction.request.type, getBannerSaga)]);
}
