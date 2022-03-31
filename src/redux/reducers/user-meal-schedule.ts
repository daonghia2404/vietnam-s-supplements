import { createReducer } from 'deox';

import {
  TGetUserMealScheduleByDateResponse,
  TGetUserMealScheduleResponse,
} from '@/services/api/user-meal-schedule-controller/types';
import {
  getUserMealScheduleAction,
  getUserMealScheduleByDateAction,
} from '@/redux/actions/user-meal-schedule-controller';

export interface IUIState {
  userMealSchedule?: TGetUserMealScheduleResponse;
  userMealScheduleByDate?: TGetUserMealScheduleByDateResponse;
}
const initialState: IUIState = {
  userMealSchedule: undefined,
  userMealScheduleByDate: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getUserMealScheduleAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      userMealSchedules: response,
    };
  }),
  handleAction(getUserMealScheduleByDateAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      userMealScheduleByDate: response,
    };
  }),
]);

export default reducer;
