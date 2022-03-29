import { TPaginateResponse } from '@/common/types';

export type TParamsGetHandbooks = {
  page: number;
  pageSize: number;
};

export type THandbookResponse = {
  id: number;
  title: string;
  image: string;
  content: string;
  description: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TGetHandbooksResponse = TPaginateResponse & {
  records: THandbookResponse[];
};

export type TGetHandbookResponse = THandbookResponse;
