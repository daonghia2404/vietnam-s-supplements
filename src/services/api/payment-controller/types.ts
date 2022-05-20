import { TPaginateResponse } from '@/common/types';
import { EPaymentStatus } from '@/services/api/payment-controller/enums';

export type TParamsGetPaymentHistorys = {
  page: number;
  pageSize: number;
};

export type TGetPaymentHistorysResponse = TPaginateResponse & {
  records: TPaymentHistoryResponse[];
};

export type TPaymentHistoryResponse = {
  appotapayTransId: string;
  createdAt: string;
  errrorCode: string;
  extraData: string;
  id: string;
  money: number;
  status: EPaymentStatus;
  transactionTs: string;
};

export type TGetPaymentHistoryResponse = {
  appotapayTransId: string;
  createdAt: string;
  errorCode: string;
  extraData: string;
  money: number;
  status: string;
  transactionTs: string;
};

export type TBodyCreatePayment = {
  amount: string;
  bankCode?: string;
  extraData?: string;
  paymentMethod?: string;
};

export type TCreatePaymentResponse = {
  amount: number;
  errorCode: number;
  message: string;
  orderId: string;
  paymentUrl: string;
  signature: string;
};

export type TParamsReturnPayment = {
  amount: string;
  currency: string;
  orderId: string;
  bankCode: string;
  paymentMethod: string;
  paymentType: string;
  appotapayTransId: string;
  errorCode: string;
  message: string;
  transactionTs: string;
  extraData: string;
};

export type TReturnPaymentResponse = unknown;
