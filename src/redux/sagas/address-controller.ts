import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/address-controller';
import { getAddressAction } from '@/redux/actions/address-controller';
import { TGetAddressResponse } from '@/services/api/address-controller/types';

export function* getAddressSaga(action: ActionType<typeof getAddressAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getAddress, params)) as TGetAddressResponse;

    yield put(getAddressAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAddressAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getAddressAction.request.type, getAddressSaga)]);
}
