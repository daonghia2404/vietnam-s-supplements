import { createReducer } from 'deox';

import { getInfoAction } from '@/redux/actions';
import { TGetInfoResponse } from '@/services/api/auth-controller/types';

export interface IUIState {
  user?: TGetInfoResponse;
}
const initialState: IUIState = {
  user: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getInfoAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      user: response,
    };
  }),
]);

export default reducer;
