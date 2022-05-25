export type TParamsGetBanners = {
  page: number;
  pageSize: number;
};

export type TBannerResponse = {
  description: string;
  id: string;
  imageUrls: {
    description: string;
    id: string;
    imageUrl: string;
  }[];
  isDelete: boolean;
  label: string;
  type: string;
};

export type TGetBannersResponse = TBannerResponse[];

export type TGetBannerResponse = TBannerResponse;
