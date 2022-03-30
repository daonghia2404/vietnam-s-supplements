import React from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Icon, { EIconName } from '@/components/Icon';
import { sendOtpAction } from '@/redux/actions';
import { ETypeSendOTP } from '@/services/api/auth-controller/enums';
import { LayoutPaths, Paths } from '@/pages/routers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { TRootState } from '@/redux/reducers';

import './ForgotPassword.scss';

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const sendOtpLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.SEND_OTP]);

  const handleSubmit = (values: any): void => {
    const bodySendOtp = {
      phone: values.phone,
      type: ETypeSendOTP.FORGOT_PASSWORD,
    };

    dispatch(sendOtpAction.request(bodySendOtp, (): void => handleSendOtpSuccess(values)));
  };

  const handleSendOtpSuccess = (values: any): void => {
    navigate(`${LayoutPaths.Auth}${Paths.AccountVerification}`, {
      state: {
        type: ETypeSendOTP.FORGOT_PASSWORD,
        body: {
          phone: values.phone,
        },
      },
    });
  };

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Quên mật khẩu</div>
          <div className="AuthForm-header-description">
            Vui lòng nhập số điện thoại đăng ký để chúng tôi xác nhận thông tin tài khoản của bạn.
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
              <Input placeholder="Số Điện Thoại" prefix={<Icon name={EIconName.Phone} />} />
            </Form.Item>

            <Form.Item style={{ marginTop: '13rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" loading={sendOtpLoading} />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default ForgotPassword;
