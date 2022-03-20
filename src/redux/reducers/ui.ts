import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';

const initialState = {};

const reducer = createReducer(initialState, (handleAction) => [
  // handleAction(uiActions.setDevice, (state, { payload }) => ({
  //   ...state,
  //   device: {
  //     type: getDeviceType(),
  //     width: payload.deviceWidth,
  //   },
  // })),
]);

export default reducer;
