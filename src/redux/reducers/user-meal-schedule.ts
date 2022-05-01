import { createReducer } from 'deox';

import {
  TGetUserMealScheduleByDateResponse,
  TGetUserMealScheduleFromTodayResponse,
  TGetUserMealScheduleResponse,
} from '@/services/api/user-meal-schedule-controller/types';
import {
  getUserMealScheduleAction,
  getUserMealScheduleByDateAction,
  getUserMealScheduleFromTodayAction,
} from '@/redux/actions/user-meal-schedule-controller';

export interface IUIState {
  userMealSchedule?: TGetUserMealScheduleResponse;
  userMealScheduleByDate?: TGetUserMealScheduleByDateResponse;
  userMealScheduleFromToday?: TGetUserMealScheduleFromTodayResponse;
}
const initialState: IUIState = {
  userMealSchedule: undefined,
  userMealScheduleByDate: undefined,
  userMealScheduleFromToday: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getUserMealScheduleAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      userMealSchedule: response,
    };
  }),
  handleAction(getUserMealScheduleByDateAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      userMealScheduleByDate: response,
    };
  }),
  handleAction(getUserMealScheduleFromTodayAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      userMealScheduleFromToday: response,
    };
  }),
]);

export default reducer;
