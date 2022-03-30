import {
  TChangePasswordBody,
  TChangePasswordResponse,
  TConfirmOtpForgotPasswordBody,
  TConfirmOtpForgotPasswordResponse,
  TForgotPasswordBody,
  TForgotPasswordResponse,
  TGetInfoResponse,
  TLoginBody,
  TLoginResponse,
  TRegisterBody,
  TRegisterResponse,
  TSendOtpBody,
  TSendOtpResponse,
  TUpdateInfoBody,
  TUpdateInfoResponse,
} from '@/services/api/auth-controller/types';
import { EAuthControllerAction } from './constants';

export type TLoginRequest = {
  type: EAuthControllerAction.LOGIN_REQUEST;
  payload: {
    body: TLoginBody;
    cb?: (response: TLoginResponse) => void;
  };
};

export type TLoginSuccess = {
  type: EAuthControllerAction.LOGIN_SUCCESS;
  payload: { response: TLoginResponse };
};

export type TLoginFailed = { type: EAuthControllerAction.LOGIN_FAILED; payload: { error: unknown } };

export type TRegisterRequest = {
  type: EAuthControllerAction.REGISTER_REQUEST;
  payload: {
    body: TRegisterBody;
    cb?: (response: TRegisterResponse) => void;
  };
};

export type TRegisterSuccess = {
  type: EAuthControllerAction.REGISTER_SUCCESS;
  payload: { response: TRegisterResponse };
};

export type TRegisterFailed = { type: EAuthControllerAction.REGISTER_FAILED; payload: { error: unknown } };

export type TSendOtpRequest = {
  type: EAuthControllerAction.SEND_OTP_REQUEST;
  payload: {
    body: TSendOtpBody;
    cb?: (response: TSendOtpResponse) => void;
  };
};

export type TSendOtpSuccess = {
  type: EAuthControllerAction.SEND_OTP_SUCCESS;
  payload: { response: TSendOtpResponse };
};

export type TSendOtpFailed = { type: EAuthControllerAction.SEND_OTP_FAILED; payload: { error: unknown } };

export type TForgotPasswordRequest = {
  type: EAuthControllerAction.FORGOT_PASSWORD_REQUEST;
  payload: {
    body: TForgotPasswordBody;
    cb?: (response: TForgotPasswordResponse) => void;
  };
};

export type TForgotPasswordSuccess = {
  type: EAuthControllerAction.FORGOT_PASSWORD_SUCCESS;
  payload: { response: TForgotPasswordResponse };
};

export type TForgotPasswordFailed = { type: EAuthControllerAction.FORGOT_PASSWORD_FAILED; payload: { error: unknown } };

export type TConfirmOtpForgotPasswordRequest = {
  type: EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_REQUEST;
  payload: {
    body: TConfirmOtpForgotPasswordBody;
    cb?: (response: TConfirmOtpForgotPasswordResponse) => void;
  };
};

export type TConfirmOtpForgotPasswordSuccess = {
  type: EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_SUCCESS;
  payload: { response: TConfirmOtpForgotPasswordResponse };
};

export type TConfirmOtpForgotPasswordFailed = {
  type: EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_FAILED;
  payload: { error: unknown };
};

export type TChangePasswordRequest = {
  type: EAuthControllerAction.CHANGE_PASSWORD_REQUEST;
  payload: {
    body: TChangePasswordBody;
    cb?: (response: TChangePasswordResponse) => void;
  };
};

export type TChangePasswordSuccess = {
  type: EAuthControllerAction.CHANGE_PASSWORD_SUCCESS;
  payload: { response: TChangePasswordResponse };
};

export type TChangePasswordFailed = {
  type: EAuthControllerAction.CHANGE_PASSWORD_FAILED;
  payload: { error: unknown };
};

export type TGetInfoRequest = {
  type: EAuthControllerAction.GET_INFO_REQUEST;
  payload: {
    cb?: (response: TGetInfoResponse) => void;
  };
};

export type TGetInfoSuccess = {
  type: EAuthControllerAction.GET_INFO_SUCCESS;
  payload: { response: TGetInfoResponse };
};

export type TGetInfoFailed = {
  type: EAuthControllerAction.GET_INFO_FAILED;
  payload: { error: unknown };
};

export type TUpdateInfoRequest = {
  type: EAuthControllerAction.UPDATE_INFO_REQUEST;
  payload: {
    body: TUpdateInfoBody;
    cb?: (response: TUpdateInfoResponse) => void;
  };
};

export type TUpdateInfoSuccess = {
  type: EAuthControllerAction.UPDATE_INFO_SUCCESS;
  payload: { response: TUpdateInfoResponse };
};

export type TUpdateInfoFailed = {
  type: EAuthControllerAction.UPDATE_INFO_FAILED;
  payload: { error: unknown };
};
