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
  const sendOtpLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.SEND_OTP]);

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
    showNotification(ETypeNotification.SUCCESS, '????ng k?? t??i kho???n th??nh c??ng');
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
    showNotification(ETypeNotification.SUCCESS, 'G???i l???i m?? x??c nh???n th??nh c??ng');

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
          <div className="AuthForm-header-title">X??c th???c t??i kho???n</div>
          <div className="AuthForm-header-description">
            M?? x??c nh???n ???? ???????c g???i qua tin nh???n SMS c???a s??? ??i???n tho???i <span>{dataLocationState?.body?.phone}</span>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="code" rules={[validationRules.required()]}>
              <Input placeholder="M?? x??c th???c" />
            </Form.Item>

            <div className="AccountVerification-otp">
              <div className="AccountVerification-otp-description">Ch??a nh???n ???????c m?? OTP?</div>
              <div
                className={classNames('AccountVerification-otp-description', {
                  disabled: !countdownState.isEnd || sendOtpLoading,
                })}
              >
                <span onClick={handleResendCode}>G???i l???i </span>
                {!countdownState.isEnd && (
                  <>
                    (<CountdownTime defaultValue="02:00" onFinish={handleCountdownFinish} />)
                  </>
                )}
              </div>
            </div>

            <Form.Item style={{ marginTop: '4rem' }}>
              <Button title="Ti???p Theo" type="primary" htmlType="submit" loading={loading} />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default AccountVerification;
