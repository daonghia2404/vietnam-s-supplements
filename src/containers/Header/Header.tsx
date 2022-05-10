import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Form } from 'antd';
import { useSelector } from 'react-redux';

import Logo from '@/assets/images/logo.png';
import { Paths } from '@/pages/routers';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import DropdownCustom from '@/components/DropdownCustom';
import { validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { TRootState } from '@/redux/reducers';

import { THeaderProps } from './Header.types';
import './Header.scss';

const Header: React.FC<THeaderProps> = ({ onClickMenuBars }) => {
  const [form] = Form.useForm();
  const [visibleDropdownSearch, setVisibleDropdownSearch] = useState<boolean>(false);

  const userInfo = useSelector((state: TRootState) => state.authReducer.user);
  const atk = userInfo?.id;

  const cartState = useSelector((state: TRootState) => state.cartReducer.cart?.cart) || [];
  const cartStorageState = useSelector((state: TRootState) => state.uiReducer.cartsStorage) || [];

  const handleSearchProduct = (values: any): void => {
    window.open(`/${Paths.ProductSearch}?keyword=${values.keyword}`, '_self');
    setVisibleDropdownSearch(false);
  };

  const handleNavigateCarts = (): void => {
    navigate(Paths.Carts);
  };

  const renderDropdownSearchProduct = (): React.ReactElement => {
    return (
      <div className="Header-search">
        <Form form={form} className="flex items-start" onFinish={handleSearchProduct}>
          <Form.Item name="keyword" rules={[validationRules.required()]}>
            <Input placeholder="Nhập từ khoá tìm kiếm" />
          </Form.Item>
          <Form.Item>
            <Button iconName={EIconName.SearchSvg} type="primary" htmlType="submit" iconColor={EIconColor.WHITE} />
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div className="Header flex justify-center">
      <div className="Header-item-icon" onClick={(): void => onClickMenuBars?.()} style={{ marginRight: 'auto' }}>
        <Icon name={EIconName.Bars} />
      </div>
      <Link className="Header-logo" to={Paths.Home}>
        <img src={Logo} alt="" />
      </Link>
      <div className="Header-item-icon" style={{ marginLeft: 'auto' }}>
        <DropdownCustom
          visible={visibleDropdownSearch}
          placement="bottomRight"
          onVisibleChange={(visible): void => {
            setVisibleDropdownSearch(visible);
          }}
          overlayClassName="Header-search-wrapper"
          overlay={renderDropdownSearchProduct()}
        >
          <Icon name={EIconName.Search} />
        </DropdownCustom>
      </div>

      <div className="Header-item-icon" onClick={handleNavigateCarts}>
        <Icon name={EIconName.Cart} />
        <div className="Header-item-icon-badge">{atk ? cartState?.length || 0 : cartStorageState?.length || 0}</div>
      </div>
    </div>
  );
};
export default Header;
