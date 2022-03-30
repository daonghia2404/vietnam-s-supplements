import { ERole, ETypeSendOTP } from '@/services/api/auth-controller/enums';

export type TLoginBody = {
  phone: string;
  password: string;
};
export type TLoginResponse = {
  token: string;
  refreshToken: string;
  id: string;
  fullName: string;
  avatar: string;
  email: string;
  role: ERole;
};
export type TRefreshTokenBody = {
  token: string;
};
export type TRefreshTokenResponse = {
  token: string;
};

export type TRegisterBody = {
  password: string;
  phone: string;
  code: string;
  inviteCode?: string;
};

export type TRegisterResponse = {
  message: string;
};

export type TSendOtpBody = {
  phone: string;
  type: ETypeSendOTP;
};

export type TSendOtpResponse = {
  phone: string;
  code: string;
};

export type TForgotPasswordBody = {
  phone: string;
  code: string;
  password: string;
};

export type TForgotPasswordResponse = {
  message: string;
};

export type TConfirmOtpForgotPasswordBody = {
  code: string;
  phone: string;
};

export type TConfirmOtpForgotPasswordResponse = {
  code: string;
  phone: string;
};

export type TChangePasswordBody = {
  password: string;
  newPassword: string;
};

export type TChangePasswordResponse = {
  message: string;
};

export type TGetInfoResponse = {
  address: string;
  avatar: string;
  backIdCard: string;
  birthday: string;
  city: string;
  district: string;
  email: string;
  frontIdCard: string;
  fullName: string;
  id: string;
  infoBody: unknown;
  money: number;
  phone: string;
  rank: number;
  referralCode: string;
  role: ERole;
  score: number;
  userInviteId: unknown;
  userType: unknown;
};

export type TUpdateInfoBody = {
  fullName: string;
  avatar: string;
  address: string;
  city: string;
  district: string;
  backIdCard: string;
  frontIdCard: string;
  birthday?: string;
  email: string;
};

export type TUpdateInfoResponse = { message: string };
