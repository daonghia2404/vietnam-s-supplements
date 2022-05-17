import { createActionCreator } from 'deox';

import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import {
  TCancelOrderResponse,
  TCheckoutOrderBody,
  TCheckoutOrderResponse,
  TCreateOrderBody,
  TCreateOrderResponse,
  TGetOrderResponse,
  TGetOrdersResponse,
  TParamsGetOrders,
} from '@/services/api/order-controller/types';
import {
  TGetOrdersRequest,
  TGetOrdersSuccess,
  TGetOrdersFailed,
  TGetOrderFailed,
  TGetOrderRequest,
  TGetOrderSuccess,
  TCreateOrderFailed,
  TCreateOrderRequest,
  TCreateOrderSuccess,
  TCancelOrderFailed,
  TCancelOrderRequest,
  TCancelOrderSuccess,
  TCheckoutOrderFailed,
  TCheckoutOrderRequest,
  TCheckoutOrderSuccess,
} from '@/redux/actions/order-controller/types';

export const getOrdersAction = {
  request: createActionCreator(
    EOrderControllerAction.GET_ORDERS_REQUEST,
    (resolve) =>
      (params: TParamsGetOrders, cb?: (response: TGetOrdersResponse) => void): TGetOrdersRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EOrderControllerAction.GET_ORDERS_SUCCESS,
    (resolve) =>
      (response: TGetOrdersResponse): TGetOrdersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderControllerAction.GET_ORDERS_FAILED,
    (resolve) =>
      (error: unknown): TGetOrdersFailed =>
        resolve({ error }),
  ),
};

export const getOrderAction = {
  request: createActionCreator(
    EOrderControllerAction.GET_ORDER_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetOrderResponse) => void): TGetOrderRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EOrderControllerAction.GET_ORDER_SUCCESS,
    (resolve) =>
      (response: TGetOrderResponse): TGetOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderControllerAction.GET_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TGetOrderFailed =>
        resolve({ error }),
  ),
};

export const createOrderAction = {
  request: createActionCreator(
    EOrderControllerAction.CREATE_ORDER_REQUEST,
    (resolve) =>
      (body: TCreateOrderBody, cb?: (response: TCreateOrderResponse) => void): TCreateOrderRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EOrderControllerAction.CREATE_ORDER_SUCCESS,
    (resolve) =>
      (response: TCreateOrderResponse): TCreateOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderControllerAction.CREATE_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TCreateOrderFailed =>
        resolve({ error }),
  ),
};
export const checkoutOrderAction = {
  request: createActionCreator(
    EOrderControllerAction.CHECKOUT_ORDER_REQUEST,
    (resolve) =>
      (body: TCheckoutOrderBody, cb?: (response: TCheckoutOrderResponse) => void): TCheckoutOrderRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EOrderControllerAction.CHECKOUT_ORDER_SUCCESS,
    (resolve) =>
      (response: TCheckoutOrderResponse): TCheckoutOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderControllerAction.CHECKOUT_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TCheckoutOrderFailed =>
        resolve({ error }),
  ),
};

export const cancelOrderAction = {
  request: createActionCreator(
    EOrderControllerAction.CANCEL_ORDER_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TCancelOrderResponse) => void): TCancelOrderRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EOrderControllerAction.CANCEL_ORDER_SUCCESS,
    (resolve) =>
      (response: TCancelOrderResponse): TCancelOrderSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EOrderControllerAction.CANCEL_ORDER_FAILED,
    (resolve) =>
      (error: unknown): TCancelOrderFailed =>
        resolve({ error }),
  ),
};
