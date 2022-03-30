import { EOrderStatus } from '@/services/api/order-controller/enums';

export const cartFilterTabOptions = [
  { label: 'Tất cả', value: EOrderStatus.NULL },
  { label: 'Chờ xác nhận', value: EOrderStatus.PENDING },
  { label: 'Đang giao', value: EOrderStatus.INPROCESS },
  { label: 'Hoàn thành', value: EOrderStatus.SUCCESS },
  { label: 'Đã huỷ', value: EOrderStatus.REJECT },
];
