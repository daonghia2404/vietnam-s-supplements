import React, { useEffect } from 'react';
import { Form } from 'antd';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import { scrollToTop, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';

import './Checkout.scss';

const Checkout: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="Checkout">
      <HeaderSkew title="Thanh toán" />

      <Form layout="vertical" form={form}>
        <div className="Checkout-wrapper flex justify-between">
          <div className="Checkout-wrapper-item">
            <div className="Checkout-description">Xin vui lòng điền đầy đủ thông tin dưới đây để hoàn tất đơn hàng</div>
            <div className="Checkout-subtitle">THÔNG TIN THANH TOÁN</div>

            <div className="Checkout-form-row flex justify-between flex-wrap">
              <Form.Item name="name" rules={[validationRules.required()]}>
                <Input placeholder="Nhập họ tên" size="large" />
              </Form.Item>
              <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                <Input placeholder="Nhập số điện thoại" size="large" />
              </Form.Item>
            </div>

            <div className="Checkout-form-row">
              <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                <Input placeholder="Nhập email" size="large" />
              </Form.Item>
            </div>

            <div className="Checkout-form-row flex justify-between flex-wrap">
              <Form.Item name="city" rules={[validationRules.required()]}>
                <Select placeholder="Chọn thành phố" options={[]} />
              </Form.Item>
              <Form.Item name="district" rules={[validationRules.required()]}>
                <Select placeholder="Chọn quận / huyện" options={[]} />
              </Form.Item>
            </div>

            <div className="Checkout-form-row">
              <Form.Item name="city" rules={[validationRules.required()]}>
                <TextArea placeholder="Nhập địa chỉ cụ thể" />
              </Form.Item>
            </div>

            <div className="Checkout-subtitle">LƯU Ý ĐẶC BIỆT</div>
            <div className="Checkout-form-row">
              <Form.Item name="note">
                <TextArea placeholder="Ghi chú (có thể bỏ trống)" />
              </Form.Item>
            </div>
            <div className="Checkout-form-row" style={{ margin: '2rem 0 2rem' }}>
              <Checkbox label="Nhận hàng tại địa chỉ khác" />
            </div>

            <div className="Checkout-form-row flex justify-between flex-wrap">
              <Form.Item name="name" rules={[validationRules.required()]}>
                <Input placeholder="Nhập họ tên" size="large" />
              </Form.Item>
              <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                <Input placeholder="Nhập số điện thoại" size="large" />
              </Form.Item>
            </div>

            <div className="Checkout-form-row flex justify-between flex-wrap">
              <Form.Item name="city" rules={[validationRules.required()]}>
                <Select placeholder="Chọn thành phố" options={[]} />
              </Form.Item>
              <Form.Item name="district" rules={[validationRules.required()]}>
                <Select placeholder="Chọn quận / huyện" options={[]} />
              </Form.Item>
            </div>

            <div className="Checkout-form-row">
              <Form.Item name="city" rules={[validationRules.required()]}>
                <TextArea placeholder="Nhập địa chỉ cụ thể" />
              </Form.Item>
            </div>
          </div>

          <div className="Checkout-wrapper-item">
            <div className="Checkout-card">
              <div className="Checkout-row flex justify-between">
                <div className="Checkout-row-text">Tổng đơn hàng</div>
                <div className="Checkout-row-text">
                  <strong>2.450.000 VND</strong>
                </div>
              </div>
              <div className="Checkout-row flex justify-between">
                <div className="Checkout-row-text">Lựa chọn phương thức thanh toán</div>
              </div>
              <div className="Checkout-row" style={{ paddingTop: 0 }}>
                <Checkbox label="Thanh toán qua ngân lượng" value />
              </div>
              <div className="Checkout-row border-top">
                <Button type="primary" title="Gửi đơn hàng" size="large" />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
