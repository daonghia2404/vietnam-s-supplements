import React from 'react';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import { TSidebarData } from '@/containers/Sidebar/Sidebar.types';
import { TGetInfoResponse } from '@/services/api/auth-controller/types';
import { formatMoneyVND } from '@/utils/functions';
import { TCategoryResponse } from '@/services/api/category-controller/types';

type TResponseData = {
  categorys: TCategoryResponse[];
};

export const dataMenu = ({ categorys }: TResponseData): TSidebarData[] => {
  const subItemsProduct = categorys.map((item) => ({
    key: item.id,
    title: item.name,
    link: Paths.Category(item.id),
  }));

  return [
    { key: 'about-us', title: 'Về Chúng Tôi', link: Paths.AboutUs, subItems: [] },
    { key: 'library', title: 'Cẩm Nang', link: Paths.Handbooks, subItems: [] },
    {
      key: 'products',
      title: 'Sản Phẩm VNSUPPLEMENT',
      subItems: subItemsProduct,
      link: Paths.Categorys,
    },
    { key: 'news', title: 'Tin Tức', link: Paths.News, subItems: [] },
    {
      key: 'privacy',
      title: 'Chính Sách',
      link: '/',
      subItems: [
        { key: 'chinh-sach-bao-hanh-san-pham', title: 'Chính Sách Bảo Hành Sản Phẩm', link: Paths.PolicyProduct },
        { key: 'chinh-sach-hoan-tra', title: 'Chính Sách Hoàn Trả', link: Paths.PolicyReturn },
        {
          key: 'chinh-sach-bao-ve-thong-tin-ca-nhan-cua-nguoi-tieu-dung',
          title: 'Chính sách bảo vệ thông tin cá nhân của người tiêu dùng',
          link: Paths.PolicyInformation,
        },
        {
          key: 'nghia-vu-cua-nguoi-ban-va-nghia-vu-cua-khach-hang-trong-moi-giao-dich',
          title: 'Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch',
          link: Paths.PolicyDuty,
        },
        { key: 'cac-phuong-thuc-giao-hang', title: 'Các phương thức giao hàng', link: Paths.PolicyShipping },
      ],
    },
    { key: 'contact', title: 'Liên Hệ', link: Paths.Contact, subItems: [] },
    // { key: 'calendar', title: 'Lịch Ăn Uống', link: `${LayoutPaths.Admin}${Paths.MealSchedule}`, subItems: [] },
    { key: 'rotation', title: 'Vòng Quay', link: `${LayoutPaths.Admin}${Paths.Wheels}`, subItems: [] },
    {
      key: 'auth',
      title: 'Đăng nhập - Đăng ký',
      link: `${LayoutPaths.Auth}${Paths.Login}`,
      subItems: [],
      isSkew: true,
      notShowAuth: true,
    },
  ];
};

export const dataProfileMenu = (authInfo?: TGetInfoResponse): TSidebarData[] => [
  {
    key: 'personal-information',
    title: 'Thông tin cá nhân',
    link: `${LayoutPaths.Profile}${Paths.ProfileInformation}`,
    subItems: [],
    icon: <Icon name={EIconName.User} />,
  },
  {
    key: 'rank',
    title: 'Hạng của bạn',
    link: `${LayoutPaths.Profile}${Paths.Rank}`,
    subItems: [],
    suffix: String(authInfo?.rank || ''),
    icon: <Icon name={EIconName.Medal} color={EIconColor.BUDDHA_GOLD} />,
  },
  {
    key: 'my-wallet',
    title: 'Ví của tôi',
    link: `${LayoutPaths.Profile}${Paths.Wallet}`,
    subItems: [],
    icon: <Icon name={EIconName.CreditCard} />,
    suffix: formatMoneyVND({ amount: authInfo?.money || 0, showSuffix: true }),
  },
  {
    key: 'order-history',
    title: 'Lịch sử đơn hàng',
    link: `${LayoutPaths.Profile}${Paths.Cart}`,
    subItems: [],
    icon: <Icon name={EIconName.History} />,
  },
  // {
  //   key: 'exercise-package',
  //   title: 'Bài tập đã mua',
  //   link: `${LayoutPaths.Profile}${Paths.ExerciseBought}`,
  //   subItems: [],
  //   icon: <Icon name={EIconName.Gym} />,
  // },
  {
    key: 'history-rotation',
    title: 'Lịch sử vòng quay',
    link: `${LayoutPaths.Profile}${Paths.HistoryRotation}`,
    subItems: [],
    icon: <Icon name={EIconName.Wheel} />,
  },
  {
    key: 'favorite-product',
    title: 'Sản phẩm yêu thích',
    link: `${LayoutPaths.Profile}${Paths.FavoriteProducts}`,
    subItems: [],
    icon: <Icon name={EIconName.Heart} />,
  },
  {
    key: 'code',
    title: 'Mã giới thiệu',
    link: `${LayoutPaths.Profile}${Paths.ReferralCode}`,
    subItems: [],
    icon: <Icon name={EIconName.Users} />,
  },
  {
    key: 'change-password',
    title: 'Đổi mật khẩu',
    link: `${LayoutPaths.Profile}${Paths.ChangePasswordAccount}`,
    subItems: [],
    icon: <Icon name={EIconName.Lock} />,
  },
  {
    key: 'logout',
    title: 'Đăng xuất',
    subItems: [],
    isAction: true,
    icon: <Icon name={EIconName.Logout} />,
  },
];
