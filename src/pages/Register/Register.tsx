import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';
import { sendOtpAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { ETypeSendOTP } from '@/services/api/auth-controller/enums';

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState<string>('');

  const sendOtpLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.SEND_OTP]);

  const handleChangePasswordField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const handleSubmit = (values: any): void => {
    const bodySendOtp = {
      phone: values.phone,
      type: ETypeSendOTP.REGISTER,
    };

    dispatch(sendOtpAction.request(bodySendOtp, (): void => handleSendOtpSuccess(values)));
  };

  const handleSendOtpSuccess = (values: any): void => {
    navigate(`${LayoutPaths.Auth}${Paths.AccountVerification}`, {
      state: {
        type: ETypeSendOTP.REGISTER,
        body: {
          password: values.password,
          phone: values.phone,
          inviteCode: values.inviteCode || '',
        },
      },
    });
  };

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-item-navs flex">
          <div className="AuthForm-item-navs-item flex items-center">
            <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Đăng Nhập</Link>
          </div>
          <div className="AuthForm-item-navs-item flex items-center active">
            <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Đăng Ký</Link>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
              <Input placeholder="Số Điện Thoại" prefix={<Icon name={EIconName.Phone} />} />
            </Form.Item>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input
                type="password"
                placeholder="Mật Khẩu"
                prefix={<Icon name={EIconName.Lock} />}
                onChange={handleChangePasswordField}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
            >
              <Input type="password" placeholder="Nhập lại mật khẩu" prefix={<Icon name={EIconName.Lock} />} />
            </Form.Item>
            <Form.Item name="inviteCode">
              <Input placeholder="Mã giới thiệu" prefix={<Icon name={EIconName.Users} />} />
            </Form.Item>
            <Form.Item style={{ marginTop: '5rem' }}>
              <Button title="Đăng Ký" type="primary" htmlType="submit" loading={sendOtpLoading} />
            </Form.Item>
          </Form>

          <div className="AuthForm-main-register">
            Đã có tài khoản? <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Đăng nhập</Link>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default Register;
