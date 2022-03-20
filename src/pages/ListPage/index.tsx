import React from 'react';
import { Link } from '@reach/router';

import { LayoutPaths, Paths } from '@/pages/routers';

const ListPage: React.FC = () => {
  const dataListPage = [
    { label: 'Trang chủ', link: `${LayoutPaths.Guest}` },

    { label: 'Đăng nhập', link: `${LayoutPaths.Auth}` },
    { label: 'Đăng ký', link: `${LayoutPaths.Auth}${Paths.Register}` },
    { label: 'Xác thực tài khoản', link: `${LayoutPaths.Auth}${Paths.AccountVerification}` },
    { label: 'Quên mật khẩu', link: `${LayoutPaths.Auth}${Paths.ForgotPassword}` },
    { label: 'Đổi mật khẩu (xác thực)', link: `${LayoutPaths.Auth}${Paths.ChangePasswordCode}` },

    { label: 'Cập nhật thông tin cá nhân', link: `${LayoutPaths.Admin}${Paths.UpdateProfile}` },
    { label: 'Vòng quay', link: `${LayoutPaths.Admin}${Paths.Wheels}` },
    { label: 'Chi tiết vòng quay', link: `${LayoutPaths.Admin}${Paths.WheelDetail('1')}` },
    { label: 'Lịch ăn uống', link: `${LayoutPaths.Admin}${Paths.MealSchedule}` },
    { label: 'Khởi tạo lịch ăn uống', link: `${LayoutPaths.Admin}${Paths.MealScheduleConfig}` },
    { label: 'Bài tập', link: `${LayoutPaths.Admin}${Paths.Exercise}` },
    { label: 'Chi tiết bài tập', link: `${LayoutPaths.Admin}${Paths.ExerciseDetail('1')}` },

    { label: 'Thông tin cá nhân', link: `${LayoutPaths.Profile}${Paths.ProfileInformation}` },
    { label: 'Giỏ hàng', link: `${LayoutPaths.Profile}${Paths.Cart}` },
    { label: 'Chi tiết giỏ hàng', link: `${LayoutPaths.Profile}${Paths.CartDetail('1')}` },
    { label: 'Hạng của bạn', link: `${LayoutPaths.Profile}${Paths.Rank}` },
    { label: 'Sản phẩm yêu thích', link: `${LayoutPaths.Profile}${Paths.FavoriteProducts}` },
    { label: 'Mã giới thiệu', link: `${LayoutPaths.Profile}${Paths.ReferralCode}` },
    { label: 'Đổi mật khẩu', link: `${LayoutPaths.Profile}${Paths.ChangePasswordAccount}` },
    { label: 'Lịch sử vòng quay', link: `${LayoutPaths.Profile}${Paths.HistoryRotation}` },
    { label: 'Ví của tôi', link: `${LayoutPaths.Profile}${Paths.Wallet}` },
    { label: 'Nạp tiền vào ví', link: `${LayoutPaths.Profile}${Paths.WalletRecharge}` },
    { label: 'Chi tiết giao dịch', link: `${LayoutPaths.Profile}${Paths.WalletDetail('1')}` },
  ];
  return (
    <div>
      {dataListPage.map((item) => (
        <div>
          <Link to={item.link}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
