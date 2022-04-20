import { TPaginateResponse } from '@/common/types';

export type TParamsGetCategorys = {
  page: number;
  pageSize: number;
};

export type TCategoryResponse = {
  active: boolean;
  content: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
  updatedAt: string;
};

export type TGetCategorysResponse = TPaginateResponse & {
  records: TCategoryResponse[];
};

export type TGetCategoryResponse = TCategoryResponse;
