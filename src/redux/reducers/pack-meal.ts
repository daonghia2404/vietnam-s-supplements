import { createReducer } from 'deox';

import { TGetPackMealResponse, TGetPackMealsResponse } from '@/services/api/pack-meal-controller/types';
import { getPackMealAction, getPackMealsAction } from '@/redux/actions/pack-meal-controller';

export interface IUIState {
  packMeals?: TGetPackMealsResponse;
  packMeal?: TGetPackMealResponse;
}
const initialState: IUIState = {
  packMeals: undefined,
  packMeal: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getPackMealsAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packMeals: response,
    };
  }),
  handleAction(getPackMealAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packMeal: response,
    };
  }),
]);

export default reducer;
