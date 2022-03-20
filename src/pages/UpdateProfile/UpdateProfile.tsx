import React from 'react';
import { Form } from 'antd';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { validationRules } from '@/utils/functions';
import UploadAvatar from '@/components/UploadAvatar';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';
import UploadFilesList from '@/components/UploadFilesList';

const UpdateProfile: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-header">
          <div className="AuthForm-header-title">Cập Nhật Thông Tin Cá Nhân</div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form}>
            <Form.Item name="avatar" style={{ marginBottom: '3.2rem' }}>
              <UploadAvatar />
            </Form.Item>
            <Form.Item name="name" rules={[validationRules.required()]}>
              <Input placeholder="Tên của bạn" />
            </Form.Item>
            <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="birthDay" rules={[validationRules.required()]}>
              <DatePicker placeholder="Sinh nhật" />
            </Form.Item>
            <Form.Item name="city" rules={[validationRules.required()]}>
              <Select placeholder="Tỉnh / thành phố" />
            </Form.Item>
            <Form.Item name="district" rules={[validationRules.required()]}>
              <Select placeholder="Quận / huyện" />
            </Form.Item>
            <Form.Item name="district" rules={[validationRules.required()]}>
              <Input placeholder="Địa chỉ cụ thể" />
            </Form.Item>
            <Form.Item name="creditCardImage" rules={[validationRules.required()]}>
              <UploadFilesList label="Ảnh CMND- CCCD" />
            </Form.Item>
            <Form.Item style={{ marginTop: '3rem' }}>
              <Button title="Tiếp theo" type="primary" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </AuthForm>
    </div>
  );
};

export default UpdateProfile;
