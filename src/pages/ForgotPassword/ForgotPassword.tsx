import React from 'react';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import Icon, { EIconName } from '@/components/Icon';

import './ForgotPassword.scss';

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();

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
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="phone" rules={[validationRules.required()]}>
              <Input placeholder="Số Điện Thoại" prefix={<Icon name={EIconName.Phone} />} />
            </Form.Item>

            <Form.Item style={{ marginTop: '13rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default ForgotPassword;
