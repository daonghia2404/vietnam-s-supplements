import { TProductResponse } from '@/services/api/product-controller/types';

export type TProductsCarouselProps = {
  title?: string;
  data?: TProductResponse[];
};
