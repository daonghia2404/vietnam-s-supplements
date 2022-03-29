import { createReducer } from 'deox';

import { TGetPackPtOnlineResponse, TGetPackPtOnlinesResponse } from '@/services/api/pack-pt-online-controller/types';
import { getPackPtOnlineAction, getPackPtOnlinesAction } from '@/redux/actions/pack-pt-online-controller';

export interface IUIState {
  packPtOnlines?: TGetPackPtOnlinesResponse;
  packPtOnline?: TGetPackPtOnlineResponse;
}
const initialState: IUIState = {
  packPtOnlines: undefined,
  packPtOnline: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getPackPtOnlinesAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packPtOnlines: response,
    };
  }),
  handleAction(getPackPtOnlineAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packPtOnline: response,
    };
  }),
]);

export default reducer;
