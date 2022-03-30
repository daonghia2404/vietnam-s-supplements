import { TPaginateResponse } from '@/common/types';

export type TParamsGetProductsFavorite = {
  page: number;
  pageSize: number;
  categoryId: string | null;
};
export type TGetProductsFavoriteResponse = TPaginateResponse & {
  records: any;
};
