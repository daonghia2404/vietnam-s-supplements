export type TParamsGetCategorys = {
  page: number;
  pageSize: number;
};

export type TCategoryResponse = {
  active: boolean;
  createdAt: string;
  id: string;
  image: string;
  isDelete: number;
  name: string;
  slug: string;
  updatedAt: string;
};

export type TGetCategorysResponse = TCategoryResponse[];

export type TGetCategoryResponse = TCategoryResponse;
