import React from 'react';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';

import './AccountVerification.scss';
import CountdownTime from '@/components/CountdownTime';

const AccountVerification: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Xác thực tài khoản</div>
          <div className="AuthForm-header-description">
            Mã xác nhận đã được gửi qua tin nhắn SMS của số điện thoại <span>+84912345678</span>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="vetifyCode" rules={[validationRules.required()]}>
              <Input placeholder="Mã xác thực" />
            </Form.Item>

            <div className="AccountVerification-otp">
              <div className="AccountVerification-otp-description">Chưa nhận được mã OTP?</div>
              <div className="AccountVerification-otp-description">
                <span>Gửi lại</span> (<CountdownTime defaultValue="00:05" />)
              </div>
            </div>

            <Form.Item style={{ marginTop: '4rem' }}>
              <Button title="Tiếp Theo" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default AccountVerification;
