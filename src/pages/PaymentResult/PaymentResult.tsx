import React, { useEffect } from 'react';
import { navigate, useParams } from '@reach/router';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { copyText, formatMoneyVND, showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import Button from '@/components/Button';
import { getPaymentHistoryAction, uiActions } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import PageLoading from '@/components/PageLoading';

import './PaymentResult.scss';

const PaymentResult: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getPaymentHistoryLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPaymentControllerAction.GET_PAYMENT_HISTORY],
  );
  const paymentHistory = useSelector((state: TRootState) => state.paymentReducer.paymentHistory);
  const isPaymentSuccess = paymentHistory?.status === '1';

  const handleNavigateBack = (): void => {
    navigate(Paths.Home);
  };

  const handleCopyCode = (text: string | null): void => {
    if (text) {
      copyText(text);
      showNotification(ETypeNotification.SUCCESS, 'Sao chép thành công');
    }
  };

  useEffect(() => {
    if (!id) {
      handleNavigateBack();
    } else {
      dispatch(
        getPaymentHistoryAction.request(id, (response): void => {
          if (response.status === '1') {
            dispatch(uiActions.setCartsStorage([]));
          }
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  return (
    <div className="PaymentResult style-container">
      {getPaymentHistoryLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title={`Thanh Toán ${isPaymentSuccess ? 'Thành Công' : 'Thất Bại'}`} />
          <div className="PaymentResult-main">
            <div className="PaymentResult-group">
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text">Phương thức thanh toán</div>
                <div className="PaymentResult-text bold">Cổng thanh toán Appota</div>
              </div>
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text">Mã đơn hàng</div>
                <div className="PaymentResult-text">{id}</div>
              </div>
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text">Trạng thái đơn hàng</div>
                <div
                  className={classNames('PaymentResult-text', {
                    success: isPaymentSuccess,
                    error: !isPaymentSuccess,
                  })}
                >
                  Thanh Toán {isPaymentSuccess ? 'Thành Công' : 'Thất Bại'}
                </div>
              </div>
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text">Số tiền</div>
                <div className="PaymentResult-text hightlight bold">
                  {formatMoneyVND({ amount: paymentHistory?.money || 0 })}
                </div>
              </div>
            </div>

            <div className="PaymentResult-group">
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text">Chủ tài khoản</div>
              </div>
              <div className="PaymentResult-group-row flex justify-between">
                <div className="PaymentResult-text bold">Công ty cổ phần VN Supplements</div>
                <div
                  className="PaymentResult-text hightlight flex items-center copy"
                  onClick={(): void => handleCopyCode('Công ty cổ phần VN Supplements')}
                >
                  <Icon name={EIconName.Duplicate} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
                  Sao chép
                </div>
              </div>
            </div>
          </div>

          <div className="PaymentResult-back flex justify-center">
            <Button type="ghost" title="Quay Lại Trang Chủ" shadow={false} onClick={handleNavigateBack} />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentResult;
