import React, { useState } from 'react';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Icon, { EIconName } from '@/components/Icon';
import HeaderSkew from '@/components/HeaderSkew';

import './ChangePasswordAccount.scss';

const ChangePasswordAccount: React.FC = () => {
  const [form] = Form.useForm();

  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleChangePasswordAccountField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordValue(value);
  };

  return (
    <div className="ChangePasswordAccount style-container">
      <HeaderSkew title="Đổi mật khẩu" />

      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Thay đổi mật khẩu</div>
          <div className="AuthForm-header-description">
            Nhập mật khẩu mới để thay đổi thông tin đăng nhập tài khoản.
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="oldPassword" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật khẩu cũ" prefix={<Icon name={EIconName.Lock} />} />
            </Form.Item>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input
                type="password"
                placeholder="Mật khẩu"
                prefix={<Icon name={EIconName.Lock} />}
                onChange={handleChangePasswordAccountField}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
            >
              <Input type="password" placeholder="Nhập lại mật khẩu" prefix={<Icon name={EIconName.Lock} />} />
            </Form.Item>

            <Form.Item style={{ marginTop: '6.4rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default ChangePasswordAccount;
