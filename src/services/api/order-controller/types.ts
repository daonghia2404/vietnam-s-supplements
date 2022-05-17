import { TPaginateResponse } from '@/common/types';
import { TCartResponse } from '@/services/api/cart-controller/types';
import { EOrderStatus } from '@/services/api/order-controller/enums';

export type TParamsGetOrders = {
  page: number;
  pageSize: number;
  status?: EOrderStatus;
};

export type TOrderResponse = {
  address: string;
  amount: number;
  city: string;
  cart?: TCartOrder;
  createdAt: string;
  district: string;
  id: string;
  idCardBackCard: string;
  idCardFontCard: string;
  namereceiver: string;
  orderCode: string;
  phone: string;
  point: number;
  referCode: string;
  status: string;
  totalprice: number;
  type: string;
  typePayment: string;
  updatedAt: string;
};

export type TGetOrdersResponse = TPaginateResponse & {
  records: TOrderResponse[];
};

export type TGetOrderResponse = TOrderResponse;

export type TCreateOrderBody = {
  typePayment: string;
  referCode: string;
  idCardBackCard: string;
  idCardFontCard: string;
  address: string;
  phoneRevicer: string;
  nameReceiver: string;
  district: string;
  city: string;
};

export type TCreateOrderResponse = unknown;

export type TCartOrder = {
  discount: number;
  id: string;
  items: TCartResponse[];
  totalprice: number;
};

export type TCancelOrderResponse = unknown;

export type TCheckoutOrderBody = {
  cartId: string;
  typePayment: string;
  referCode?: string;
  address: string;
  phoneReceiver: string;
  nameReceiver: string;
  district: string;
  city: string;
  phone: string;
  nameUser: string;
  email: string;
  addressReceiver: string;
  districtReceiver: string;
  cityReceiver: string;
  note: string;
};

export type TCheckoutOrderResponse = unknown;
