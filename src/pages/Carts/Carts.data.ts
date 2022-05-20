import { EOrderPayment } from '@/services/api/order-controller/enums';

export const dataPaymentMethodOptions = [
  { label: 'Thanh toán khi nhận hàng', value: EOrderPayment.SHIP_COD },
  { label: 'Thanh toán trực tiếp (qua cổng thanh toán Appota)', value: EOrderPayment.WALLET },
];
