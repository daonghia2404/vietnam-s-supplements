import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { Form } from 'antd';
import { useSelector } from 'react-redux';

import Modal from '@/components/Modal';
import Checkbox from '@/components/Checkbox';
import DatePicker from '@/components/DatePicker';
import Amount from '@/components/Amount';
import Button from '@/components/Button';
import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';
import { TRootState } from '@/redux/reducers';
import { validationRules } from '@/utils/functions';

import { TAddCartModalProps } from './AddCartModal.types';
import './AddCartModal.scss';

const AddCartModal: React.FC<TAddCartModalProps> = ({ visible, data, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [isAddCalendar, setIsAddCalendar] = useState<boolean>(false);
  const isMedicianProduct = data?.type === '1';

  const [beforeDate, setBeforeDate] = useState<Moment | null>(null);

  const addCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.ADD_CART]);

  const handleSubmit = (values: any): void => {
    const body = {
      amount: values.amount || 1,
      dateStartEat: values?.dateStartEat ? moment(values?.dateStartEat).toISOString() : undefined,
      dateEndEat: values?.dateEndEat ? moment(values?.dateEndEat).toISOString() : undefined,
    };

    onSubmit?.(body);
  };

  const disabledDate = (current: Moment, setDate?: Moment | null): boolean => {
    return current && current < moment(setDate).endOf('day');
  };

  useEffect(() => {
    if (visible && isMedicianProduct) {
      setIsAddCalendar(true);
      form.setFieldsValue({ addCalendar: true, amount: 1 });
    } else {
      form.resetFields();
    }
  }, [form, visible, isMedicianProduct]);

  return (
    <Modal
      visible={visible}
      width={534}
      onClose={onClose}
      closeable
      className="AddCartModal"
      wrapClassName="AddCartModal-wrapper"
    >
      <div className="Modal-body-title">Thêm vào giỏ hàng</div>
      <Form form={form} className="AddCartModal-form" layout="vertical" onFinish={handleSubmit}>
        {isMedicianProduct && (
          <div className="AddCartModal-form-row flex items-center justify-between">
            <div className="AddCartModal-form-row-label">Thêm vào lịch ăn uống:</div>
            <Form.Item name="addCalendar">
              <Checkbox onChange={setIsAddCalendar} />
            </Form.Item>
          </div>
        )}

        {isAddCalendar && (
          <div className="AddCartModal-form-row two flex justify-between flex-wrap border-bottom">
            <Form.Item name="dateStartEat" rules={[validationRules.required()]}>
              <DatePicker placeholder="Chọn ngày bắt đầu" disabledDate={disabledDate} onChange={setBeforeDate} />
            </Form.Item>
            <Form.Item name="dateEndEat" rules={[validationRules.required()]}>
              <DatePicker
                placeholder="Chọn ngày kết thúc"
                disabledDate={(current): boolean => disabledDate(current, beforeDate)}
                disabled={!beforeDate}
              />
            </Form.Item>
          </div>
        )}

        <div className="AddCartModal-form-row flex justify-between items-center">
          <div className="AddCartModal-form-row-label">Số lượng: </div>
          <Form.Item name="amount">
            <Amount />
          </Form.Item>
        </div>

        <div className="AddCartModal-form-submit">
          <Button type="primary" htmlType="submit" size="large" title="Thêm vào giỏ hàng" loading={addCartLoading} />
        </div>
      </Form>
    </Modal>
  );
};

export default AddCartModal;
