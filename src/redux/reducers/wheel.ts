import { createReducer } from 'deox';

import { TGetWheelResponse, TGetWheelsUserResponse } from '@/services/api/wheel-controller/types';
import { getWheelAction, getWheelsUserAction } from '@/redux/actions/wheel-controller';

export interface IUIState {
  wheelsUser?: TGetWheelsUserResponse;
  wheel?: TGetWheelResponse;
}
const initialState: IUIState = {
  wheelsUser: undefined,
  wheel: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getWheelsUserAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      wheelsUser: response,
    };
  }),
  handleAction(getWheelAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      wheel: response,
    };
  }),
]);

export default reducer;
