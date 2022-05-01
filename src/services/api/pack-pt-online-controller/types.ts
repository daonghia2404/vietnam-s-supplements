import { TPaginateResponse } from '@/common/types';

export type TParamsGetPackPtOnlines = {
  page: number;
  pageSize: number;
};

export type TPackPtOnlineResponse = {
  active: boolean;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  numberDate: number;
  point: number;
  prePrice: number;
  price: number;
  updatedAt: string;
};

export type TGetPackPtOnlinesResponse = TPaginateResponse & {
  records: TPackPtOnlineResponse[];
};

export type TGetPackPtOnlineResponse = TPackPtOnlineResponse;

export type TBuyPackPtOnlineResponse = unknown;
