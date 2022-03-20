import React from 'react';
import { Form } from 'antd';

import ImageBodyStatus from '@/assets/images/image-body-status.png';
import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Checkbox from '@/components/Checkbox';
import Button from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import { TBodyStatusFormProps } from './BodyStatusForm.types';
import './BodyStatusForm.scss';

const BodyStatusForm: React.FC<TBodyStatusFormProps> = ({ onBack, onNext }) => {
  const [form] = Form.useForm();
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

      <Form form={form}>
        <div className="BodyStatusForm-subtitle">Mức độ thừa thiếu cân</div>
        <div className="BodyStatusForm-row level flex flex-wrap justify-between three flex">
          {['Thừa cân', 'Thiếu cân', 'Bình thường'].map((item) => (
            <Button key={item} title={String(item)} shadow={false} size="small" />
          ))}
        </div>
        <div className="BodyStatusForm-subtitle">Mức chỉ tiêu cho lịch ăn uống theo tuần</div>
        <div className="BodyStatusForm-row flex flex-wrap justify-between two">
          <Form.Item name="from" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
            <Input placeholder="Từ" size="small" suffix="đ" />
          </Form.Item>
          <Form.Item name="to" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
            <Input placeholder="Đến" size="small" suffix="đ" />
          </Form.Item>
        </div>

        <div className="BodyStatusForm-checkbox">
          <Checkbox label="Đồng ý thêm lịch ăn vào lịch nhắc điện thoại" />
          <Checkbox label="Đồng ý lịch uống vitamin kèm theo lịch ăn vào lịch điện thoại" />
        </div>

        {onNext && (
          <div className="BodyStatusForm-submit flex justify-center">
            <Button title="Tiếp theo" type="primary" onClick={onNext} />
          </div>
        )}
      </Form>
    </div>
  );
};

export default BodyStatusForm;
