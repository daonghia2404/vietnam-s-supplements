import { createActionCreator } from 'deox';

import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';
import {
  TGetUserMealScheduleRequest,
  TGetUserMealScheduleSuccess,
  TGetUserMealScheduleFailed,
  TGetUserMealScheduleByDateFailed,
  TGetUserMealScheduleByDateRequest,
  TGetUserMealScheduleByDateSuccess,
  TCreateUserMealScheduleFailed,
  TCreateUserMealScheduleRequest,
  TCreateUserMealScheduleSuccess,
  TCreateUserInfoBodyFailed,
  TCreateUserInfoBodyRequest,
  TCreateUserInfoBodySuccess,
  TGetUserMealScheduleFromTodayFailed,
  TGetUserMealScheduleFromTodayRequest,
  TGetUserMealScheduleFromTodaySuccess,
} from '@/redux/actions/user-meal-schedule-controller/types';
import {
  TBodyCreateUserInfoBody,
  TBodyCreateUserMealSchedule,
  TCreateUserInfoBodyResponse,
  TCreateUserMealScheduleResponse,
  TGetUserMealScheduleByDateResponse,
  TGetUserMealScheduleFromTodayParams,
  TGetUserMealScheduleFromTodayResponse,
  TGetUserMealScheduleResponse,
} from '@/services/api/user-meal-schedule-controller/types';

export const getUserMealScheduleAction = {
  request: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_REQUEST,
    (resolve) =>
      (cb?: (response: TGetUserMealScheduleResponse) => void): TGetUserMealScheduleRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_SUCCESS,
    (resolve) =>
      (response: TGetUserMealScheduleResponse): TGetUserMealScheduleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FAILED,
    (resolve) =>
      (error: unknown): TGetUserMealScheduleFailed =>
        resolve({ error }),
  ),
};

export const getUserMealScheduleByDateAction = {
  request: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_REQUEST,
    (resolve) =>
      (date: string, cb?: (response: TGetUserMealScheduleByDateResponse) => void): TGetUserMealScheduleByDateRequest =>
        resolve({ date, cb }),
  ),
  success: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_SUCCESS,
    (resolve) =>
      (response: TGetUserMealScheduleByDateResponse): TGetUserMealScheduleByDateSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_FAILED,
    (resolve) =>
      (error: unknown): TGetUserMealScheduleByDateFailed =>
        resolve({ error }),
  ),
};

export const getUserMealScheduleFromTodayAction = {
  request: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_REQUEST,
    (resolve) =>
      (
        params: TGetUserMealScheduleFromTodayParams,
        cb?: (response: TGetUserMealScheduleFromTodayResponse) => void,
      ): TGetUserMealScheduleFromTodayRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_SUCCESS,
    (resolve) =>
      (response: TGetUserMealScheduleFromTodayResponse): TGetUserMealScheduleFromTodaySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_FAILED,
    (resolve) =>
      (error: unknown): TGetUserMealScheduleFromTodayFailed =>
        resolve({ error }),
  ),
};

export const createUserMealScheduleAction = {
  request: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_REQUEST,
    (resolve) =>
      (
        body: TBodyCreateUserMealSchedule,
        cb?: (response: TCreateUserMealScheduleResponse) => void,
        failedCb?: () => void,
      ): TCreateUserMealScheduleRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_SUCCESS,
    (resolve) =>
      (response: TCreateUserMealScheduleResponse): TCreateUserMealScheduleSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_FAILED,
    (resolve) =>
      (error: unknown): TCreateUserMealScheduleFailed =>
        resolve({ error }),
  ),
};

export const createUserInfoBodyAction = {
  request: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_REQUEST,
    (resolve) =>
      (
        body: TBodyCreateUserInfoBody,
        cb?: (response: TCreateUserInfoBodyResponse) => void,
        failedCb?: () => void,
      ): TCreateUserInfoBodyRequest =>
        resolve({ body, cb, failedCb }),
  ),
  success: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_SUCCESS,
    (resolve) =>
      (response: TCreateUserInfoBodyResponse): TCreateUserInfoBodySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_FAILED,
    (resolve) =>
      (error: unknown): TCreateUserInfoBodyFailed =>
        resolve({ error }),
  ),
};
