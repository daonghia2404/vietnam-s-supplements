import { createReducer } from 'deox';

import {
  TGetPaymentHistoryResponse,
  TGetPaymentHistorysResponse,
  TReturnPaymentResponse,
} from '@/services/api/payment-controller/types';
import {
  getPaymentHistoryAction,
  getPaymentHistorysAction,
  returnPaymentAction,
} from '@/redux/actions/payment-controller';

export interface IUIState {
  paymentHistorys?: TGetPaymentHistorysResponse;
  paymentHistory?: TGetPaymentHistoryResponse;
  returnPayment?: TReturnPaymentResponse;
}
const initialState: IUIState = {
  paymentHistorys: undefined,
  paymentHistory: undefined,
  returnPayment: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getPaymentHistorysAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      paymentHistorys: response,
    };
  }),
  handleAction(getPaymentHistoryAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      paymentHistory: response,
    };
  }),
  handleAction(returnPaymentAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      returnPayment: response,
    };
  }),
]);

export default reducer;
