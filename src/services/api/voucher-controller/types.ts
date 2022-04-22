import { TPaginateResponse } from '@/common/types';

export type TParamsGetVouchers = {
  page: number;
  pageSize: number;
};

export type TVoucherResponse = {
  active: boolean;
  content: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
  updatedAt: string;
};

export type TGetVouchersResponse = TPaginateResponse & {
  records: TVoucherResponse[];
};

export type TGetVoucherResponse = TVoucherResponse;
