import { TProductResponse } from '@/services/api/product-controller/types';

export type TGetCartResponse = {
  cart: TCartResponse[];
  discount: number;
  price_cart: number;
  total_price_cart: number;
  totol_quaity: number;
};
export type TBodyAddCart = {
  product: string;
  amount: number;
  dateStartEat?: string;
  dateEndEat?: string;
};
export type TCartResponse = {
  amount: number;
  dateEndEat: string;
  dateStartEat: string;
  id: string;
  price: string;
  product: TProductResponse;
  status: number;
};
export type TAddCartResponse = unknown;
export type TBodyPatchCart = {
  product?: string;
  amount?: number;
  dateStartEat?: string;
  dateEndEat?: string;
};
export type TPatchCartResponse = unknown;
export type TDeleteCartResponse = unknown;

export type TCreateCartBody = {
  cart: {
    cart: {
      product: TProductResponse;
      amount: number;
    }[];
  };
};
export type TCreateCartResponse = {
  id: string;
  totalprice: number;
};
