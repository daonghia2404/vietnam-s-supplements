import React, { useCallback, useEffect, useState } from 'react';
import { navigate, useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { cancelOrderAction, getAddressAction, getOrderAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import PageLoading from '@/components/PageLoading';
import { formatMoneyVND, showNotification } from '@/utils/functions';
import { dataPaymentMethodOptions } from '@/pages/Carts/Carts.data';
import { cartFilterTabOptions } from '@/pages/Cart/Cart.data';
import { EOrderStatus } from '@/services/api/order-controller/enums';
import { ETypeNotification } from '@/common/enums';
import { LayoutPaths, Paths } from '@/pages/routers';

import './CartDetail.scss';

const CartDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const getOrderLoading = useSelector((state: TRootState) => state.loadingReducer[EOrderControllerAction.GET_ORDER]);
  const cancelOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EOrderControllerAction.CANCEL_ORDER],
  );
  const orderState = useSelector((state: TRootState) => state.orderReducer.order);
  const addressState = useSelector((state: TRootState) => state.addressReducer);

  const isAvaiableCancelOrder = [EOrderStatus.PENDING].includes(Number(orderState?.status) as EOrderStatus);

  const [cancelOrderModalState, setCancelOrderModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenCancelOrderModal = (): void => {
    setCancelOrderModalState({
      visible: true,
    });
  };

  const handleCloseCancelOrderModal = (): void => {
    setCancelOrderModalState({
      visible: false,
    });
  };

  const handleSubmitCancelOrderModal = (): void => {
    dispatch(cancelOrderAction.request(id, handleCancelOrderSuccess));
  };

  const handleCancelOrderSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Huỷ đơn hàng thành công');
    handleCloseCancelOrderModal();
    navigate(`${LayoutPaths.Profile}${Paths.Cart}`);
  };

  const getCartDetailData = useCallback(() => {
    if (id) dispatch(getOrderAction.request(id));
  }, [dispatch, id]);

  const getAddressData = useCallback(() => {
    dispatch(getAddressAction.request({ districtCode: null, cityCode: null }));
  }, [dispatch]);

  const getAddressWithExistedCity = useCallback((): void => {
    if (orderState?.city) dispatch(getAddressAction.request({ cityCode: orderState?.city, districtCode: null }));
  }, [orderState, dispatch]);

  useEffect(() => {
    getAddressWithExistedCity();
  }, [getAddressWithExistedCity]);

  useEffect(() => {
    getAddressData();
  }, [getAddressData]);

  useEffect(() => {
    getCartDetailData();
  }, [getCartDetailData]);

  return (
    <div className="CartDetail style-container">
      {getOrderLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Chi tiết đơn hàng" />

          <div className="CartDetail-main">
            <div className="CartDetail-main-list">
              {orderState?.cart?.items?.map((item) => (
                <div key={item.id} className="CartDetail-main-list-item flex">
                  <div className="CartDetail-main-list-item-image">
                    <img src={item.product.image} alt="" />
                  </div>
                  <div className="CartDetail-main-list-item-info">
                    <div className="CartDetail-main-list-item-info-title">{item.product.name}</div>
                    <div className="CartDetail-main-list-item-info-category">
                      Phân loại: <span>{item.product.category.name}</span>
                    </div>
                    <div className="CartDetail-main-list-item-info-price flex justify-between">
                      {formatMoneyVND({ amount: item.product.price, showSuffix: true })}
                      <span className="CartDetail-main-list-item-info-amount">Số lượng: {item.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="CartDetail-main-group">
              <div className="CartDetail-subtitle">Địa chỉ của bạn</div>

              <div className="CartDetail-address">
                <div className="CartDetail-address-title">{orderState?.namereceiver}</div>
                <div className="CartDetail-address-description">{orderState?.phone}</div>
                <div className="CartDetail-address-description">
                  {addressState.district.find((item) => item.value === orderState?.district)?.label},{' '}
                  {addressState.city.find((item) => item.value === orderState?.city)?.label}
                </div>
                <div className="CartDetail-address-description">{orderState?.address}</div>
              </div>
            </div>
            <div className="CartDetail-main-group">
              <div className="CartDetail-main-group-row flex justify-between">
                <div className="CartDetail-text">Phương thức thanh toán</div>
                <div className="CartDetail-text">
                  {dataPaymentMethodOptions.find((item) => item.value === orderState?.typePayment)?.label}
                </div>
              </div>
              <div className="CartDetail-main-group-row flex justify-between">
                <div className="CartDetail-text">Mã đơn hàng</div>
                <div className="CartDetail-text">{orderState?.orderCode}</div>
              </div>
              <div className="CartDetail-main-group-row flex justify-between">
                <div className="CartDetail-text">Trạng thái đơn hàng</div>
                <div
                  className={classNames(
                    'CartDetail-text',
                    cartFilterTabOptions.find((item) => item.value === Number(orderState?.status))?.color,
                  )}
                >
                  {cartFilterTabOptions.find((item) => item.value === Number(orderState?.status))?.label}
                </div>
              </div>
              <div className="CartDetail-main-group-row flex justify-between">
                <div className="CartDetail-text">Tổng số tiền</div>
                <div className="CartDetail-text hightlight">
                  {formatMoneyVND({ amount: orderState?.totalprice || 0, showSuffix: true })}
                </div>
              </div>
            </div>

            <div className="CartDetail-main-group">
              <div className="CartDetail-main-group-row flex justify-between">
                <div className="CartDetail-text">Tích điểm</div>
                <div className="CartDetail-text success">+ {orderState?.point || 0} diểm</div>
              </div>
            </div>

            {isAvaiableCancelOrder && (
              <div className="CartDetail-cancel flex justify-center">
                <Button type="ghost" title="Huỷ đơn hàng" shadow={false} onClick={handleOpenCancelOrderModal} />
              </div>
            )}
          </div>
        </>
      )}

      <Modal
        {...cancelOrderModalState}
        onClose={handleCloseCancelOrderModal}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseCancelOrderModal, disabled: cancelOrderLoading }}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitCancelOrderModal, loading: cancelOrderLoading }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Thông báo
        </div>
        <div className="Modal-body-description">Bạn xác nhận huỷ đơn hàng hiện tại ?</div>
      </Modal>
    </div>
  );
};

export default CartDetail;
