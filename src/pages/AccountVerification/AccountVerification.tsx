import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { navigate, useLocation } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import CountdownTime from '@/components/CountdownTime';
import { confirmOtpForgotPasswordAction, registerAction, sendOtpAction } from '@/redux/actions';
import { LayoutPaths, Paths } from '@/pages/routers';
import { ETypeNotification } from '@/common/enums';
import { ETypeSendOTP } from '@/services/api/auth-controller/enums';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { TRootState } from '@/redux/reducers';

import './AccountVerification.scss';

const AccountVerification: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location: any = useLocation();
  const dataLocationState = location?.state;

  const registerLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.REGISTER]);
  const confirmOtpForgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.CONFIRM_OTP_FORGOT_PASSWORD],
  );

  const loading = registerLoading || confirmOtpForgotPasswordLoading;

  const [countdownState, setCountdownState] = useState<{
    isEnd: boolean;
  }>({
    isEnd: false,
  });

  const handleSubmit = (values: any): void => {
    const body = {
      ...dataLocationState.body,
      code: values.code,
    };

    switch (dataLocationState.type) {
      case ETypeSendOTP.REGISTER:
        dispatch(registerAction.request(body, handleRegisterSuccess));
        break;
      case ETypeSendOTP.FORGOT_PASSWORD:
        dispatch(confirmOtpForgotPasswordAction.request(body, (): void => handleConfirmOtpForgotPasswordSuccess(body)));
        break;

      default:
        break;
    }
  };

  const handleConfirmOtpForgotPasswordSuccess = (body: { code: string; phone: string }): void => {
    navigate(`${LayoutPaths.Auth}${Paths.ChangePasswordCode}`, { state: { type: ETypeSendOTP.FORGOT_PASSWORD, body } });
  };

  const handleRegisterSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng ký tài khoản thành công');
    navigate(`${LayoutPaths.Auth}${Paths.Login}`);
  };

  const handleResendCode = (): void => {
    if (countdownState.isEnd) {
      const bodySendOtp = {
        phone: dataLocationState.body.phone,
        type: dataLocationState.type,
      };

      dispatch(sendOtpAction.request(bodySendOtp, handleSendOtpSuccess));
    }
  };

  const handleSendOtpSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Gửi lại mã xác nhận thành công');

    setCountdownState({
      isEnd: false,
    });
  };

  const handleCountdownFinish = (): void => {
    setCountdownState({
      isEnd: true,
    });
  };

  useEffect(() => {
    const dataNavigateFrom = [ETypeSendOTP.FORGOT_PASSWORD, ETypeSendOTP.REGISTER].includes(dataLocationState?.type);
    if (!dataNavigateFrom) navigate(LayoutPaths.Auth);
  }, [dataLocationState]);

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Xác thực tài khoản</div>
          <div className="AuthForm-header-description">
            Mã xác nhận đã được gửi qua tin nhắn SMS của số điện thoại <span>{dataLocationState?.body?.phone}</span>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="code" rules={[validationRules.required()]}>
              <Input placeholder="Mã xác thực" />
            </Form.Item>

            <div className="AccountVerification-otp">
              <div className="AccountVerification-otp-description">Chưa nhận được mã OTP?</div>
              <div className={classNames('AccountVerification-otp-description', { disabled: !countdownState.isEnd })}>
                <span onClick={handleResendCode}>Gửi lại</span> (
                {!countdownState.isEnd && <CountdownTime defaultValue="05:00" onFinish={handleCountdownFinish} />})
              </div>
            </div>

            <Form.Item style={{ marginTop: '4rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" loading={loading} />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default AccountVerification;
