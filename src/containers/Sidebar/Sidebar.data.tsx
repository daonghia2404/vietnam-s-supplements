import React from 'react';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

export const dataMenu = [
  { key: 'about-us', title: 'Về Chúng Tôi', link: '/', subItems: [] },
  { key: 'library', title: 'Cẩm Nang', link: '/', subItems: [] },
  {
    key: 'products',
    title: 'Sản Phẩm VNSUPPLEMENT',
    link: '/',
    subItems: [
      { key: 'phu-kien-the-thao', title: 'Phụ Kiện Thể Thao', link: '/' },
      { key: 'dung-cu-the-thao', title: 'Dụng Cụ Thể Thao', link: '/' },
    ],
  },
  { key: 'news', title: 'Tin Tức', link: '/', subItems: [] },
  {
    key: 'privacy',
    title: 'Chính Sách',
    link: '/',
    subItems: [
      { key: 'chinh-sach-bao-hanh-san-pham', title: 'Chính Sách Bảo Hành Sản Phẩm', link: '/' },
      { key: 'chinh-sach-hoan-tra', title: 'Chính Sách Hoàn Trả', link: '/' },
    ],
  },
  { key: 'contact', title: 'Liên Hệ', link: '/', subItems: [] },
  { key: 'calendar', title: 'Lịch Ăn Uống', link: '/', subItems: [] },
  { key: 'rotation', title: 'Vòng Quay', link: '/', subItems: [] },
  { key: 'auth', title: 'Đăng nhập - Đăng ký', link: '/', subItems: [], isSkew: true },
];

export const dataProfileMenu = [
  {
    key: 'personal-information',
    title: 'Thông tin cá nhân',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.User} />,
  },
  {
    key: 'rank',
    title: 'Hạng của bạn',
    link: '/',
    subItems: [],
    suffix: '1000 điểm',
    icon: <Icon name={EIconName.Medal} color={EIconColor.BUDDHA_GOLD} />,
  },
  {
    key: 'my-wallet',
    title: 'Ví của tôi',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.CreditCard} />,
    suffix: '240.000 đ',
  },
  { key: 'order-history', title: 'Lịch sử đơn hàng', link: '/', subItems: [], icon: <Icon name={EIconName.History} /> },
  {
    key: 'exercise-package',
    title: 'Bài tập đã mua',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Gym} />,
  },
  {
    key: 'history-rotation',
    title: 'Lịch sử vòng quay',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Wheel} />,
  },
  {
    key: 'favorite-product',
    title: 'Sản phẩm yêu thích',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Heart} />,
  },
  { key: 'code', title: 'Mã giới thiệu', link: '/', subItems: [], icon: <Icon name={EIconName.Users} /> },
  {
    key: 'change-password',
    title: 'Đổi mật khẩu',
    link: '/',
    subItems: [],
    icon: <Icon name={EIconName.Lock} />,
  },
];
