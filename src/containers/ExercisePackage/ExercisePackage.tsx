import React, { useState } from 'react';
import { navigate } from '@reach/router';

import ExercisePackageBox from '@/components/ExercisePackageBox';
import ImageExercisePackage from '@/assets/images/image-exercise.png';
import { TExercisePackageProps } from './ExercisePackage.types';
import Modal from '@/components/Modal';
import { LayoutPaths, Paths } from '@/pages/routers';

import './ExercisePackage.scss';
import EmptyBox from '@/components/EmptyBox';

const ExercisePackage: React.FC<TExercisePackageProps> = ({ title, dataSource = [] }) => {
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

  const isEmpty = !dataSource || dataSource.length === 0;

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
    handleClosePaymentModal();
  };

  const handleNavigateExercisePackageDetail = (id: string): void => {
    navigate(`${LayoutPaths.Admin}${Paths.ExerciseDetail(id)}`);
  };

  return (
    <div className="ExercisePackage">
      <div className="ExercisePackage-title">{title}</div>
      {isEmpty ? (
        <EmptyBox title="Bạn chưa mua gói tập nào" />
      ) : (
        <div className="ExercisePackage-main flex flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ExercisePackageBox
              key={item}
              image={ImageExercisePackage}
              title="Gói PT bổ trợ thể thao"
              description="Lorem Ipsum is simply dummy text of the printing."
              onBuy={handleOpenConfirmExercisePackageModal}
              onClickDetail={(): void => handleNavigateExercisePackageDetail(String(item))}
            />
          ))}
        </div>
      )}

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

export default ExercisePackage;
