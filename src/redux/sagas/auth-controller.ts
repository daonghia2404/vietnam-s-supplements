import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import authHelpers from '@/services/helpers';
import AuthControllerInstance from '@/services/api/auth-controller';
import {
  changePasswordAction,
  forgotPasswordAction,
  loginAction,
  registerAction,
  sendOtpAction,
} from '@/redux/actions';
import {
  TChangePasswordResponse,
  TForgotPasswordResponse,
  TLoginResponse,
  TRegisterResponse,
  TSendOtpResponse,
} from '@/services/api/auth-controller/types';

export function* loginSaga(action: ActionType<typeof loginAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.login, body)) as TLoginResponse;

    authHelpers.storeAccessToken(response.token);
    authHelpers.storeRefreshToken(response.refreshToken);

    yield put(loginAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}

export function* registerSaga(action: ActionType<typeof registerAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.register, body)) as TRegisterResponse;

    yield put(registerAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(registerAction.failure(err));
  }
}

export function* sendOtpSaga(action: ActionType<typeof sendOtpAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.sendOtp, body)) as TSendOtpResponse;

    yield put(sendOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(sendOtpAction.failure(err));
  }
}

export function* forgotPasswordSaga(action: ActionType<typeof forgotPasswordAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.forgotPassword, body)) as TForgotPasswordResponse;

    yield put(forgotPasswordAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(forgotPasswordAction.failure(err));
  }
}

export function* changePasswordSaga(action: ActionType<typeof changePasswordAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(AuthControllerInstance.changePassword, body)) as TChangePasswordResponse;

    yield put(changePasswordAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(changePasswordAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(sendOtpAction.request.type, sendOtpSaga)]);
  yield all([takeLatest(forgotPasswordAction.request.type, forgotPasswordSaga)]);
  yield all([takeLatest(changePasswordAction.request.type, changePasswordSaga)]);
}
