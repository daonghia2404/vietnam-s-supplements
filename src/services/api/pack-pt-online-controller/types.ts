import { TPaginateResponse } from '@/common/types';

export type TParamsGetPackPtOnlines = {
  page: number;
  pageSize: number;
};

export type TPackPtOnlineResponse = {
  name: string;
  description: string;
  image: string;
  numberDate: number;
  prePrice: number;
  price: number;
  point: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TGetPackPtOnlinesResponse = TPaginateResponse & {
  records: TPackPtOnlineResponse[];
};

export type TGetPackPtOnlineResponse = TPackPtOnlineResponse;

export type TBuyPackPtOnlineResponse = unknown;
