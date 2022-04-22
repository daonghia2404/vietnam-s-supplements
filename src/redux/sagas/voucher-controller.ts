import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/voucher-controller';
import { getVoucherAction, getVouchersAction } from '@/redux/actions/voucher-controller';
import { TGetVoucherResponse, TGetVouchersResponse } from '@/services/api/voucher-controller/types';

export function* getVouchersSaga(action: ActionType<typeof getVouchersAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getVouchers, params)) as TGetVouchersResponse;

    yield put(getVouchersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getVouchersAction.failure(err));
  }
}
export function* getVoucherSaga(action: ActionType<typeof getVoucherAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getVoucher, id)) as TGetVoucherResponse;

    yield put(getVoucherAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getVoucherAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getVouchersAction.request.type, getVouchersSaga)]);
  yield all([takeLatest(getVoucherAction.request.type, getVoucherSaga)]);
}
