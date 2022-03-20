import React, { useState } from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct from '@/assets/images/image-product.png';
import Button from '@/components/Button';

import './CartDetail.scss';
import Modal from '@/components/Modal';

const CartDetail: React.FC = () => {
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
    handleCloseCancelOrderModal();
  };

  return (
    <div className="CartDetail style-container">
      <HeaderSkew title="Chi tiết đơn hàng" />

      <div className="CartDetail-main">
        <div className="CartDetail-main-list">
          {[1, 2].map((item) => (
            <div key={item} className="CartDetail-main-list-item flex">
              <div className="CartDetail-main-list-item-image">
                <img src={ImageProduct} alt="" />
              </div>
              <div className="CartDetail-main-list-item-info">
                <div className="CartDetail-main-list-item-info-title">Combo Secret of the man</div>
                <div className="CartDetail-main-list-item-info-category">
                  Phân loại: <span>Phân loại 1</span>
                </div>
                <div className="CartDetail-main-list-item-info-price flex justify-between">
                  900.000đ
                  <span className="CartDetail-main-list-item-info-amount">Số lượng: 1</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="CartDetail-main-group">
          <div className="CartDetail-subtitle">Địa chỉ của bạn</div>

          <div className="CartDetail-address">
            <div className="CartDetail-address-title">Vietnam Supplements</div>
            <div className="CartDetail-address-description">0966 123 456</div>
            <div className="CartDetail-address-description">Hà Nội</div>
            <div className="CartDetail-address-description">Số 123 Nguyễn Trãi, Thanh Xuân</div>
          </div>
        </div>
        <div className="CartDetail-main-group">
          <div className="CartDetail-main-group-row flex justify-between">
            <div className="CartDetail-text">Phương thức thanh toán</div>
            <div className="CartDetail-text">Ví VnSupplement</div>
          </div>
          <div className="CartDetail-main-group-row flex justify-between">
            <div className="CartDetail-text">Mã đơn hàng</div>
            <div className="CartDetail-text">ABC 123456</div>
          </div>
          <div className="CartDetail-main-group-row flex justify-between">
            <div className="CartDetail-text">Trạng thái đơn hàng</div>
            <div className="CartDetail-text success">Hoàn thành</div>
          </div>
          <div className="CartDetail-main-group-row flex justify-between">
            <div className="CartDetail-text">Tổng số tiền</div>
            <div className="CartDetail-text hightlight">900.000đ</div>
          </div>
        </div>

        <div className="CartDetail-main-group">
          <div className="CartDetail-main-group-row flex justify-between">
            <div className="CartDetail-text">Tích điểm</div>
            <div className="CartDetail-text success">+ 100 diểm</div>
          </div>
        </div>

        <div className="CartDetail-cancel flex justify-center">
          <Button type="ghost" title="Huỷ đơn hàng" shadow={false} onClick={handleOpenCancelOrderModal} />
        </div>
      </div>

      <Modal
        {...cancelOrderModalState}
        onClose={handleCloseCancelOrderModal}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseCancelOrderModal }}
        confirmButton={{ title: 'Đồng ý', onClick: handleSubmitCancelOrderModal }}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Thông báo
        </div>
        <div className="Modal-body-description">Bạn xác nhận huỷ đơn hàng hiện tại</div>
      </Modal>
    </div>
  );
};

export default CartDetail;
