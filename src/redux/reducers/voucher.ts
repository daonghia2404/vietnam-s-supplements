import { createReducer } from 'deox';

import { TGetVoucherResponse, TGetVouchersResponse } from '@/services/api/voucher-controller/types';
import { getVoucherAction, getVouchersAction } from '@/redux/actions/voucher-controller';

export interface IUIState {
  vouchers?: TGetVouchersResponse;
  voucher?: TGetVoucherResponse;
}
const initialState: IUIState = {
  vouchers: undefined,
  voucher: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getVouchersAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      vouchers: response,
    };
  }),
  handleAction(getVoucherAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      voucher: response,
    };
  }),
]);

export default reducer;
