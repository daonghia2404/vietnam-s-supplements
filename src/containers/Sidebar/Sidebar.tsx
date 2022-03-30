import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, globalHistory, navigate } from '@reach/router';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import ImageFavicon from '@/assets/images/favicon.png';
import ImageLogo from '@/assets/images/logo.png';
import { TSidebarData, TSidebarProps } from '@/containers/Sidebar/Sidebar.types';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import { dataMenu, dataProfileMenu } from '@/containers/Sidebar/Sidebar.data';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';
import AuthHelpers from '@/services/helpers';
import Modal from '@/components/Modal';

import './Sidebar.scss';

const Sidebar: React.FC<TSidebarProps> = ({ isMobile, onClickMenuBars }) => {
  const [pathName, setPathName] = useState<string>('');
  const pathNameArray = pathName.split('/');

  const deviceType = useSelector((state: TRootState) => state.uiReducer.device.type);
  const isDesktop = deviceType === EDeviceType.DESKTOP;

  const isShowProfileMenu = pathNameArray.includes(LayoutPaths.Profile.substring(1));
  const isShowNormalMenu = !isShowProfileMenu;

  const authState = useSelector((state: TRootState) => state.authReducer.user);

  const [confirmLogoutModalState, setConfirmLogoutModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const renderDataMenu = (): TSidebarData[] => {
    if (isShowProfileMenu) return dataProfileMenu(authState);
    if (isShowNormalMenu) return dataMenu;
    return [];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const handleChangeRouter = (pathname: string): void => {
    setPathName(pathname);
  };

  const handleOpenConfirmLogoutModal = (): void => {
    setConfirmLogoutModalState({ visible: true });
  };
  const handleConfirmLogoutModalSubmit = (): void => {
    handleCloseConfirmLogoutModal();
    AuthHelpers.clearTokens();
    navigate(LayoutPaths.Auth);
  };
  const handleCloseConfirmLogoutModal = (): void => {
    setConfirmLogoutModalState({ visible: false });
  };

  const handleClickMenu = (data: TSidebarData): void => {
    if (isMobile) onClickMenuBars?.();
    switch (true) {
      case data.isAction:
        handleOpenConfirmLogoutModal();
        break;
      case Boolean(data.link):
        navigate(data?.link || '');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const { pathname: mountedPathName } = window.location;
    handleChangeRouter(mountedPathName);

    globalHistory.listen(({ location }) => {
      const { pathname } = location;
      handleChangeRouter(pathname);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Sidebar flex">
      <div className={classNames('Sidebar-item', deviceType)}>
        <Link to={LayoutPaths.Guest} className="Sidebar-item-favicon">
          <img src={ImageFavicon} alt="" />
        </Link>
        <div className="Sidebar-item-icon" onClick={onClickMenuBars}>
          <Icon name={EIconName.Bars} />
        </div>
        <div className="Sidebar-item-icon disabled">
          <Icon name={EIconName.Search} />
        </div>
        <div className="Sidebar-item-icon disabled">
          <Icon name={EIconName.Cart} />
        </div>
        <Link to={`${LayoutPaths.Profile}${Paths.ProfileInformation}`} className="Sidebar-item-icon">
          <Icon name={EIconName.UserSquare} color={EIconColor.SCARPA_FLOW} />
        </Link>
      </div>

      <div className="Sidebar-item">
        {isDesktop ? (
          <Link to={LayoutPaths.Guest} className="Sidebar-item-logo">
            <img src={ImageLogo} alt="" />
          </Link>
        ) : (
          <div className="Sidebar-close" onClick={onClickMenuBars}>
            <Icon name={EIconName.Close} color={EIconColor.BOULDER} />
          </div>
        )}

        <div className="Sidebar-menu">
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            {renderDataMenu().map((item) => {
              const isSubMenu = item.subItems && item.subItems.length > 0;
              const isSkewItem = item.isSkew;

              if (isSubMenu && item.subItems) {
                return (
                  <Menu.SubMenu
                    className="Sidebar-menu-item"
                    key={item.key}
                    title={item.title}
                    disabled={item.disabled}
                  >
                    {item.subItems.map((subItem) => (
                      <Menu.Item
                        className={classNames('Sidebar-menu-item', { active: pathName.includes(subItem.link || ' ') })}
                        key={subItem.key}
                        disabled={subItem.disabled}
                        onClick={(): void => handleClickMenu(subItem)}
                      >
                        {subItem.title}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }

              if (isSkewItem) {
                return (
                  <Menu.Item
                    className={classNames('Sidebar-menu-item', { active: pathName.includes(item?.link || ' ') })}
                    key={item.key}
                    disabled={item.disabled}
                    onClick={(): void => handleClickMenu(item)}
                  >
                    <div className="Sidebar-menu-item-skew">{item.title}</div>
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item
                  icon={item.icon}
                  className={classNames('Sidebar-menu-item', { active: pathName.includes(item?.link || ' ') })}
                  key={item.key}
                  disabled={item.disabled}
                  onClick={(): void => handleClickMenu(item)}
                >
                  {item.title}

                  {item.suffix && <div className="Sidebar-menu-item-suffix">{item.suffix}</div>}
                </Menu.Item>
              );
            })}
          </Menu>
        </div>

        {isShowNormalMenu && (
          <div className="Sidebar-item-subcrible">
            <div className="Sidebar-item-subcrible-title">Subcrible</div>
            <a
              href="https://google.com.vn"
              target="_blank"
              className="Sidebar-item-subcrible-link flex items-center disabled"
              rel="noreferrer"
              onClick={(e): void => e.preventDefault()}
            >
              <Icon name={EIconName.Facebook} />
              Facebook
            </a>
            <a
              href="https://google.com.vn"
              target="_blank"
              className="Sidebar-item-subcrible-link flex items-center disabled"
              rel="noreferrer"
              onClick={(e): void => e.preventDefault()}
            >
              <Icon name={EIconName.Instagram} />
              Instagram
            </a>
            <a
              href="https://google.com.vn"
              target="_blank"
              className="Sidebar-item-subcrible-link flex items-center disabled"
              rel="noreferrer"
              onClick={(e): void => e.preventDefault()}
            >
              <Icon name={EIconName.Edit} />
              Đăng ký tư vấn
            </a>
          </div>
        )}
      </div>

      <Modal
        {...confirmLogoutModalState}
        confirmButton={{ title: 'Đăng xuất', onClick: handleConfirmLogoutModalSubmit }}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseConfirmLogoutModal }}
        onClose={handleCloseConfirmLogoutModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Đăng xuất
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          Bạn xác nhận đăng xuất tài khoản?
        </div>
      </Modal>

      {!isDesktop && <div className="Sidebar-overlay" onClick={onClickMenuBars} />}
    </div>
  );
};

export default Sidebar;
