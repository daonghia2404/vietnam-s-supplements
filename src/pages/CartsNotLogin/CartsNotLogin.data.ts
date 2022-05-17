import { EOrderPayment } from '@/services/api/order-controller/enums';

export const dataPaymentMethodOptions = [
  { label: 'Thanh toán khi nhận hàng', value: EOrderPayment.SHIP_COD },
  { label: 'Ví Vnsupplement', value: EOrderPayment.WALLET },
];
