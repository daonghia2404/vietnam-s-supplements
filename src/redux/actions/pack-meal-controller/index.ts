import { createActionCreator } from 'deox';

import { EPackMealControllerAction } from '@/redux/actions/pack-meal-controller/constants';
import {
  TBodyBuyPackMeal,
  TBuyPackMealResponse,
  TGetPackMealResponse,
  TGetPackMealsResponse,
  TParamsGetPackMeals,
} from '@/services/api/pack-meal-controller/types';
import {
  TGetPackMealsRequest,
  TGetPackMealsSuccess,
  TGetPackMealsFailed,
  TGetPackMealFailed,
  TGetPackMealRequest,
  TGetPackMealSuccess,
  TBuyPackMealFailed,
  TBuyPackMealRequest,
  TBuyPackMealSuccess,
} from '@/redux/actions/pack-meal-controller/types';

export const getPackMealsAction = {
  request: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEALS_REQUEST,
    (resolve) =>
      (params: TParamsGetPackMeals, cb?: (response: TGetPackMealsResponse) => void): TGetPackMealsRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEALS_SUCCESS,
    (resolve) =>
      (response: TGetPackMealsResponse): TGetPackMealsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEALS_FAILED,
    (resolve) =>
      (error: unknown): TGetPackMealsFailed =>
        resolve({ error }),
  ),
};

export const getPackMealAction = {
  request: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEAL_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetPackMealResponse) => void): TGetPackMealRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEAL_SUCCESS,
    (resolve) =>
      (response: TGetPackMealResponse): TGetPackMealSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackMealControllerAction.GET_PACK_MEAL_FAILED,
    (resolve) =>
      (error: unknown): TGetPackMealFailed =>
        resolve({ error }),
  ),
};

export const buyPackMealAction = {
  request: createActionCreator(
    EPackMealControllerAction.BUY_PACK_MEAL_REQUEST,
    (resolve) =>
      (
        body: TBodyBuyPackMeal,
        cb?: (response: TBuyPackMealResponse) => void,
        failedCb?: () => void,
      ): TBuyPackMealRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EPackMealControllerAction.BUY_PACK_MEAL_SUCCESS,
    (resolve) =>
      (response: TBuyPackMealResponse): TBuyPackMealSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackMealControllerAction.BUY_PACK_MEAL_FAILED,
    (resolve) =>
      (error: unknown): TBuyPackMealFailed =>
        resolve({ error }),
  ),
};
