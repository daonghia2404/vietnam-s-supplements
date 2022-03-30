import { createReducer } from 'deox';

import { TGetOrderResponse, TGetOrdersResponse } from '@/services/api/order-controller/types';
import { getOrderAction, getOrdersAction } from '@/redux/actions/order-controller';

export interface IUIState {
  orders?: TGetOrdersResponse;
  order?: TGetOrderResponse;
}
const initialState: IUIState = {
  orders: undefined,
  order: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getOrdersAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      orders: response,
    };
  }),
  handleAction(getOrderAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      order: response,
    };
  }),
]);

export default reducer;
