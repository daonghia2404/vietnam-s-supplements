import { createReducer } from 'deox';

import { TGetHandbookResponse, TGetHandbooksResponse } from '@/services/api/handbook-controller/types';
import { getHandbookAction, getHandbooksAction } from '@/redux/actions/handbook-controller';

export interface IUIState {
  handbooks?: TGetHandbooksResponse;
  handbook?: TGetHandbookResponse;
}
const initialState: IUIState = {
  handbooks: undefined,
  handbook: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getHandbooksAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      handbooks: response,
    };
  }),
  handleAction(getHandbookAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      handbook: response,
    };
  }),
]);

export default reducer;
