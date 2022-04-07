import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { EIconName } from '@/components/Icon';
import { LayoutPaths, Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';
import { formatISODateToDateTime, formatMoneyVND } from '@/utils/functions';
import { TParamsGetPaymentHistorys } from '@/services/api/payment-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getPaymentHistorysAction } from '@/redux/actions';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import PageLoading from '@/components/PageLoading';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';
import { EPaymentStatus } from '@/services/api/payment-controller/enums';
import { dataAppotapayErrorCode } from '@/services/api/payment-controller/data';

import './Wallet.scss';

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

  // const handleNavigateWalletDetail = (data: TPaymentHistoryResponse): void => {
  //   navigate(`${LayoutPaths.Profile}${Paths.WalletDetail(data.id)}`);
  // };

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

          {getPaymentHistorysLoading ? (
            <PageLoading />
          ) : (
            <>
              {isEmpty ? (
                <EmptyBox title="Chưa có lịch sử thanh toán" />
              ) : (
                <div className="Wallet-history-body">
                  {paymentHistorysState?.records?.map((item) => {
                    const isSuccessPayment = item.status === EPaymentStatus.SUCCESS;
                    const errors = dataAppotapayErrorCode.find((error) => error.code === item.errrorCode);
                    return (
                      <div className="Wallet-history-body-item">
                        <div className="Wallet-history-body-item-row flex justify-between">
                          <div
                            className={classNames(
                              'Wallet-history-body-item-row-text',
                              { success: isSuccessPayment },
                              { error: !isSuccessPayment },
                            )}
                          >
                            {isSuccessPayment ? 'Hoàn thành' : 'Không thành công'}
                          </div>
                          <div className="Wallet-history-body-item-row-text">{item.appotapayTransId}</div>
                        </div>
                        <div className="Wallet-history-body-item-row flex justify-between">
                          <div className="Wallet-history-body-item-row-text">
                            {errors?.message || 'Lỗi không xác định, vui lòng kiểm tra lại giao dịch sau'}
                          </div>
                        </div>
                        <div className="Wallet-history-body-item-row flex justify-between">
                          <div
                            className={classNames(
                              'Wallet-history-body-item-row-text bold',
                              { success: isSuccessPayment },
                              { error: !isSuccessPayment },
                            )}
                          >
                            +{formatMoneyVND({ amount: item.money || 0, showSuffix: true })}
                          </div>
                          <div className="Wallet-history-body-item-row-text">
                            {formatISODateToDateTime(item.createdAt)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
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
    </div>
  );
};

export default Wallet;
