import { TPaginateResponse } from '@/common/types';

export type TParamsGetHandbooks = {
  page: number;
  pageSize: number;
};

export type THandbookResponse = {
  active: boolean;
  content: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
  updatedAt: string;
};

export type TGetHandbooksResponse = TPaginateResponse & {
  records: THandbookResponse[];
};

export type TGetHandbookResponse = THandbookResponse;
