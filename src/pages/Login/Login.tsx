import React, { useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import Icon, { EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import { showNotification, validationRules } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';
import AuthHelpers from '@/services/helpers';
import { loginAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const loginLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.LOGIN]);

  const handleSubmit = (values: any): void => {
    if (values.remember) {
      AuthHelpers.storeRememberAccountPhone(values.phone);
      AuthHelpers.storeRememberAccountPassword(values.password);
    }

    const body = {
      phone: values.phone,
      password: values.password,
    };

    dispatch(loginAction.request(body, handleLoginSuccess));
  };

  const handleLoginSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đăng nhập thành công');
    navigate(LayoutPaths.Profile);
  };

  useEffect(() => {
    const rmPhone = AuthHelpers.getRememberAccountPhone();
    const rmPassword = AuthHelpers.getRememberAccountPassword();

    if (rmPhone && rmPassword) {
      form.setFieldsValue({
        phone: rmPhone,
        password: rmPassword,
      });
    }
  }, [form]);

  return (
    <div>
      <AuthForm>
        <div className="AuthForm-item-navs flex">
          <div className="AuthForm-item-navs-item flex items-center active">
            <Link to={`${LayoutPaths.Auth}${Paths.Login}`}>Đăng Nhập</Link>
          </div>
          <div className="AuthForm-item-navs-item flex items-center">
            <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Đăng Ký</Link>
          </div>
        </div>

        <div className="AuthForm-main flex flex-col">
          <Form className="AuthForm-main-form" form={form} onFinish={handleSubmit}>
            <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
              <Input placeholder="Số Điện Thoại" prefix={<Icon name={EIconName.Phone} />} />
            </Form.Item>
            <Form.Item name="password" rules={[validationRules.required()]}>
              <Input type="password" placeholder="Mật Khẩu" prefix={<Icon name={EIconName.Lock} />} />
            </Form.Item>

            <div className="AuthForm-main-form-item flex items-center justify-between">
              <Form.Item name="remember">
                <Checkbox label="Lưu tài khoản" />
              </Form.Item>
              <Link
                className="AuthForm-main-form-item-forgot-password"
                to={`${LayoutPaths.Auth}${Paths.ForgotPassword}`}
              >
                Quên mật khẩu
              </Link>
            </div>

            <Form.Item>
              <Button title="Đăng Nhập" type="primary" htmlType="submit" loading={loginLoading} />
            </Form.Item>
          </Form>

          <div className="AuthForm-main-register">
            Chưa có tài khoản? <Link to={`${LayoutPaths.Auth}${Paths.Register}`}>Đăng ký</Link>
          </div>
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
