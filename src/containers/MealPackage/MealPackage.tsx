import React, { useState } from 'react';

import MealPackageBox from '@/components/MealPackageBox';
import ImageMealPackage from '@/assets/images/image-meal-package.png';
import { TMealPackageProps } from './MealPackage.types';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import './MealPackage.scss';

const MealPackage: React.FC<TMealPackageProps> = ({ onNext, onBack, onClickDetail }) => {
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
    <div className="MealPackage">
      {onBack && (
        <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <div className="MealPackage-title">Đăng ký gói lịch ăn / uống</div>
      <div className="MealPackage-main flex flex-wrap justify-between">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <MealPackageBox
            key={item}
            image={ImageMealPackage}
            title="Gói lịch ăn / uống 30 ngày"
            price="3.000.000đ"
            date="30 ngày"
            onRegister={handleOpenConfirmMealPackageModal}
            onClickDetail={onClickDetail}
          />
        ))}
      </div>

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

export default MealPackage;
