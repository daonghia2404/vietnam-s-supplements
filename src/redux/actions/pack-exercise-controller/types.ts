import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import {
  TGetPackExerciseResponse,
  TGetPackExercisesBoughtResponse,
  TGetPackExercisesResponse,
  TParamsGetPackExercises,
  TParamsGetPackExercisesBought,
} from '@/services/api/pack-exercise-controller/types';

export type TGetPackExercisesRequest = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_REQUEST;
  payload: {
    params: TParamsGetPackExercises;
    cb?: (response: TGetPackExercisesResponse) => void;
  };
};

export type TGetPackExercisesSuccess = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_SUCCESS;
  payload: { response: TGetPackExercisesResponse };
};

export type TGetPackExercisesFailed = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_FAILED;
  payload: { error: unknown };
};

export type TGetPackExercisesBoughtRequest = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_REQUEST;
  payload: {
    params: TParamsGetPackExercisesBought;
    cb?: (response: TGetPackExercisesBoughtResponse) => void;
  };
};

export type TGetPackExercisesBoughtSuccess = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_SUCCESS;
  payload: { response: TGetPackExercisesBoughtResponse };
};

export type TGetPackExercisesBoughtFailed = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT_FAILED;
  payload: { error: unknown };
};

export type TGetPackExerciseRequest = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISE_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetPackExerciseResponse) => void;
  };
};

export type TGetPackExerciseSuccess = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISE_SUCCESS;
  payload: { response: TGetPackExerciseResponse };
};

export type TGetPackExerciseFailed = {
  type: EPackExerciseControllerAction.GET_PACK_EXERCISE_FAILED;
  payload: { error: unknown };
};
