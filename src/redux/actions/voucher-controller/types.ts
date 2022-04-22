import { EVoucherControllerAction } from '@/redux/actions/voucher-controller/constants';
import { TGetVoucherResponse, TGetVouchersResponse, TParamsGetVouchers } from '@/services/api/voucher-controller/types';

export type TGetVouchersRequest = {
  type: EVoucherControllerAction.GET_VOUCHERS_REQUEST;
  payload: {
    params: TParamsGetVouchers;
    cb?: (response: TGetVouchersResponse) => void;
  };
};

export type TGetVouchersSuccess = {
  type: EVoucherControllerAction.GET_VOUCHERS_SUCCESS;
  payload: { response: TGetVouchersResponse };
};

export type TGetVouchersFailed = { type: EVoucherControllerAction.GET_VOUCHERS_FAILED; payload: { error: unknown } };

export type TGetVoucherRequest = {
  type: EVoucherControllerAction.GET_VOUCHER_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetVoucherResponse) => void;
  };
};

export type TGetVoucherSuccess = {
  type: EVoucherControllerAction.GET_VOUCHER_SUCCESS;
  payload: { response: TGetVoucherResponse };
};

export type TGetVoucherFailed = { type: EVoucherControllerAction.GET_VOUCHER_FAILED; payload: { error: unknown } };
