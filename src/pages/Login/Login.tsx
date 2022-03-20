import React from 'react';
import { Link } from '@reach/router';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import { validationRules } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';

const Login: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-item-navs flex">
          <div className="AuthForm-item-navs-item flex items-center active">
            <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Đăng Nhập</Link>
          </div>
          <div className="AuthForm-item-navs-item flex items-center">
            <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Đăng Ký</Link>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="phone" rules={[validationRules.required()]}>
              <Input placeholder="Số Điện Thoại" prefix={<Icon name={EIconName.Phone} />} />
            </Form.Item>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật Khẩu" prefix={<Icon name={EIconName.Lock} />} />
            </Form.Item>

            <div className="AuthForm-main-form-item flex items-center justify-between">
              <Form.Item name="remember">
                <Checkbox label="Lưu tài khoản" />
              </Form.Item>
              <Link
                className="AuthForm-main-form-item-forgot-password"
                to={`${LayoutPaths.Auth}${Paths.ForgotPassword}`}
              >
                Quên mật khẩu
              </Link>
            </div>

            <Form.Item>
              <Button title="Đăng Nhập" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>

          <div className="AuthForm-main-register">
            Chưa có tài khoản? <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Đăng ký</Link>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
