import { createActionCreator } from 'deox';

import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import { TGetOrderResponse, TGetOrdersResponse, TParamsGetOrders } from '@/services/api/order-controller/types';
import {
  TGetOrdersRequest,
  TGetOrdersSuccess,
  TGetOrdersFailed,
  TGetOrderFailed,
  TGetOrderRequest,
  TGetOrderSuccess,
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
