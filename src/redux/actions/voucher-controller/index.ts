import { createActionCreator } from 'deox';

import { EVoucherControllerAction } from '@/redux/actions/voucher-controller/constants';
import { TGetVoucherResponse, TGetVouchersResponse, TParamsGetVouchers } from '@/services/api/voucher-controller/types';
import {
  TGetVouchersRequest,
  TGetVouchersSuccess,
  TGetVouchersFailed,
  TGetVoucherFailed,
  TGetVoucherRequest,
  TGetVoucherSuccess,
} from '@/redux/actions/voucher-controller/types';

export const getVouchersAction = {
  request: createActionCreator(
    EVoucherControllerAction.GET_VOUCHERS_REQUEST,
    (resolve) =>
      (params: TParamsGetVouchers, cb?: (response: TGetVouchersResponse) => void): TGetVouchersRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EVoucherControllerAction.GET_VOUCHERS_SUCCESS,
    (resolve) =>
      (response: TGetVouchersResponse): TGetVouchersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EVoucherControllerAction.GET_VOUCHERS_FAILED,
    (resolve) =>
      (error: unknown): TGetVouchersFailed =>
        resolve({ error }),
  ),
};

export const getVoucherAction = {
  request: createActionCreator(
    EVoucherControllerAction.GET_VOUCHER_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetVoucherResponse) => void): TGetVoucherRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EVoucherControllerAction.GET_VOUCHER_SUCCESS,
    (resolve) =>
      (response: TGetVoucherResponse): TGetVoucherSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EVoucherControllerAction.GET_VOUCHER_FAILED,
    (resolve) =>
      (error: unknown): TGetVoucherFailed =>
        resolve({ error }),
  ),
};
