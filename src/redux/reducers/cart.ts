import { createReducer } from 'deox';

import { getCartAction } from '@/redux/actions';
import { TGetCartResponse } from '@/services/api/cart-controller/types';

export interface IUIState {
  cart?: TGetCartResponse;
}
const initialState: IUIState = {
  cart: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getCartAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      cart: response,
    };
  }),
]);

export default reducer;
