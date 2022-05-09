import { v4 as uuidv4 } from 'uuid';
import { ETypeNotification } from '@/common/enums';
import { TCartResponse } from '@/services/api/cart-controller/types';
import { showNotification } from '@/utils/functions';

const KEY_STORAGE = 'karaCarts';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const parseCartData = (data: any): any => {
  return {
    id: uuidv4(),
    amount: data.amount,
    dateEndEat: data.dateEndEat,
    dateStartEat: data.dateStartEat,
    price: Number(data.product.price) * Number(data.amount),
    product: data.product,
  };
};

export const handleDeleteCartLocalStorage = (carts: TCartResponse[], id: string): TCartResponse[] => {
  showNotification(ETypeNotification.SUCCESS, 'Xóa sản phẩm khỏi giỏ hàng thành công');
  return carts.filter((item) => item.id !== id);
};

export const handleChangeAmountCartLocalStorage = (
  carts: TCartResponse[],
  id: string,
  amount: number,
): TCartResponse[] => {
  return carts.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        amount,
      };
    }

    return item;
  });
};

export const handleAddNewCartLocalStorage = (carts: TCartResponse[], newItem: TCartResponse): TCartResponse[] => {
  const isItemExistedInCarts = carts.find((item) => item.product.id === newItem.product.id);

  if (isItemExistedInCarts) {
    showNotification(ETypeNotification.ERROR, 'Sản phẩm đã tồn tại trong giỏ hàng');
    return carts;
  }

  showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
  return [...carts, newItem];
};

export const getCartsLocalStorage = (): TCartResponse[] => {
  const data = localStorage.getItem(KEY_STORAGE);
  return data ? JSON.parse(data) : [];
};

export const setCartsLocalStorage = (data: TCartResponse[]): void => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
};

export const syncCartsLocalStorageAndCartsDatabase = (
  cartsStorage: TCartResponse[],
  cartsDatabase: TCartResponse[],
): TCartResponse[] => {
  const existedProductsInCartsDatabase = cartsDatabase.map((item) => item.product.id);

  return cartsStorage.filter((item) => !existedProductsInCartsDatabase.includes(item.product.id));
};
