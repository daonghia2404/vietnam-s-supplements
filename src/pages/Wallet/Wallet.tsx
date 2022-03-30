import React, { useCallback, useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';
import { formatMoneyVND } from '@/utils/functions';

import './Wallet.scss';
import { TParamsGetPaymentHistorys } from '@/services/api/payment-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getPaymentHistorysAction } from '@/redux/actions';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import PageLoading from '@/components/PageLoading';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';

const Wallet: React.FC = () => {
  const dispatch = useDispatch();

  const authState = useSelector((state: TRootState) => state.authReducer.user);
  const paymentHistorysState = useSelector((state: TRootState) => state.paymentReducer.paymentHistorys);

  const getPaymentHistorysLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPaymentControllerAction.GET_PAYMENT_HISTORYS],
  );

  const [getPaymentHistorysParamsRequest, setGetPaymentHistorysParamsRequest] = useState<TParamsGetPaymentHistorys>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const isEmpty = !paymentHistorysState?.records || paymentHistorysState?.records?.length === 0;

  const handleNavigateWalletDetail = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.WalletDetail('1')}`);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetPaymentHistorysParamsRequest({
      ...getPaymentHistorysParamsRequest,
      page,
      pageSize: pageSize || getPaymentHistorysParamsRequest.pageSize,
    });
  };

  const getPaymentHistorysData = useCallback(() => {
    dispatch(getPaymentHistorysAction.request(getPaymentHistorysParamsRequest));
  }, [dispatch, getPaymentHistorysParamsRequest]);

  useEffect(() => {
    getPaymentHistorysData();
  }, [getPaymentHistorysData]);

  return (
    <div className="Wallet style-container">
      {getPaymentHistorysLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Ví của tôi" />
          <div className="Wallet-main">
            <div className="Wallet-card flex items-center justify-between">
              <div className="Wallet-card-item">
                Ví của tôi
                <div className="Wallet-card-item-value flex items-center">
                  <span>VNĐ</span>
                  {formatMoneyVND({ amount: authState?.money || 0 })}
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

              {isEmpty ? (
                <EmptyBox title="Chưa có lịch sử thanh toán" />
              ) : (
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
              )}
            </div>
          </div>

          <div className="Wallet-pagination flex justify-center">
            <Pagination
              page={getPaymentHistorysParamsRequest.page}
              pageSize={getPaymentHistorysParamsRequest.pageSize}
              total={paymentHistorysState?.total}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Wallet;
