import { EOrderStatus } from '@/services/api/order-controller/enums';

export const cartFilterTabOptions = [
  { label: 'Tất cả', value: EOrderStatus.NULL },
  { color: 'warning', label: 'Chờ xác nhận', value: EOrderStatus.PENDING },
  { color: 'hightlight', label: 'Đang giao', value: EOrderStatus.INPROCESS },
  { color: 'success', label: 'Hoàn thành', value: EOrderStatus.SUCCESS },
  { color: 'error', label: 'Đã huỷ', value: EOrderStatus.REJECT },
];
