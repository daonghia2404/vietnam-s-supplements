import { createReducer } from 'deox';

import {
  TGetHistoryWheelResponse,
  TGetWheelResponse,
  TGetWheelsUserResponse,
} from '@/services/api/wheel-controller/types';
import { getHisotryWheelAction, getWheelAction, getWheelsUserAction } from '@/redux/actions/wheel-controller';

export interface IUIState {
  wheelsUser?: TGetWheelsUserResponse;
  wheel?: TGetWheelResponse;
  historyWheel?: TGetHistoryWheelResponse;
}
const initialState: IUIState = {
  wheelsUser: undefined,
  wheel: undefined,
  historyWheel: undefined,
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
  handleAction(getHisotryWheelAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      historyWheel: response,
    };
  }),
]);

export default reducer;
