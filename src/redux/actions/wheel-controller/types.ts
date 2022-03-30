import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import {
  TGetHistoryWheelResponse,
  TGetWheelResponse,
  TGetWheelsUserResponse,
  TParamsGetHistoryWheel,
  TParamsGetWheelsUser,
} from '@/services/api/wheel-controller/types';

export type TGetWheelsRequest = {
  type: EWheelControllerAction.GET_WHEELS_USER_REQUEST;
  payload: {
    params: TParamsGetWheelsUser;
    cb?: (response: TGetWheelsUserResponse) => void;
  };
};

export type TGetWheelsSuccess = {
  type: EWheelControllerAction.GET_WHEELS_USER_SUCCESS;
  payload: { response: TGetWheelsUserResponse };
};

export type TGetWheelsFailed = { type: EWheelControllerAction.GET_WHEELS_USER_FAILED; payload: { error: unknown } };

export type TGetWheelRequest = {
  type: EWheelControllerAction.GET_WHEEL_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetWheelResponse) => void;
  };
};

export type TGetWheelSuccess = {
  type: EWheelControllerAction.GET_WHEEL_SUCCESS;
  payload: { response: TGetWheelResponse };
};

export type TGetWheelFailed = { type: EWheelControllerAction.GET_WHEEL_FAILED; payload: { error: unknown } };

export type TGetHistoryWheelRequest = {
  type: EWheelControllerAction.GET_HISTORY_WHEEL_REQUEST;
  payload: {
    params: TParamsGetHistoryWheel;
    cb?: (response: TGetHistoryWheelResponse) => void;
  };
};

export type TGetHistoryWheelSuccess = {
  type: EWheelControllerAction.GET_HISTORY_WHEEL_SUCCESS;
  payload: { response: TGetHistoryWheelResponse };
};

export type TGetHistoryWheelFailed = {
  type: EWheelControllerAction.GET_HISTORY_WHEEL_FAILED;
  payload: { error: unknown };
};
