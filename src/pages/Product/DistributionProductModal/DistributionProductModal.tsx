import React, { useEffect } from 'react';
import { Form } from 'antd';

import Modal from '@/components/Modal';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';

import { TDistributionProductModalProps } from './DistributionProductModal.types';
import './DistributionProductModal.scss';

const DistributionProductModal: React.FC<TDistributionProductModalProps> = ({ visible, data, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!visible) form.resetFields();
  }, [form, visible]);

  return (
    <Modal visible={visible} onClose={onClose} width="60rem" wrapClassName="DistributionProductModal-wrapper">
      <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
        Đăng ký phân phối
      </div>
      <div className="Modal-body-description" style={{ marginBottom: '3rem' }}>
        Sản phẩm: {data?.name}
      </div>
      <Form form={form} layout="vertical">
        <Form.Item name="name" rules={[validationRules.required()]}>
          <Input placeholder="Nhập họ tên" />
        </Form.Item>
        <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="address" rules={[validationRules.required()]}>
          <Input placeholder="Nhập địa chỉ" />
        </Form.Item>
        <Form.Item>
          <Button title="Đăng ký phân phối" htmlType="submit" type="primary" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DistributionProductModal;
