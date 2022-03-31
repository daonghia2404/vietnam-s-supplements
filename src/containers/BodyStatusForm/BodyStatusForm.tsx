import React, { useState } from 'react';
import { Form } from 'antd';
import classNames from 'classnames';

import ImageBodyStatus from '@/assets/images/image-body-status.png';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { dataBodyLevelOptions } from '@/containers/BodyStatusForm/BodyStatusForm.data';

import { TBodyStatusFormProps } from './BodyStatusForm.types';
import './BodyStatusForm.scss';

const BodyStatusForm: React.FC<TBodyStatusFormProps> = ({ onBack, onNext }) => {
  const [form] = Form.useForm();

  const [formValues, setFormValues] = useState<{
    bodyLevel?: number;
    priceFrom?: number;
    priceTo?: number;
    remindMealScheduleAtPhone?: boolean;
    remindVitaminScheduleAtPhone?: boolean;
  }>({});

  const handleCheckboxChange = (name: string, value: number): void => {
    form.setFieldsValue({
      [name]: value,
    });
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValuesChange = (values: any): void => {
    setFormValues({ ...values });
  };

  const handleSubmit = (values: any): void => {
    onNext?.(values);
  };

  return (
    <div className="BodyStatusForm">
      {onBack && (
        <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <div className="BodyStatusForm-title">Tình trạng cơ thể</div>
      <div className="BodyStatusForm-image">
        <img src={ImageBodyStatus} alt="" />
      </div>

      <Form form={form} onValuesChange={handleValuesChange} onFinish={handleSubmit}>
        <div className="BodyStatusForm-subtitle">Mức độ thừa thiếu cân</div>
        <Form.Item name="bodyLevel" rules={[validationRules.required()]}>
          <div className="BodyStatusForm-row level flex flex-wrap justify-between three flex">
            {dataBodyLevelOptions.map((item) => (
              <Button
                className={classNames({ active: item.value === formValues.bodyLevel })}
                key={item.value}
                title={item.label}
                shadow={false}
                size="small"
                onClick={(): void => handleCheckboxChange('bodyLevel', item.value)}
              />
            ))}
          </div>
        </Form.Item>

        <div className="BodyStatusForm-subtitle">Mức chỉ tiêu cho lịch ăn uống theo tuần</div>
        <div className="BodyStatusForm-row flex flex-wrap justify-between two">
          <Form.Item name="priceFrom" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
            <Input placeholder="Từ" size="small" suffix="đ" />
          </Form.Item>
          <Form.Item name="priceTo" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
            <Input placeholder="Đến" size="small" suffix="đ" />
          </Form.Item>
        </div>

        <Form.Item className="BodyStatusForm-checkbox" name="remindMealScheduleAtPhone">
          <Checkbox label="Đồng ý thêm lịch ăn vào lịch nhắc điện thoại" />
        </Form.Item>
        <Form.Item className="BodyStatusForm-checkbox" name="remindVitaminScheduleAtPhone">
          <Checkbox label="Đồng ý lịch uống vitamin kèm theo lịch ăn vào lịch điện thoại" />
        </Form.Item>

        {onNext && (
          <div className="BodyStatusForm-submit flex justify-center">
            <Button title="Tiếp theo" type="primary" htmlType="submit" />
          </div>
        )}
      </Form>
    </div>
  );
};

export default BodyStatusForm;
