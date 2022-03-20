import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import LogoVietcombank from '@/assets/images/logo-vietcombank.png';
import { LayoutPaths, Paths } from '@/pages/routers';

import './WalletDetail.scss';

const WalletDetail: React.FC = () => {
  const handleNavigateWallet = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
  };
  return (
    <div className="WalletDetail style-container">
      <HeaderSkew title="Thông tin nạp tiền" />

      <div className="WalletDetail-back flex items-center" onClick={handleNavigateWallet}>
        <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
        Quay lại
      </div>
      <div className="WalletDetail-main">
        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Phương thức thanh toán</div>
            <div className="WalletDetail-text">Chuyển khoản</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Mã nạp</div>
            <div className="WalletDetail-text">ABC123</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Trạng thái đơn hàng</div>
            <div className="WalletDetail-text warning">Đang giao dịch</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Số tiền nạp</div>
            <div className="WalletDetail-text hightlight bold">900.000đ</div>
          </div>
        </div>

        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text bold">Thông tin chuyển khoản</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Tên ngân hàng</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">
              <img src={LogoVietcombank} alt="" />
              Vietcombank
            </div>
            <div className="WalletDetail-text hightlight flex items-center copy">
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Số tài khoản</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">0031 000 123 456</div>
            <div className="WalletDetail-text hightlight flex items-center copy">
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Chủ tài khoản</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Công ty cổ phần VN Supplements</div>
            <div className="WalletDetail-text hightlight flex items-center copy">
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Nội dung chuyển khoản</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text">Naptien 0031 000 123 456</div>
            <div className="WalletDetail-text hightlight flex items-center copy">
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        <div className="WalletDetail-group">
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text bold">Lưu ý</div>
          </div>
          <div className="WalletDetail-group-row flex justify-between">
            <div className="WalletDetail-text gray">0031 000 123 456</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetail;
