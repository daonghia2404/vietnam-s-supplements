import { createActionCreator } from 'deox';

import { TCartResponse } from '@/services/api/cart-controller/types';

import { EUIAction } from './constants';
import { TResetActionStatus, TSetCartsStorage, TSetDevice } from './types';

export const uiActions = {
  setDevice: createActionCreator(
    EUIAction.SET_DEVICE,
    (resolve) =>
      (deviceWidth: number): TSetDevice =>
        resolve({ deviceWidth }),
  ),
  resetActionStatus: createActionCreator(
    EUIAction.RESET_ACTION_STATUS,
    (resolve) =>
      (actionName: string): TResetActionStatus =>
        resolve({ actionName: actionName.replace('_REQUEST', '') }),
  ),
  setCartsStorage: createActionCreator(
    EUIAction.SET_CARTS_STORAGE,
    (resolve) =>
      (data: TCartResponse[]): TSetCartsStorage =>
        resolve({ data }),
  ),
};
