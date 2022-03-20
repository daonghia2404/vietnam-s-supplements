import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleChangePasswordField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPasswordValue(value);
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
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="phone" rules={[validationRules.required()]}>
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
            <Form.Item name="code">
              <Input placeholder="Mã giới thiệu" prefix={<Icon name={EIconName.Users} />} />
            </Form.Item>
            <Form.Item style={{ marginTop: '5rem' }}>
              <Button title="Đăng Ký" type="primary" htmlType="submit" />
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
