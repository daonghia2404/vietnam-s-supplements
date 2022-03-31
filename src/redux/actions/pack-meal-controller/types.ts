import { EPackMealControllerAction } from '@/redux/actions/pack-meal-controller/constants';
import {
  TBodyBuyPackMeal,
  TBuyPackMealResponse,
  TGetPackMealResponse,
  TGetPackMealsResponse,
  TParamsGetPackMeals,
} from '@/services/api/pack-meal-controller/types';

export type TGetPackMealsRequest = {
  type: EPackMealControllerAction.GET_PACK_MEALS_REQUEST;
  payload: {
    params: TParamsGetPackMeals;
    cb?: (response: TGetPackMealsResponse) => void;
  };
};

export type TGetPackMealsSuccess = {
  type: EPackMealControllerAction.GET_PACK_MEALS_SUCCESS;
  payload: { response: TGetPackMealsResponse };
};

export type TGetPackMealsFailed = {
  type: EPackMealControllerAction.GET_PACK_MEALS_FAILED;
  payload: { error: unknown };
};

export type TGetPackMealRequest = {
  type: EPackMealControllerAction.GET_PACK_MEAL_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetPackMealResponse) => void;
  };
};

export type TGetPackMealSuccess = {
  type: EPackMealControllerAction.GET_PACK_MEAL_SUCCESS;
  payload: { response: TGetPackMealResponse };
};

export type TGetPackMealFailed = {
  type: EPackMealControllerAction.GET_PACK_MEAL_FAILED;
  payload: { error: unknown };
};

export type TBuyPackMealRequest = {
  type: EPackMealControllerAction.BUY_PACK_MEAL_REQUEST;
  payload: {
    body: TBodyBuyPackMeal;
    cb?: (response: TBuyPackMealResponse) => void;
    failedCb?: () => void;
  };
};

export type TBuyPackMealSuccess = {
  type: EPackMealControllerAction.BUY_PACK_MEAL_SUCCESS;
  payload: { response: TBuyPackMealResponse };
};

export type TBuyPackMealFailed = {
  type: EPackMealControllerAction.BUY_PACK_MEAL_FAILED;
  payload: { error: unknown };
};
