import React from 'react';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';

export const dataMenu = [
  { key: 'about-us', title: 'Về Chúng Tôi', link: '/', subItems: [], disabled: true },
  { key: 'library', title: 'Cẩm Nang', link: '/', subItems: [], disabled: true },
  {
    key: 'products',
    title: 'Sản Phẩm VNSUPPLEMENT',
    link: '/',
    subItems: [
      { key: 'phu-kien-the-thao', title: 'Phụ Kiện Thể Thao', link: '/' },
      { key: 'dung-cu-the-thao', title: 'Dụng Cụ Thể Thao', link: '/' },
    ],
    disabled: true,
  },
  { key: 'news', title: 'Tin Tức', link: '/', subItems: [], disabled: true },
  {
    key: 'privacy',
    title: 'Chính Sách',
    link: '/',
    subItems: [
      { key: 'chinh-sach-bao-hanh-san-pham', title: 'Chính Sách Bảo Hành Sản Phẩm', link: '/' },
      { key: 'chinh-sach-hoan-tra', title: 'Chính Sách Hoàn Trả', link: '/' },
    ],
    disabled: true,
  },
  { key: 'contact', title: 'Liên Hệ', link: '/', subItems: [], disabled: true },
  { key: 'calendar', title: 'Lịch Ăn Uống', link: '/', subItems: [], disabled: true },
  { key: 'rotation', title: 'Vòng Quay', link: `${LayoutPaths.Admin}${Paths.Wheels}`, subItems: [] },
  {
    key: 'auth',
    title: 'Đăng nhập - Đăng ký',
    link: `${LayoutPaths.Auth}${Paths.Login}`,
    subItems: [],
    isSkew: true,
  },
];

export const dataProfileMenu = [
  {
    key: 'personal-information',
    title: 'Thông tin cá nhân',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.User} />,
    disabled: true,
  },
  {
    key: 'rank',
    title: 'Hạng của bạn',
    link: '/',
    subItems: [],
    suffix: '1000 điểm',
    icon: <Icon name={EIconName.Medal} color={EIconColor.BUDDHA_GOLD} />,
    disabled: true,
  },
  {
    key: 'my-wallet',
    title: 'Ví của tôi',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.CreditCard} />,
    suffix: '240.000 đ',
    disabled: true,
  },
  {
    key: 'order-history',
    title: 'Lịch sử đơn hàng',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.History} />,
    disabled: true,
  },
  {
    key: 'exercise-package',
    title: 'Bài tập đã mua',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Gym} />,
    disabled: true,
  },
  {
    key: 'history-rotation',
    title: 'Lịch sử vòng quay',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Wheel} />,
    disabled: true,
  },
  {
    key: 'favorite-product',
    title: 'Sản phẩm yêu thích',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Heart} />,
    disabled: true,
  },
  {
    key: 'code',
    title: 'Mã giới thiệu',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Users} />,
    disabled: true,
  },
  {
    key: 'change-password',
    title: 'Đổi mật khẩu',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Lock} />,
    disabled: true,
  },
];
