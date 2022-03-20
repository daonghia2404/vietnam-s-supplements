import React from 'react';
import { Form } from 'antd';

import { TBodyInformationFormProps } from './BodyInformationForm.types';
import './BodyInformationForm.scss';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { dataSexOptions } from '@/common/constants';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

const BodyInformationForm: React.FC<TBodyInformationFormProps> = ({ onBack, onNext }) => {
  const [form] = Form.useForm();
  return (
    <div className="BodyInformationForm">
      {onBack && (
        <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <Form form={form}>
        <div className="BodyInformationForm-title">Nhập thông tin cơ thể của bạn</div>
        <div className="BodyInformationForm-row three flex justify-between">
          <Form.Item name="height">
            <Input placeholder="Chiều cao" />
          </Form.Item>
          <Form.Item name="weight">
            <Input placeholder="Cân nặng" />
          </Form.Item>
          <Form.Item name="sex">
            <Select placeholder="Giới tính" options={dataSexOptions} />
          </Form.Item>
        </div>
        <div className="BodyInformationForm-subtitle">Mức độ vận động (Nhẹ (1) - nặng(5))</div>
        <Form.Item name="level">
          <div className="BodyInformationForm-row level flex">
            {[1, 2, 3, 4, 5].map((item) => (
              <Button key={item} title={String(item)} shadow={false} size="small" />
            ))}
          </div>
        </Form.Item>
        <div className="BodyInformationForm-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industrys standard dummy
        </div>

        <div className="BodyInformationForm-subtitle">Các đồ ăn bị dị ứng / ăn kiên</div>
        <div className="BodyInformationForm-checkbox">
          <Checkbox label="Hải sản" />
          <Checkbox label="Sứa" />
          <Checkbox label="Thịt động vật" />
          <Checkbox label="Ăn chay" />
        </div>

        <div className="BodyInformationForm-subtitle">Mục tiêu phát triển cơ thế</div>
        <div className="BodyInformationForm-checkbox">
          <Checkbox label="Tăng cân" />
          <Checkbox label="Giảm cân" />
          <Checkbox label="Tăng cơ bắp" />
          <Checkbox label="Duy trì sức khoẻ hiện có" />
        </div>

        <div className="BodyInformationForm-subtitle">Bài tập môn thể thao thường tập luyện</div>
        <div className="BodyInformationForm-checkbox">
          <Checkbox label="Không tập gì" />
          <Checkbox label="Running / sức bền" />
          <Checkbox label="Tập tay" />
          <Checkbox label="Tập chân" />
        </div>

        {onNext && (
          <div className="BodyInformationForm-submit flex justify-center">
            <Button title="Tiếp theo" type="primary" onClick={onNext} />
          </div>
        )}
      </Form>
    </div>
  );
};

export default BodyInformationForm;
