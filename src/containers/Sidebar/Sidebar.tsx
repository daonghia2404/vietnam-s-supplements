import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link, globalHistory } from '@reach/router';

import ImageFavicon from '@/assets/images/favicon.png';
import ImageLogo from '@/assets/images/logo.png';
import { TSidebarData, TSidebarProps } from '@/containers/Sidebar/Sidebar.types';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths } from '@/pages/routers';
import { dataMenu, dataProfileMenu } from '@/containers/Sidebar/Sidebar.data';

import './Sidebar.scss';

const Sidebar: React.FC<TSidebarProps> = ({ onClickMenuBars }) => {
  const [pathName, setPathName] = useState<string>('');
  const pathNameArray = pathName.split('/');

  const isShowProfileMenu = pathNameArray.includes(LayoutPaths.Profile.substring(1));
  const isShowNormalMenu = !isShowProfileMenu;

  const renderDataMenu = (): TSidebarData[] => {
    if (isShowProfileMenu) return dataProfileMenu;
    if (isShowNormalMenu) return dataMenu;
    return [];

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const handleChangeRouter = (pathname: string): void => {
    setPathName(pathname);
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
      <div className="Sidebar-item">
        <Link to={LayoutPaths.Guest} className="Sidebar-item-favicon">
          <img src={ImageFavicon} alt="" />
        </Link>
        <div className="Sidebar-item-icon" onClick={onClickMenuBars}>
          <Icon name={EIconName.Bars} />
        </div>
        <div className="Sidebar-item-icon">
          <Icon name={EIconName.Search} />
        </div>
        <div className="Sidebar-item-icon">
          <Icon name={EIconName.Cart} />
        </div>
        <div className="Sidebar-item-icon">
          <Icon name={EIconName.UserSquare} color={EIconColor.SCARPA_FLOW} />
        </div>
      </div>
      <div className="Sidebar-item">
        <Link to={LayoutPaths.Guest} className="Sidebar-item-logo">
          <img src={ImageLogo} alt="" />
        </Link>

        <div className="Sidebar-menu">
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            {renderDataMenu().map((item) => {
              const isSubMenu = item.subItems && item.subItems.length > 0;
              const isSkewItem = item.isSkew;

              if (isSubMenu && item.subItems) {
                return (
                  <Menu.SubMenu className="Sidebar-menu-item" key={item.key} title={item.title}>
                    {item.subItems.map((subItem) => (
                      <Menu.Item className="Sidebar-menu-item" key={subItem.key}>
                        {subItem.title}
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                );
              }

              if (isSkewItem) {
                return (
                  <Menu.Item className="Sidebar-menu-item" key={item.key}>
                    <div className="Sidebar-menu-item-skew">{item.title}</div>
                  </Menu.Item>
                );
              }

              return (
                <Menu.Item icon={item.icon} className="Sidebar-menu-item" key={item.key}>
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
              className="Sidebar-item-subcrible-link flex items-center"
              rel="noreferrer"
            >
              <Icon name={EIconName.Facebook} />
              Facebook
            </a>
            <a
              href="https://google.com.vn"
              target="_blank"
              className="Sidebar-item-subcrible-link flex items-center"
              rel="noreferrer"
            >
              <Icon name={EIconName.Instagram} />
              Instagram
            </a>
            <a
              href="https://google.com.vn"
              target="_blank"
              className="Sidebar-item-subcrible-link flex items-center"
              rel="noreferrer"
            >
              <Icon name={EIconName.Edit} />
              Đăng ký tư vấn
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
