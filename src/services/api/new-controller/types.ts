import { TPaginateResponse } from '@/common/types';

export type TParamsGetNews = {
  page: number;
  pageSize: number;
};

export type TNewResponse = {
  active: boolean;
  content: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
  updatedAt: string;
};

export type TGetNewsResponse = TPaginateResponse & {
  records: TNewResponse[];
};

export type TGetNewResponse = TNewResponse;
