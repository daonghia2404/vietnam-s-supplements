import { createReducer } from 'deox';

import { TGetPackExerciseResponse, TGetPackExercisesResponse } from '@/services/api/pack-exercise-controller/types';
import { getPackExerciseAction, getPackExercisesAction } from '@/redux/actions/pack-exercise-controller';

export interface IUIState {
  packExercises?: TGetPackExercisesResponse;
  packExercise?: TGetPackExerciseResponse;
}
const initialState: IUIState = {
  packExercises: undefined,
  packExercise: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getPackExercisesAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packExercises: response,
    };
  }),
  handleAction(getPackExerciseAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packExercise: response,
    };
  }),
]);

export default reducer;
