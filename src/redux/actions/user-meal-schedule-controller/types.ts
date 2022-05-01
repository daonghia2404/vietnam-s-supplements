import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';
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

export type TGetUserMealScheduleRequest = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_REQUEST;
  payload: {
    cb?: (response: TGetUserMealScheduleResponse) => void;
  };
};

export type TGetUserMealScheduleSuccess = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_SUCCESS;
  payload: { response: TGetUserMealScheduleResponse };
};

export type TGetUserMealScheduleFailed = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FAILED;
  payload: { error: unknown };
};

export type TGetUserMealScheduleByDateRequest = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_REQUEST;
  payload: {
    date: string;
    cb?: (response: TGetUserMealScheduleByDateResponse) => void;
  };
};

export type TGetUserMealScheduleByDateSuccess = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_SUCCESS;
  payload: { response: TGetUserMealScheduleByDateResponse };
};

export type TGetUserMealScheduleByDateFailed = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_BY_DATE_FAILED;
  payload: { error: unknown };
};

export type TGetUserMealScheduleFromTodayRequest = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_REQUEST;
  payload: {
    params: TGetUserMealScheduleFromTodayParams;
    cb?: (response: TGetUserMealScheduleFromTodayResponse) => void;
  };
};

export type TGetUserMealScheduleFromTodaySuccess = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_SUCCESS;
  payload: { response: TGetUserMealScheduleFromTodayResponse };
};

export type TGetUserMealScheduleFromTodayFailed = {
  type: EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE_FROM_TODAY_FAILED;
  payload: { error: unknown };
};

export type TCreateUserMealScheduleRequest = {
  type: EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_REQUEST;
  payload: {
    body: TBodyCreateUserMealSchedule;
    cb?: (response: TCreateUserMealScheduleResponse) => void;
    failedCb?: () => void;
  };
};

export type TCreateUserMealScheduleSuccess = {
  type: EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_SUCCESS;
  payload: { response: TCreateUserMealScheduleResponse };
};

export type TCreateUserMealScheduleFailed = {
  type: EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE_FAILED;
  payload: { error: unknown };
};

export type TCreateUserInfoBodyRequest = {
  type: EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_REQUEST;
  payload: {
    body: TBodyCreateUserInfoBody;
    cb?: (response: TCreateUserInfoBodyResponse) => void;
    failedCb?: () => void;
  };
};

export type TCreateUserInfoBodySuccess = {
  type: EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_SUCCESS;
  payload: { response: TCreateUserInfoBodyResponse };
};

export type TCreateUserInfoBodyFailed = {
  type: EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY_FAILED;
  payload: { error: unknown };
};
