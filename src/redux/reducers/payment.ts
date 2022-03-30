import { createReducer } from 'deox';

import { TGetPaymentHistoryResponse, TGetPaymentHistorysResponse } from '@/services/api/payment-controller/types';
import { getPaymentHistoryAction, getPaymentHistorysAction } from '@/redux/actions/payment-controller';

export interface IUIState {
  paymentHistorys?: TGetPaymentHistorysResponse;
  paymentHistory?: TGetPaymentHistoryResponse;
}
const initialState: IUIState = {
  paymentHistorys: undefined,
  paymentHistory: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getPaymentHistorysAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      payments: response,
    };
  }),
  handleAction(getPaymentHistoryAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      payment: response,
    };
  }),
]);

export default reducer;
