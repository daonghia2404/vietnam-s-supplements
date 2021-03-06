import { createActionCreator } from 'deox';

import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import {
  TGetPaymentHistorysRequest,
  TGetPaymentHistorysSuccess,
  TGetPaymentHistorysFailed,
  TGetPaymentHistoryRequest,
  TGetPaymentHistorySuccess,
  TGetPaymentHistoryFailed,
  TCreatePaymentFailed,
  TCreatePaymentRequest,
  TCreatePaymentSuccess,
  TReturnPaymentFailed,
  TReturnPaymentRequest,
  TReturnPaymentSuccess,
  TCreatePaymentOrderFailed,
  TCreatePaymentOrderRequest,
  TCreatePaymentOrderSuccess,
} from '@/redux/actions/payment-controller/types';
import {
  TParamsGetPaymentHistorys,
  TGetPaymentHistorysResponse,
  TGetPaymentHistoryResponse,
  TBodyCreatePayment,
  TCreatePaymentResponse,
  TParamsReturnPayment,
  TReturnPaymentResponse,
} from '@/services/api/payment-controller/types';

export const getPaymentHistorysAction = {
  request: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORYS_REQUEST,
    (resolve) =>
      (
        params: TParamsGetPaymentHistorys,
        cb?: (response: TGetPaymentHistorysResponse) => void,
      ): TGetPaymentHistorysRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORYS_SUCCESS,
    (resolve) =>
      (response: TGetPaymentHistorysResponse): TGetPaymentHistorysSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORYS_FAILED,
    (resolve) =>
      (error: unknown): TGetPaymentHistorysFailed =>
        resolve({ error }),
  ),
};

export const getPaymentHistoryAction = {
  request: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORY_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetPaymentHistoryResponse) => void): TGetPaymentHistoryRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORY_SUCCESS,
    (resolve) =>
      (response: TGetPaymentHistoryResponse): TGetPaymentHistorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPaymentControllerAction.GET_PAYMENT_HISTORY_FAILED,
    (resolve) =>
      (error: unknown): TGetPaymentHistoryFailed =>
        resolve({ error }),
  ),
};

export const returnPaymentAction = {
  request: createActionCreator(
    EPaymentControllerAction.RETURN_PAYMENT_REQUEST,
    (resolve) =>
      (params: TParamsReturnPayment, cb?: (response: TReturnPaymentResponse) => void): TReturnPaymentRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPaymentControllerAction.RETURN_PAYMENT_SUCCESS,
    (resolve) =>
      (response: TReturnPaymentResponse): TReturnPaymentSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPaymentControllerAction.RETURN_PAYMENT_FAILED,
    (resolve) =>
      (error: unknown): TReturnPaymentFailed =>
        resolve({ error }),
  ),
};

export const createPaymentAction = {
  request: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_REQUEST,
    (resolve) =>
      (
        body: TBodyCreatePayment,
        cb?: (response: TCreatePaymentResponse) => void,
        failedCb?: () => void,
      ): TCreatePaymentRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_SUCCESS,
    (resolve) =>
      (response: TCreatePaymentResponse): TCreatePaymentSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_FAILED,
    (resolve) =>
      (error: unknown): TCreatePaymentFailed =>
        resolve({ error }),
  ),
};

export const createPaymentOrderAction = {
  request: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_ORDER_REQUEST,
    (resolve) =>
      (
        body: TBodyCreatePayment,
        cb?: (response: TCreatePaymentResponse) => void,
        failedCb?: () => void,
      ): TCreatePaymentOrderRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_ORDER_SUCCESS,
    (resolve) =>
      (response: TCreatePaymentResponse): TCreatePaymentOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPaymentControllerAction.CREATE_PAYMENT_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TCreatePaymentOrderFailed =>
        resolve({ error }),
  ),
};
