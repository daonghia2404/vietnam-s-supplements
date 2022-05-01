import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';
import { TCartResponse } from '@/services/api/cart-controller/types';
import { getCartsLocalStorage, setCartsLocalStorage } from '@/utils/cart';

export enum EDeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}
export interface IUIState {
  device: {
    type: string;
    width: number;
  };
  cartsStorage?: TCartResponse[];
}
const initialState: IUIState = {
  device: {
    type: window.innerWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    width: window.innerWidth,
  },
  cartsStorage: getCartsLocalStorage(),
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      width: payload.deviceWidth,
    },
  })),
  handleAction(uiActions.setCartsStorage, (state, { payload }) => {
    setCartsLocalStorage(payload.data);

    return {
      ...state,
      cartsStorage: payload.data,
    };
  }),
]);

export default reducer;
