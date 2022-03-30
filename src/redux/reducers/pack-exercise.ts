import { createReducer } from 'deox';

import {
  TGetPackExerciseResponse,
  TGetPackExercisesBoughtResponse,
  TGetPackExercisesResponse,
} from '@/services/api/pack-exercise-controller/types';
import {
  getPackExerciseAction,
  getPackExercisesAction,
  getPackExercisesBoughtAction,
} from '@/redux/actions/pack-exercise-controller';

export interface IUIState {
  packExercises?: TGetPackExercisesResponse;
  packExercisesBought?: TGetPackExercisesBoughtResponse;
  packExercise?: TGetPackExerciseResponse;
}
const initialState: IUIState = {
  packExercises: undefined,
  packExercisesBought: undefined,
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
  handleAction(getPackExercisesBoughtAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      packExercisesBought: response,
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
