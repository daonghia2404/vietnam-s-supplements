import { TPaginateResponse } from '@/common/types';

export type TParamsGetBanners = {
  page: number;
  pageSize: number;
};

export type TBannerResponse = {
  active: boolean;
  content: string;
  createdAt: string;
  description: string;
  id: number;
  image: string;
  title: string;
  updatedAt: string;
};

export type TGetBannersResponse = TPaginateResponse & {
  records: TBannerResponse[];
};

export type TGetBannerResponse = TBannerResponse;
