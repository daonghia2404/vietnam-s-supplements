import { TPaginateResponse } from '@/common/types';
import { TCategoryResponse } from '@/services/api/category-controller/types';

export type TParamsGetProductsFavorite = {
  page: number;
  pageSize: number;
  categoryId: string | null;
};
export type TGetProductsFavoriteResponse = TPaginateResponse & {
  records: any;
};

export type TParamsGetProducts = {
  categoryId?: string;
  page: number;
  pageSize: number;
  name?: string;
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
  imageCertificateUrl: string;
  isUseMedicineAfterEat: string;
  name: string;
  noteUseMedicine: string;
  numberUse: string;
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
