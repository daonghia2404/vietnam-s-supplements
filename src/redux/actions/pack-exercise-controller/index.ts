import { createActionCreator } from 'deox';

import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import {
  TGetPackExerciseResponse,
  TGetPackExercisesResponse,
  TParamsGetPackExercises,
} from '@/services/api/pack-exercise-controller/types';
import {
  TGetPackExercisesRequest,
  TGetPackExercisesSuccess,
  TGetPackExercisesFailed,
  TGetPackExerciseFailed,
  TGetPackExerciseRequest,
  TGetPackExerciseSuccess,
} from '@/redux/actions/pack-exercise-controller/types';

export const getPackExercisesAction = {
  request: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_REQUEST,
    (resolve) =>
      (params: TParamsGetPackExercises, cb?: (response: TGetPackExercisesResponse) => void): TGetPackExercisesRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_SUCCESS,
    (resolve) =>
      (response: TGetPackExercisesResponse): TGetPackExercisesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_FAILED,
    (resolve) =>
      (error: unknown): TGetPackExercisesFailed =>
        resolve({ error }),
  ),
};

export const getPackExerciseAction = {
  request: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISE_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetPackExerciseResponse) => void): TGetPackExerciseRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISE_SUCCESS,
    (resolve) =>
      (response: TGetPackExerciseResponse): TGetPackExerciseSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISE_FAILED,
    (resolve) =>
      (error: unknown): TGetPackExerciseFailed =>
        resolve({ error }),
  ),
};
