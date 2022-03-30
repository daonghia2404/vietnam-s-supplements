import { createActionCreator } from 'deox';

import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import {
  TGetHistoryWheelResponse,
  TGetWheelResponse,
  TGetWheelsUserResponse,
  TParamsGetHistoryWheel,
  TParamsGetWheelsUser,
} from '@/services/api/wheel-controller/types';
import {
  TGetWheelsRequest,
  TGetWheelsSuccess,
  TGetWheelsFailed,
  TGetWheelFailed,
  TGetWheelRequest,
  TGetWheelSuccess,
  TGetHistoryWheelFailed,
  TGetHistoryWheelRequest,
  TGetHistoryWheelSuccess,
} from '@/redux/actions/wheel-controller/types';

export const getWheelsUserAction = {
  request: createActionCreator(
    EWheelControllerAction.GET_WHEELS_USER_REQUEST,
    (resolve) =>
      (params: TParamsGetWheelsUser, cb?: (response: TGetWheelsUserResponse) => void): TGetWheelsRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EWheelControllerAction.GET_WHEELS_USER_SUCCESS,
    (resolve) =>
      (response: TGetWheelsUserResponse): TGetWheelsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EWheelControllerAction.GET_WHEELS_USER_FAILED,
    (resolve) =>
      (error: unknown): TGetWheelsFailed =>
        resolve({ error }),
  ),
};

export const getWheelAction = {
  request: createActionCreator(
    EWheelControllerAction.GET_WHEEL_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetWheelResponse) => void): TGetWheelRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EWheelControllerAction.GET_WHEEL_SUCCESS,
    (resolve) =>
      (response: TGetWheelResponse): TGetWheelSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EWheelControllerAction.GET_WHEEL_FAILED,
    (resolve) =>
      (error: unknown): TGetWheelFailed =>
        resolve({ error }),
  ),
};

export const getHisotryWheelAction = {
  request: createActionCreator(
    EWheelControllerAction.GET_HISTORY_WHEEL_REQUEST,
    (resolve) =>
      (params: TParamsGetHistoryWheel, cb?: (response: TGetHistoryWheelResponse) => void): TGetHistoryWheelRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EWheelControllerAction.GET_HISTORY_WHEEL_SUCCESS,
    (resolve) =>
      (response: TGetHistoryWheelResponse): TGetHistoryWheelSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EWheelControllerAction.GET_HISTORY_WHEEL_FAILED,
    (resolve) =>
      (error: unknown): TGetHistoryWheelFailed =>
        resolve({ error }),
  ),
};
