export enum EAuthControllerAction {
  LOGIN = 'LOGIN',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILED = 'LOGIN_FAILED',

  REGISTER = 'REGISTER',
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILED = 'REGISTER_FAILED',

  SEND_OTP = 'SEND_OTP',
  SEND_OTP_REQUEST = 'SEND_OTP_REQUEST',
  SEND_OTP_SUCCESS = 'SEND_OTP_SUCCESS',
  SEND_OTP_FAILED = 'SEND_OTP_FAILED',

  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED',

  CONFIRM_OTP_FORGOT_PASSWORD = 'CONFIRM_OTP_FORGOT_PASSWORD',
  CONFIRM_OTP_FORGOT_PASSWORD_REQUEST = 'CONFIRM_OTP_FORGOT_PASSWORD_REQUEST',
  CONFIRM_OTP_FORGOT_PASSWORD_SUCCESS = 'CONFIRM_OTP_FORGOT_PASSWORD_SUCCESS',
  CONFIRM_OTP_FORGOT_PASSWORD_FAILED = 'CONFIRM_OTP_FORGOT_PASSWORD_FAILED',

  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED',

  GET_INFO = 'GET_INFO',
  GET_INFO_REQUEST = 'GET_INFO_REQUEST',
  GET_INFO_SUCCESS = 'GET_INFO_SUCCESS',
  GET_INFO_FAILED = 'GET_INFO_FAILED',

  UPDATE_INFO = 'UPDATE_INFO',
  UPDATE_INFO_REQUEST = 'UPDATE_INFO_REQUEST',
  UPDATE_INFO_SUCCESS = 'UPDATE_INFO_SUCCESS',
  UPDATE_INFO_FAILED = 'UPDATE_INFO_FAILED',
}
