import { createActionCreator } from 'deox';

import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import {
  TBodyBuyPackExercise,
  TBuyPackExerciseResponse,
  TGetPackExerciseResponse,
  TGetPackExercisesBoughtResponse,
  TGetPackExercisesResponse,
  TParamsGetPackExercises,
  TParamsGetPackExercisesBought,
} from '@/services/api/pack-exercise-controller/types';
import {
  TGetPackExercisesRequest,
  TGetPackExercisesSuccess,
  TGetPackExercisesFailed,
  TGetPackExerciseFailed,
  TGetPackExerciseRequest,
  TGetPackExerciseSuccess,
  TGetPackExercisesBoughtFailed,
  TGetPackExercisesBoughtRequest,
  TGetPackExercisesBoughtSuccess,
  TBuyPackExerciseFailed,
  TBuyPackExerciseRequest,
  TBuyPackExerciseSuccess,
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

export const getPackExercisesBoughtAction = {
  request: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_REQUEST,
    (resolve) =>
      (
        params: TParamsGetPackExercisesBought,
        cb?: (response: TGetPackExercisesBoughtResponse) => void,
      ): TGetPackExercisesBoughtRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_SUCCESS,
    (resolve) =>
      (response: TGetPackExercisesBoughtResponse): TGetPackExercisesBoughtSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_FAILED,
    (resolve) =>
      (error: unknown): TGetPackExercisesBoughtFailed =>
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

export const buyPackExerciseAction = {
  request: createActionCreator(
    EPackExerciseControllerAction.BUY_PACK_EXERCISE_REQUEST,
    (resolve) =>
      (
        body: TBodyBuyPackExercise,
        cb?: (response: TBuyPackExerciseResponse) => void,
        failedCb?: () => void,
      ): TBuyPackExerciseRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EPackExerciseControllerAction.BUY_PACK_EXERCISE_SUCCESS,
    (resolve) =>
      (response: TBuyPackExerciseResponse): TBuyPackExerciseSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackExerciseControllerAction.BUY_PACK_EXERCISE_FAILED,
    (resolve) =>
      (error: unknown): TBuyPackExerciseFailed =>
        resolve({ error }),
  ),
};
