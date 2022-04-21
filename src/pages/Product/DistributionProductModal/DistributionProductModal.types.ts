import { TProductResponse } from '@/services/api/product-controller/types';

export type TDistributionProductModalProps = {
  visible: boolean;
  data?: TProductResponse;
  onClose?: () => void;
};
