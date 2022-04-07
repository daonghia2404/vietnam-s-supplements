import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import {
  TGetPaymentHistorysResponse,
  TGetPaymentHistoryResponse,
  TParamsGetPaymentHistorys,
  TBodyCreatePayment,
  TCreatePaymentResponse,
  TReturnPaymentResponse,
  TParamsReturnPayment,
} from '@/services/api/payment-controller/types';

export type TGetPaymentHistorysRequest = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORYS_REQUEST;
  payload: {
    params: TParamsGetPaymentHistorys;
    cb?: (response: TGetPaymentHistorysResponse) => void;
  };
};

export type TGetPaymentHistorysSuccess = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORYS_SUCCESS;
  payload: { response: TGetPaymentHistorysResponse };
};

export type TGetPaymentHistorysFailed = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORYS_FAILED;
  payload: { error: unknown };
};

export type TGetPaymentHistoryRequest = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORY_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetPaymentHistoryResponse) => void;
  };
};

export type TGetPaymentHistorySuccess = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORY_SUCCESS;
  payload: { response: TGetPaymentHistoryResponse };
};

export type TGetPaymentHistoryFailed = {
  type: EPaymentControllerAction.GET_PAYMENT_HISTORY_FAILED;
  payload: { error: unknown };
};

export type TReturnPaymentRequest = {
  type: EPaymentControllerAction.RETURN_PAYMENT_REQUEST;
  payload: {
    params: TParamsReturnPayment;
    cb?: (response: TReturnPaymentResponse) => void;
  };
};

export type TReturnPaymentSuccess = {
  type: EPaymentControllerAction.RETURN_PAYMENT_SUCCESS;
  payload: { response: TReturnPaymentResponse };
};

export type TReturnPaymentFailed = {
  type: EPaymentControllerAction.RETURN_PAYMENT_FAILED;
  payload: { error: unknown };
};

export type TCreatePaymentRequest = {
  type: EPaymentControllerAction.CREATE_PAYMENT_REQUEST;
  payload: {
    body: TBodyCreatePayment;
    cb?: (response: TCreatePaymentResponse) => void;
    failedCb?: () => void;
  };
};

export type TCreatePaymentSuccess = {
  type: EPaymentControllerAction.CREATE_PAYMENT_SUCCESS;
  payload: { response: TCreatePaymentResponse };
};

export type TCreatePaymentFailed = {
  type: EPaymentControllerAction.CREATE_PAYMENT_FAILED;
  payload: { error: unknown };
};
