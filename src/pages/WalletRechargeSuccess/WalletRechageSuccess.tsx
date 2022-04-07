import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import classNames from 'classnames';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import { copyText, formatMoneyVND, getQueryParam, showNotification } from '@/utils/functions';
import { dataAppotapayErrorCode } from '@/services/api/payment-controller/data';
import { ETypeNotification } from '@/common/enums';

import './WalletRechageSuccess.scss';
import Button from '@/components/Button';

const WalletRechageSuccess: React.FC = () => {
  const amount = getQueryParam('amount');
  const currency = getQueryParam('currency');
  const orderId = getQueryParam('orderId');
  const bankCode = getQueryParam('bankCode');
  const paymentMethod = getQueryParam('paymentMethod');
  const appotapayTransId = getQueryParam('appotapayTransId');
  const errorCode = getQueryParam('errorCode');
  const message = getQueryParam('message');
  const transactionTs = getQueryParam('transactionTs');

  const statusPayment = dataAppotapayErrorCode.find((item) => item.code === errorCode);
  const isPaymentSuccess = statusPayment?.code === dataAppotapayErrorCode[0].code;

  const handleNavigateWallet = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
  };

  const handleCopyCode = (text: string | null): void => {
    if (text) {
      copyText(text);
      showNotification(ETypeNotification.SUCCESS, 'Sao chép thành công');
    }
  };

  useEffect(() => {
    if (!orderId || !appotapayTransId || !transactionTs) handleNavigateWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="WalletRechageSuccess style-container">
      <HeaderSkew title="Thanh Toán Thành Công" />
      <div className="WalletRechageSuccess-main">
        <div className="WalletRechageSuccess-group">
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Phương thức thanh toán</div>
            <div className="WalletRechageSuccess-text">{paymentMethod}</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Mã nạp</div>
            <div className="WalletRechageSuccess-text">{appotapayTransId}</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Trạng thái đơn hàng</div>
            <div
              className={classNames('WalletRechageSuccess-text', {
                success: isPaymentSuccess,
                error: !isPaymentSuccess,
              })}
            >
              {dataAppotapayErrorCode.find((item) => item.code === errorCode)?.message}
            </div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Số tiền nạp</div>
            <div className="WalletRechageSuccess-text hightlight bold">
              {formatMoneyVND({ amount: amount || 0 })} {currency}
            </div>
          </div>
        </div>

        <div className="WalletRechageSuccess-group">
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text bold">Thông tin chuyển khoản</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Tên ngân hàng</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text bold">{bankCode}</div>
            <div
              className="WalletRechageSuccess-text hightlight flex items-center copy"
              onClick={(): void => handleCopyCode(bankCode)}
            >
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        {/* <div className="WalletRechageSuccess-group">
              <div className="WalletRechageSuccess-group-row flex justify-between">
                <div className="WalletRechageSuccess-text">Số tài khoản</div>
              </div>
              <div className="WalletRechageSuccess-group-row flex justify-between">
                <div className="WalletRechageSuccess-text">0031 000 123 456</div>
                <div className="WalletRechageSuccess-text hightlight flex items-center copy">
                  <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
                  Sao chép
                </div>
              </div>
            </div> */}

        <div className="WalletRechageSuccess-group">
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Chủ tài khoản</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text bold">Công ty cổ phần VN Supplements</div>
            <div
              className="WalletRechageSuccess-text hightlight flex items-center copy"
              onClick={(): void => handleCopyCode('Công ty cổ phần VN Supplements')}
            >
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        <div className="WalletRechageSuccess-group">
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">Nội dung chuyển khoản</div>
          </div>
          <div className="WalletRechageSuccess-group-row flex justify-between">
            <div className="WalletRechageSuccess-text">{message}</div>
            <div
              className="WalletRechageSuccess-text hightlight flex items-center copy"
              onClick={(): void => handleCopyCode(message)}
            >
              <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
              Sao chép
            </div>
          </div>
        </div>

        {/* <div className="WalletRechageSuccess-group">
              <div className="WalletRechageSuccess-group-row flex justify-between">
                <div className="WalletRechageSuccess-text bold">Lưu ý</div>
              </div>
              <div className="WalletRechageSuccess-group-row flex justify-between">
                <div className="WalletRechageSuccess-text gray" />
              </div>
            </div> */}
      </div>

      <div className="WalletRechageSuccess-back flex justify-center">
        <Button type="ghost" title="Quay Lại" shadow={false} onClick={handleNavigateWallet} />
      </div>
    </div>
  );
};

export default WalletRechageSuccess;
