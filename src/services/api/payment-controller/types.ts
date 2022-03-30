import { TPaginateResponse } from '@/common/types';

export type TParamsGetPaymentHistorys = {
  page: number;
  pageSize: number;
};

export type TGetPaymentHistorysResponse = TPaginateResponse & {
  records: TPaymentHistoryResponse;
};

export type TPaymentHistoryResponse = any;

export type TGetPaymentHistoryResponse = unknown;

export type TBodyCreatePayment = {
  amount: string;
  bankCode?: string;
  extraData?: string;
  paymentMethod?: string;
};

export type TCreatePaymentResponse = unknown;
