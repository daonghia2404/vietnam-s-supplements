import React from 'react';
import { Form } from 'antd';

import HeaderSkew from '@/components/HeaderSkew';
import UploadAvatar from '@/components/UploadAvatar';
import UploadFilesList from '@/components/UploadFilesList';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';

import './ProfileInformation.scss';
import Button from '@/components/Button';

const ProfileInformation: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <div className="ProfileInformation style-container">
      <HeaderSkew title="Thông tin cá nhân" />

      <div className="ProfileInformation-main">
        <Form className="ProfileInformation-main-form" form={form}>
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
          <div className="ProfileInformation-main-form-row flex justify-between two">
            <Form.Item name="city" rules={[validationRules.required()]}>
              <Select placeholder="Tỉnh / thành phố" />
            </Form.Item>
            <Form.Item name="district" rules={[validationRules.required()]}>
              <Select placeholder="Quận / huyện" />
            </Form.Item>
          </div>
          <Form.Item name="district" rules={[validationRules.required()]}>
            <Input placeholder="Địa chỉ cụ thể" />
          </Form.Item>
          <Form.Item name="creditCardImage" rules={[validationRules.required()]}>
            <UploadFilesList label="Ảnh CMND- CCCD" value="XXX" />
          </Form.Item>

          <div className="ProfileInformation-main-form-submit flex justify-center">
            <Button title="Chỉnh sửa" type="primary" htmlType="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProfileInformation;
