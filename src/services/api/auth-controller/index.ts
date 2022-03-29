import Service from '@/services/api';
import {
  TChangePasswordBody,
  TChangePasswordResponse,
  TConfirmOtpForgotPasswordBody,
  TConfirmOtpForgotPasswordResponse,
  TForgotPasswordBody,
  TForgotPasswordResponse,
  TLoginBody,
  TLoginResponse,
  TRefreshTokenBody,
  TRefreshTokenResponse,
  TRegisterBody,
  TRegisterResponse,
  TSendOtpBody,
  TSendOtpResponse,
} from '@/services/api/auth-controller/types';

class Controller {
  login = async (body: TLoginBody): Promise<TLoginResponse> => {
    const response = await Service.post('/auth/login', body);
    return response.data;
  };

  register = async (body: TRegisterBody): Promise<TRegisterResponse> => {
    const response = await Service.post('/auth/register', body);
    return response.data;
  };

  refreshToken = async (body: TRefreshTokenBody): Promise<TRefreshTokenResponse> => {
    const response = await Service.post('/auth/refresh-token', body);
    return response.data;
  };

  forgotPassword = async (body: TForgotPasswordBody): Promise<TForgotPasswordResponse> => {
    const response = await Service.post('/auth/forgot-password', body);
    return response.data;
  };

  confirmOtpForgotPassword = async (
    body: TConfirmOtpForgotPasswordBody,
  ): Promise<TConfirmOtpForgotPasswordResponse> => {
    const response = await Service.post('/auth/confirm-otp-forgot-password', body);
    return response.data;
  };

  changePassword = async (body: TChangePasswordBody): Promise<TChangePasswordResponse> => {
    const response = await Service.post('/auth/change-password', body);
    return response.data;
  };

  sendOtp = async (body: TSendOtpBody): Promise<TSendOtpResponse> => {
    const response = await Service.post('/auth/send-otp', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
