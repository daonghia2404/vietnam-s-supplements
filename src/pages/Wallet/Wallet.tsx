import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';

import './Wallet.scss';

const Wallet: React.FC = () => {
  const handleNavigateWalletDetail = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.WalletDetail('1')}`);
  };

  return (
    <div className="Wallet style-container">
      <HeaderSkew title="Ví của tôi" />
      <div className="Wallet-main">
        <div className="Wallet-card flex items-center justify-between">
          <div className="Wallet-card-item">
            Ví của tôi
            <div className="Wallet-card-item-value flex items-center">
              <span>VNĐ</span>
              240.000
            </div>
          </div>
          <div className="Wallet-card-item">
            <Button
              size="small"
              title="Nạp thêm"
              type="ghost"
              iconName={EIconName.Plus}
              reverse
              link={`${LayoutPaths.Profile}${Paths.WalletRecharge}`}
            />
          </div>
        </div>

        <div className="Wallet-history">
          <div className="Wallet-history-header">
            <div className="Wallet-history-header-title">Lịch sử thanh toán</div>
          </div>

          <div className="Wallet-history-body">
            <div className="Wallet-history-body-item" onClick={handleNavigateWalletDetail}>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text warning">Đang giao dịch</div>
                <div className="Wallet-history-body-item-row-text">ABC123</div>
              </div>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text">Thanh toán đơn hàng ABC123</div>
              </div>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text error bold">-3.000.000đ</div>
                <div className="Wallet-history-body-item-row-text">08:00 - 20/11/2021</div>
              </div>
            </div>

            <div className="Wallet-history-body-item" onClick={handleNavigateWalletDetail}>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text success">Hoàn thành</div>
                <div className="Wallet-history-body-item-row-text">ABC123</div>
              </div>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text">Nạp ví qua chuyển khoản ngân hàng</div>
              </div>
              <div className="Wallet-history-body-item-row flex justify-between">
                <div className="Wallet-history-body-item-row-text success bold">+3.000.000đ</div>
                <div className="Wallet-history-body-item-row-text">08:00 - 20/11/2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
