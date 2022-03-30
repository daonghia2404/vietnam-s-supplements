import { createReducer } from 'deox';

import { getTurnWheelUserAction } from '@/redux/actions';

export interface IUIState {
  turnNumber: number;
}
const initialState: IUIState = {
  turnNumber: 0,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getTurnWheelUserAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      turnNumber: response.turnNumber,
    };
  }),
  handleAction(getTurnWheelUserAction.failure, (state) => {
    return {
      ...state,
      turnNumber: 0,
    };
  }),
]);

export default reducer;
