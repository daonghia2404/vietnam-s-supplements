import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconName } from '@/components/Icon';
import { scrollToTop, showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import { postContactAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { EContactControllerAction } from '@/redux/actions/contact-controller/constants';

import './Contact.scss';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const postContactLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EContactControllerAction.POST_CONTACT],
  );

  const handleSubmit = (values: any): void => {
    const body = {
      fullname: values?.fullname,
      phone: values?.phone,
      email: values?.email,
      description: values?.description,
      title: values?.title,
    };

    dispatch(postContactAction.request(body, handlePostContactSuccess));
  };

  const handlePostContactSuccess = (): void => {
    showNotification(
      ETypeNotification.SUCCESS,
      'Gửi biểu mẫu liên hệ thành công. Chúng tôi sẽ phản hồi với bạn trong thời gian sớm nhất',
    );
    form.resetFields();
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Contact">
      <HeaderSkew title="Liên hệ" />
      <div className="Contact-title">Công ty TNHH {`Vietnam's`} Supplements</div>
      <div className="Contact-address flex items-center">
        <Icon name={EIconName.MapMarker} />
        186 Tôn Đức Thắng, Quận Đống Đa, Hà Nội
      </div>
      <div className="Contact-address flex items-center">
        <Icon name={EIconName.Phone} />
        0945449229
      </div>
      <div className="Contact-address flex items-center">
        <Icon name={EIconName.Mail} />
        vnsupplements@gmail.com
      </div>

      <div className="Contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7447.890735357038!2d105.81784084688105!3d21.03487186850815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab128c820ed1%3A0x36755994e4cda933!2sALC%20CORP!5e0!3m2!1svi!2s!4v1579565109435!5m2!1svi!2s"
        />
      </div>

      <div className="Contact-title">Nếu bạn có bất kỳ thắc mắc nào hãy liên hệ với chúng tôi</div>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="Contact-row two flex justify-between flex-wrap">
          <Form.Item name="fullname" rules={[validationRules.required()]}>
            <Input placeholder="Họ tên" />
          </Form.Item>
          <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
            <Input placeholder="Số điện thoại" />
          </Form.Item>
        </div>
        <div className="Contact-row two flex justify-between flex-wrap">
          <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="title" rules={[validationRules.required()]}>
            <Input placeholder="Tiêu đề" />
          </Form.Item>
        </div>
        <div className="Contact-row">
          <Form.Item name="description" rules={[validationRules.required()]}>
            <TextArea placeholder="Nội dung" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button title="Gửi liên hệ" type="primary" htmlType="submit" loading={postContactLoading} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
