import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import { showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { ETypeNotification } from '@/common/enums';
import { postAgentAction } from '@/redux/actions';
import { EContactControllerAction } from '@/redux/actions/contact-controller/constants';
import { TRootState } from '@/redux/reducers';

import { TDistributionProductModalProps } from './DistributionProductModal.types';
import './DistributionProductModal.scss';

const DistributionProductModal: React.FC<TDistributionProductModalProps> = ({ visible, data, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const postAgentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EContactControllerAction.POST_AGENT],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      fullname: values?.fullname,
      phone: values?.phone,
      email: values?.email,
      description: values?.address,
      address: values?.address,
    };

    dispatch(postAgentAction.request(body, handlePostAgentSuccess));
  };

  const handlePostAgentSuccess = (): void => {
    showNotification(
      ETypeNotification.SUCCESS,
      'Gửi biểu mẫu đăng ký phân phối thành công. Chúng tôi sẽ phản hồi với bạn trong thời gian sớm nhất',
    );
    form.resetFields();
    onClose?.();
  };

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
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="fullname" rules={[validationRules.required()]}>
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
          <Button title="Đăng ký phân phối" htmlType="submit" type="primary" loading={postAgentLoading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default DistributionProductModal;
