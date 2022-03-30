import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import { TGetOrderResponse, TGetOrdersResponse, TParamsGetOrders } from '@/services/api/order-controller/types';

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
