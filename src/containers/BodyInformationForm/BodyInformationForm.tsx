import React, { useState } from 'react';
import { Form } from 'antd';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { TBodyInformationFormProps } from './BodyInformationForm.types';
import './BodyInformationForm.scss';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { dataSexOptions } from '@/common/constants';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { validationRules } from '@/utils/functions';
import {
  dataActivityLevelOptions,
  dataAllergiesalleeOrDietOptions,
  dataBodyGoalsOptions,
  dataSportLevelOptions,
} from '@/containers/BodyInformationForm/BodyInformationForm.data';
import { ESex } from '@/common/enums';
import { createUserInfoBodyAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';

const BodyInformationForm: React.FC<TBodyInformationFormProps> = ({ onBack, onNext }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const createUserInfoBodyLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUserMealScheduleControllerAction.CREATE_USER_INFO_BODY],
  );

  const [formValues, setFormValues] = useState<{
    height?: number;
    weight?: number;
    gender?: ESex;
    activityLevel?: number;
    allergiesalleeOrDiet?: number;
    bodyGoals?: number;
    sportLevel?: number;
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
    const body = {
      ...values,
      gender: values?.gender?.value,
    };

    dispatch(createUserInfoBodyAction.request(body, handleCreateUserInfoBodySuccess, handleCreateUserInfoBodyFailed));
  };

  const handleCreateUserInfoBodySuccess = (): void => {
    onNext?.();
  };

  const handleCreateUserInfoBodyFailed = (): void => {
    onNext?.();
  };

  return (
    <div className="BodyInformationForm">
      {onBack && (
        <div
          className={classNames('BodyInformationForm-back flex items-center', { disabled: createUserInfoBodyLoading })}
          onClick={onBack}
        >
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <Form form={form} onFinish={handleSubmit} onValuesChange={handleValuesChange}>
        <div className="BodyInformationForm-title">Nhập thông tin cơ thể của bạn</div>
        <div className="BodyInformationForm-row three flex flex-wrap justify-between">
          <Form.Item name="height" rules={[validationRules.required()]}>
            <Input placeholder="Chiều cao" />
          </Form.Item>
          <Form.Item name="weight" rules={[validationRules.required()]}>
            <Input placeholder="Cân nặng" />
          </Form.Item>
          <Form.Item name="gender" rules={[validationRules.required()]}>
            <Select placeholder="Giới tính" options={dataSexOptions} />
          </Form.Item>
        </div>
        <div className="BodyInformationForm-subtitle">Mức độ vận động (Nhẹ (1) - nặng(5))</div>
        <Form.Item
          name="activityLevel"
          rules={[validationRules.required()]}
          className="BodyInformationForm-activity-level"
        >
          <div className="BodyInformationForm-row level flex flex-wrap">
            {dataActivityLevelOptions.map((item) => (
              <Button
                className={classNames({ active: item.value === formValues.activityLevel })}
                key={item.value}
                title={item.label}
                shadow={false}
                size="small"
                onClick={(): void => handleCheckboxChange('activityLevel', item.value)}
              />
            ))}
          </div>
        </Form.Item>
        <div className="BodyInformationForm-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industrys standard dummy
        </div>

        <div className="BodyInformationForm-subtitle">Các đồ ăn bị dị ứng / ăn kiêng</div>
        <Form.Item name="allergiesalleeOrDiet" className="BodyInformationForm-checkbox">
          {dataAllergiesalleeOrDietOptions.map((item) => (
            <Checkbox
              key={item.value}
              label={item.label}
              value={item.value === formValues.allergiesalleeOrDiet}
              onChange={(): void => handleCheckboxChange('allergiesalleeOrDiet', item.value)}
            />
          ))}
        </Form.Item>

        <div className="BodyInformationForm-subtitle">Mục tiêu phát triển cơ thế</div>
        <Form.Item name="bodyGoals" className="BodyInformationForm-checkbox">
          {dataBodyGoalsOptions.map((item) => (
            <Checkbox
              key={item.value}
              label={item.label}
              value={item.value === formValues.bodyGoals}
              onChange={(): void => handleCheckboxChange('bodyGoals', item.value)}
            />
          ))}
        </Form.Item>

        <div className="BodyInformationForm-subtitle">Bài tập môn thể thao thường tập luyện</div>
        <Form.Item name="sportLevel" className="BodyInformationForm-checkbox">
          {dataSportLevelOptions.map((item) => (
            <Checkbox
              key={item.value}
              label={item.label}
              value={item.value === formValues.sportLevel}
              onChange={(): void => handleCheckboxChange('sportLevel', item.value)}
            />
          ))}
        </Form.Item>

        {onNext && (
          <div className="BodyInformationForm-submit flex justify-center">
            <Button title="Tiếp theo" type="primary" htmlType="submit" loading={createUserInfoBodyLoading} />
          </div>
        )}
      </Form>
    </div>
  );
};

export default BodyInformationForm;
