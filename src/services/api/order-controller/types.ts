import { TPaginateResponse } from '@/common/types';
import { EOrderStatus } from '@/services/api/order-controller/enums';

export type TParamsGetOrders = {
  page: number;
  pageSize: number;
  status: EOrderStatus;
};

export type TOrderResponse = any;

export type TGetOrdersResponse = TPaginateResponse & {
  records: TOrderResponse[];
};

export type TGetOrderResponse = TOrderResponse;
