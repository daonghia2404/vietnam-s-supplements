import { createReducer } from 'deox';

import { TGetNewResponse, TGetNewsResponse } from '@/services/api/new-controller/types';
import { getNewAction, getNewsAction } from '@/redux/actions/new-controller';

export interface IUIState {
  news?: TGetNewsResponse;
  new?: TGetNewResponse;
}
const initialState: IUIState = {
  news: undefined,
  new: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getNewsAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      news: response,
    };
  }),
  handleAction(getNewAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      new: response,
    };
  }),
]);

export default reducer;
