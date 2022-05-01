import { TCartResponse } from '@/services/api/cart-controller/types';
import { EUIAction } from './constants';

export type TSetDevice = { type: EUIAction.SET_DEVICE; payload: { deviceWidth: number } };
export type TSetCartsStorage = { type: EUIAction.SET_CARTS_STORAGE; payload: { data: TCartResponse[] } };
export type TResetActionStatus = { type: EUIAction.RESET_ACTION_STATUS };
