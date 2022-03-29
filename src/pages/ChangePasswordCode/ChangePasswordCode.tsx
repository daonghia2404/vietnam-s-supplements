import React, { useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Icon, { EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import { changePasswordAction } from '@/redux/actions';
import { LayoutPaths } from '@/pages/routers';

import './ChangePasswordCode.scss';

const ChangePasswordCode: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [passwordValue, setPasswordValue] = useState<string>('');
  const changePasswordLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EAuthControllerAction.CHANGE_PASSWORD],
  );

  const handleChangePasswordField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  const handleSubmit = (values: any): void => {
    const body = {
      password: values.password,
      newPassword: values.password,
    };

    dispatch(changePasswordAction.request(body, handleChangePasswordSuccess));
  };

  const handleChangePasswordSuccess = (): void => {
    navigate(LayoutPaths.Auth);
  };

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
              <Button title="Tiếp Theo" type="primary" htmlType="submit" loading={changePasswordLoading} />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default ChangePasswordCode;
