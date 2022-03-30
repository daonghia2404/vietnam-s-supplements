import { createReducer } from 'deox';

import { TGetBonusResponse, TGetHistoryPointsResponse } from '@/services/api/rank-controller/types';
import { getBonusAction, getHistoryPointsAction } from '@/redux/actions';

export interface IUIState {
  historyPoints?: TGetHistoryPointsResponse;
  bonus?: TGetBonusResponse;
}
const initialState: IUIState = {
  historyPoints: undefined,
  bonus: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getHistoryPointsAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      historyPoints: response,
    };
  }),
  handleAction(getBonusAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      bonus: response,
    };
  }),
]);

export default reducer;
