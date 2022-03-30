import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useLocation } from '@reach/router';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { showNotification, validationRules } from '@/utils/functions';
import Icon, { EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { forgotPasswordAction } from '@/redux/actions';
import { LayoutPaths } from '@/pages/routers';
import { ETypeNotification } from '@/common/enums';
import { ETypeSendOTP } from '@/services/api/auth-controller/enums';

import './ChangePasswordCode.scss';

const ChangePasswordCode: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location: any = useLocation();
  const dataLocationState = location?.state;

  const [passwordValue, setPasswordValue] = useState<string>('');
  const forgotPasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.FORGOT_PASSWORD],
  );

  const handleChangePasswordField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      ...dataLocationState.body,
      password: values.password,
    };

    dispatch(forgotPasswordAction.request(body, handleForgotPasswordSuccess));
  };

  const handleForgotPasswordSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi mật khẩu thành công');
    navigate(LayoutPaths.Auth);
  };

  useEffect(() => {
    const dataNavigateFrom = [ETypeSendOTP.FORGOT_PASSWORD].includes(dataLocationState?.type);
    if (!dataNavigateFrom) navigate(LayoutPaths.Auth);
  }, [dataLocationState]);

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Thay đổi mật khẩu</div>
          <div className="AuthForm-header-description">
            Nhập mật khẩu mới để thay đổi thông tin đăng nhập tài khoản.
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input
                type="password"
                placeholder="Mật khẩu"
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

            <Form.Item style={{ marginTop: '6.4rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" loading={forgotPasswordLoading} />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default ChangePasswordCode;
