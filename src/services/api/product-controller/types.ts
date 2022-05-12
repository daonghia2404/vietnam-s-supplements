import { TPaginateResponse } from '@/common/types';
import { TCategoryResponse } from '@/services/api/category-controller/types';
import { ESortField, ESortType } from '@/services/api/product-controller/enums';

export type TParamsGetProductsFavorite = {
  page: number;
  pageSize: number;
  categoryId?: string | null;
};
export type TGetProductsFavoriteResponse = TPaginateResponse & {
  records: TProductResponse[];
};

export type TParamsGetProducts = {
  categoryId?: string;
  page: number;
  pageSize: number;
  name?: string;
  filter?: string;
  sortField?: ESortField;
  sortType?: ESortType;
};

export type TGetProductsResponse = TPaginateResponse & {
  records: TProductResponse[];
};

export type TProductResponse = {
  amount: number;
  category: TCategoryResponse;
  certificateUrl: string;
  createdAt: string;
  description: string;
  element: string;
  id: string;
  image: string;
  imageMkt?: string;
  imageCertificateUrl: string;
  isUseMedicineAfterEat: string;
  name: string;
  noteUseMedicine: string;
  numberUse: string;
  costPrice?: number;
  point: number;
  price: number;
  productElement: TProductObject[];
  productObject: TProductObject[];
  sale: string;
  slug: string;
  status: string;
  takeMedicine: string;
  timeToUse: string;
  timeUse: string;
  titleCertificate: string;
  type: string;
  unit: string;
  updatedAt: string;
  videoUrl: string;
  dateStartEat: string;
  dateEndEat: string;
};

export type TProductObject = {
  id: string;
  name: string;
  details: string;
};

export type TGetProductResponse = TProductResponse;

export type TLikeProductResponse = unknown;
export type TUnlikeProductResponse = unknown;
export type TIsFavoriteProductResponse = {
  message: boolean;
};
