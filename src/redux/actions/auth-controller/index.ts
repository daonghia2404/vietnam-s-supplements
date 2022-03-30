import { createActionCreator } from 'deox';

import {
  TChangePasswordFailed,
  TChangePasswordRequest,
  TChangePasswordSuccess,
  TConfirmOtpForgotPasswordFailed,
  TConfirmOtpForgotPasswordRequest,
  TConfirmOtpForgotPasswordSuccess,
  TForgotPasswordFailed,
  TForgotPasswordRequest,
  TForgotPasswordSuccess,
  TGetInfoFailed,
  TGetInfoRequest,
  TGetInfoSuccess,
  TLoginFailed,
  TLoginRequest,
  TLoginSuccess,
  TRegisterFailed,
  TRegisterRequest,
  TRegisterSuccess,
  TSendOtpFailed,
  TSendOtpRequest,
  TSendOtpSuccess,
  TUpdateInfoFailed,
  TUpdateInfoRequest,
  TUpdateInfoSuccess,
} from '@/redux/actions/auth-controller/types';
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

export const loginAction = {
  request: createActionCreator(
    EAuthControllerAction.LOGIN_REQUEST,
    (resolve) =>
      (body: TLoginBody, cb?: (response: TLoginResponse) => void): TLoginRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.LOGIN_SUCCESS,
    (resolve) =>
      (response: TLoginResponse): TLoginSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.LOGIN_FAILED,
    (resolve) =>
      (error: unknown): TLoginFailed =>
        resolve({ error }),
  ),
};

export const registerAction = {
  request: createActionCreator(
    EAuthControllerAction.REGISTER_REQUEST,
    (resolve) =>
      (body: TRegisterBody, cb?: (response: TRegisterResponse) => void): TRegisterRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.REGISTER_SUCCESS,
    (resolve) =>
      (response: TRegisterResponse): TRegisterSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.REGISTER_FAILED,
    (resolve) =>
      (error: unknown): TRegisterFailed =>
        resolve({ error }),
  ),
};

export const sendOtpAction = {
  request: createActionCreator(
    EAuthControllerAction.SEND_OTP_REQUEST,
    (resolve) =>
      (body: TSendOtpBody, cb?: (response: TSendOtpResponse) => void): TSendOtpRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.SEND_OTP_SUCCESS,
    (resolve) =>
      (response: TSendOtpResponse): TSendOtpSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.SEND_OTP_FAILED,
    (resolve) =>
      (error: unknown): TSendOtpFailed =>
        resolve({ error }),
  ),
};

export const forgotPasswordAction = {
  request: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_REQUEST,
    (resolve) =>
      (body: TForgotPasswordBody, cb?: (response: TForgotPasswordResponse) => void): TForgotPasswordRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TForgotPasswordResponse): TForgotPasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.FORGOT_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TForgotPasswordFailed =>
        resolve({ error }),
  ),
};

export const confirmOtpForgotPasswordAction = {
  request: createActionCreator(
    EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_REQUEST,
    (resolve) =>
      (
        body: TConfirmOtpForgotPasswordBody,
        cb?: (response: TConfirmOtpForgotPasswordResponse) => void,
      ): TConfirmOtpForgotPasswordRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TConfirmOtpForgotPasswordResponse): TConfirmOtpForgotPasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TConfirmOtpForgotPasswordFailed =>
        resolve({ error }),
  ),
};

export const changePasswordAction = {
  request: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_REQUEST,
    (resolve) =>
      (body: TChangePasswordBody, cb?: (response: TChangePasswordResponse) => void): TChangePasswordRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_SUCCESS,
    (resolve) =>
      (response: TChangePasswordResponse): TChangePasswordSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.CHANGE_PASSWORD_FAILED,
    (resolve) =>
      (error: unknown): TChangePasswordFailed =>
        resolve({ error }),
  ),
};

export const getInfoAction = {
  request: createActionCreator(
    EAuthControllerAction.GET_INFO_REQUEST,
    (resolve) =>
      (cb?: (response: TGetInfoResponse) => void): TGetInfoRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.GET_INFO_SUCCESS,
    (resolve) =>
      (response: TGetInfoResponse): TGetInfoSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.GET_INFO_FAILED,
    (resolve) =>
      (error: unknown): TGetInfoFailed =>
        resolve({ error }),
  ),
};

export const updateInfoAction = {
  request: createActionCreator(
    EAuthControllerAction.UPDATE_INFO_REQUEST,
    (resolve) =>
      (body: TUpdateInfoBody, cb?: (response: TUpdateInfoResponse) => void): TUpdateInfoRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAuthControllerAction.UPDATE_INFO_SUCCESS,
    (resolve) =>
      (response: TUpdateInfoResponse): TUpdateInfoSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EAuthControllerAction.UPDATE_INFO_FAILED,
    (resolve) =>
      (error: unknown): TUpdateInfoFailed =>
        resolve({ error }),
  ),
};
