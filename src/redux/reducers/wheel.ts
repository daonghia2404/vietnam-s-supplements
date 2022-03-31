import { createReducer } from 'deox';

import {
  TGetHistoryWheelResponse,
  TGetWheelResponse,
  TGetWheelsUserResponse,
  TStartWheelResponse,
} from '@/services/api/wheel-controller/types';
import {
  getHisotryWheelAction,
  getWheelAction,
  getWheelsUserAction,
  startWheelAction,
} from '@/redux/actions/wheel-controller';

export interface IUIState {
  wheelsUser?: TGetWheelsUserResponse;
  wheel?: TGetWheelResponse;
  historyWheel?: TGetHistoryWheelResponse;
  startWheel?: TStartWheelResponse;
}
const initialState: IUIState = {
  wheelsUser: undefined,
  wheel: undefined,
  historyWheel: undefined,
  startWheel: undefined,
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
  handleAction(startWheelAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      startWheel: response,
    };
  }),
]);

export default reducer;
