import { createReducer } from 'deox';

import { TGetAddressResponse } from '@/services/api/address-controller/types';
import { getAddressAction } from '@/redux/actions/address-controller';

export interface IUIState {
  address?: TGetAddressResponse;
}
const initialState: IUIState = {
  address: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getAddressAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      address: response,
    };
  }),
]);

export default reducer;
