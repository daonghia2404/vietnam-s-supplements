import React, { useState } from 'react';

import ImageExercisePackageDetail from '@/assets/images/image-exercise-detail.png';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';

import { TExercisePackageDetailProps } from './ExercisePackageDetail.types';

import './ExercisePackageDetail.scss';

const ExercisePackageDetail: React.FC<TExercisePackageDetailProps> = ({ onBack, onNext }) => {
  const [confirmExercisePackageModalState, setConfirmExercisePackageModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [paymentModalState, setPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenConfirmExercisePackageModal = (): void => {
    setConfirmExercisePackageModalState({
      visible: true,
    });
  };

  const handleCloseConfirmExercisePackageModal = (): void => {
    setConfirmExercisePackageModalState({
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

  const handleConfirmExercisePackageModalSubmit = (): void => {
    handleCloseConfirmExercisePackageModal();
    handleOpenPaymentModal();
  };

  const handleSubmit = (): void => {
    onNext?.();
    handleClosePaymentModal();
  };

  return (
    <div className="ExercisePackageDetail">
      {onBack && (
        <div className="ExercisePackageDetail-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <div className="ExercisePackageDetail-title">Thông tin gói</div>
      <div className="ExercisePackageDetail-image">
        <img src={ImageExercisePackageDetail} alt="" />
      </div>

      <div className="ExercisePackageDetail-header">
        <div className="ExercisePackageDetail-name">Gói PT bổ trợ thể thao</div>
        <div className="ExercisePackageDetail-price">
          <span>3.000.000đ</span> / 30 ngày
        </div>
      </div>

      <div className="ExercisePackageDetail-subtitle">Thông tin gói</div>
      <div className="ExercisePackageDetail-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>

      <div className="ExercisePackageDetail-action flex items-center flex-wrap">
        <div className="ExercisePackageDetail-action-item flex justify-between items-center">
          <span>Mức giá</span>
          <span>
            30 ngày / <strong>3.000.000đ</strong>
          </span>
        </div>
        <div className="ExercisePackageDetail-action-item">
          <Button title="Mua Ngay" type="primary" onClick={handleOpenConfirmExercisePackageModal} />
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
        {...confirmExercisePackageModalState}
        confirmButton={{ title: 'Thanh toán', onClick: handleConfirmExercisePackageModalSubmit }}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseConfirmExercisePackageModal }}
        onClose={handleCloseConfirmExercisePackageModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Xác nhận thanh toán
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          Gói PT bổ trợ thể thao: <strong>3.000.000đ</strong>
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

export default ExercisePackageDetail;
