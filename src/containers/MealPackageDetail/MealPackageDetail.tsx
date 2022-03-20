import React, { useState } from 'react';

import ImageMealPackageDetail from '@/assets/images/image-meal-package-detail.png';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import { TMealPackageDetailProps } from './MealPackageDetail.types';
import './MealPackageDetail.scss';

const MealPackageDetail: React.FC<TMealPackageDetailProps> = ({ onBack, onNext }) => {
  const [confirmMealPackageModalState, setConfirmMealPackageModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [paymentModalState, setPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenConfirmMealPackageModal = (): void => {
    setConfirmMealPackageModalState({
      visible: true,
    });
  };

  const handleCloseConfirmMealPackageModal = (): void => {
    setConfirmMealPackageModalState({
      visible: false,
    });
  };

  const handleOpenPaymentModal = (): void => {
    setPaymentModalState({
      visible: true,
    });
  };

  const handleClosePaymentModal = (): void => {
    setPaymentModalState({
      visible: false,
    });
  };

  const handleConfirmMealPackageModalSubmit = (): void => {
    handleCloseConfirmMealPackageModal();
    handleOpenPaymentModal();
  };

  const handleSubmit = (): void => {
    onNext?.();
    handleClosePaymentModal();
  };

  return (
    <div className="MealPackageDetail">
      {onBack && (
        <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <div className="MealPackageDetail-title">Thông tin gói</div>
      <div className="MealPackageDetail-image">
        <img src={ImageMealPackageDetail} alt="" />
      </div>

      <div className="MealPackageDetail-header">
        <div className="MealPackageDetail-name">Gói lịch ăn / uống 30 ngày</div>
        <div className="MealPackageDetail-price">
          <span>3.000.000đ</span> / 30 ngày
        </div>
      </div>

      <div className="MealPackageDetail-subtitle">Thông tin gói</div>
      <div className="MealPackageDetail-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>

      <div className="MealPackageDetail-action flex items-center">
        <div className="MealPackageDetail-action-item flex justify-between items-center">
          <span>Mức giá</span>
          <span>
            30 ngày / <strong>3.000.000đ</strong>
          </span>
        </div>
        <div className="MealPackageDetail-action-item">
          <Button title="Mua Ngay" type="primary" onClick={handleOpenConfirmMealPackageModal} />
        </div>
      </div>

      {/* <Modal visible={false} confirmButton={{ title: 'Nạp thêm' }} cancelButton={{ title: 'Huỷ bỏ' }}>
        <div className="Modal-body-subtitle" style={{ marginBottom: '1.5rem' }}>
          Số dư của bạn: <strong>200.000 vnđ</strong>
        </div>
        <div className="Modal-body-description">
          Số dư ví của bạn không đủ để thanh toán gói tập. Xin vui lòng nạp thêm!
        </div>
      </Modal> */}

      <Modal
        {...confirmMealPackageModalState}
        confirmButton={{ title: 'Đồng ý', onClick: handleConfirmMealPackageModalSubmit }}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseConfirmMealPackageModal }}
        onClose={handleCloseConfirmMealPackageModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Xác nhận thanh toán
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          Gói lịch ăn / uống 30 ngày: <strong>3.000.000đ</strong>
        </div>
        <div className="Modal-body-link">Thanh toán qua ví của tôi</div>
      </Modal>

      <Modal {...paymentModalState} confirmButton={{ title: 'Đồng ý', onClick: handleSubmit }} onClose={handleSubmit}>
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Thanh toán thành công
        </div>
        <div className="Modal-body-description">
          Vui lòng nhập thông tin cơ thể để chúng tôi điều chỉnh thông tin phù hợp
        </div>
      </Modal>
    </div>
  );
};

export default MealPackageDetail;
