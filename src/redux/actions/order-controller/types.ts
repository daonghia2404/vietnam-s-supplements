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

export type TGetOrdersRequest = {
  type: EOrderControllerAction.GET_ORDERS_REQUEST;
  payload: {
    params: TParamsGetOrders;
    cb?: (response: TGetOrdersResponse) => void;
  };
};

export type TGetOrdersSuccess = {
  type: EOrderControllerAction.GET_ORDERS_SUCCESS;
  payload: { response: TGetOrdersResponse };
};

export type TGetOrdersFailed = { type: EOrderControllerAction.GET_ORDERS_FAILED; payload: { error: unknown } };

export type TGetOrderRequest = {
  type: EOrderControllerAction.GET_ORDER_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetOrderResponse) => void;
  };
};

export type TGetOrderSuccess = {
  type: EOrderControllerAction.GET_ORDER_SUCCESS;
  payload: { response: TGetOrderResponse };
};

export type TGetOrderFailed = { type: EOrderControllerAction.GET_ORDER_FAILED; payload: { error: unknown } };

export type TCreateOrderRequest = {
  type: EOrderControllerAction.CREATE_ORDER_REQUEST;
  payload: {
    body: TCreateOrderBody;
    cb?: (response: TCreateOrderResponse) => void;
  };
};

export type TCreateOrderSuccess = {
  type: EOrderControllerAction.CREATE_ORDER_SUCCESS;
  payload: { response: TCreateOrderResponse };
};

export type TCreateOrderFailed = { type: EOrderControllerAction.CREATE_ORDER_FAILED; payload: { error: unknown } };

export type TCheckoutOrderRequest = {
  type: EOrderControllerAction.CHECKOUT_ORDER_REQUEST;
  payload: {
    body: TCheckoutOrderBody;
    cb?: (response: TCheckoutOrderResponse) => void;
  };
};

export type TCheckoutOrderSuccess = {
  type: EOrderControllerAction.CHECKOUT_ORDER_SUCCESS;
  payload: { response: TCheckoutOrderResponse };
};

export type TCheckoutOrderFailed = { type: EOrderControllerAction.CHECKOUT_ORDER_FAILED; payload: { error: unknown } };

export type TCancelOrderRequest = {
  type: EOrderControllerAction.CANCEL_ORDER_REQUEST;
  payload: {
    id: string;
    cb?: (response: TCancelOrderResponse) => void;
  };
};

export type TCancelOrderSuccess = {
  type: EOrderControllerAction.CANCEL_ORDER_SUCCESS;
  payload: { response: TCancelOrderResponse };
};

export type TCancelOrderFailed = { type: EOrderControllerAction.CANCEL_ORDER_FAILED; payload: { error: unknown } };
