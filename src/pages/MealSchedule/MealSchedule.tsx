import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import MealScheduleOverview from '@/containers/MealScheduleOverview';
import ImageExercise from '@/assets/images/image-exercise.png';
import ExercisePackageBox from '@/components/ExercisePackageBox';
import Button from '@/components/Button';
import { LayoutPaths, Paths } from '@/pages/routers';

import './MealSchedule.scss';
import Modal from '@/components/Modal';

const MealSchedule: React.FC = () => {
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

  const handleNavigateExercisePackageDetail = (id: string): void => {
    navigate(`${LayoutPaths.Admin}${Paths.ExerciseDetail(id)}`);
  };

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

  return (
    <div className="MealSchedule style-container">
      <HeaderSkew title="Lịch Ăn Uống" />

      <div className="MealSchedule-main">
        <MealScheduleOverview />

        <div className="MealSchedule-group">
          <div className="MealSchedule-group-header">Bài tập ngày 24/11/2021</div>
          <div className="MealSchedule-group-body">
            <div className="MealSchedule-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div>

            <div className="MealSchedule-expired expire">
              <div className="MealSchedule-expired-title">Ngày hết hạn: 24/12/2021</div>
              <div className="MealSchedule-expired-cta">
                <Button type="primary" title="Gia hạn ngay" danger />
              </div>
            </div>
          </div>
        </div>

        <div className="MealSchedule-group">
          <div className="MealSchedule-group-header flex items-center justify-between">
            <span>Gói tập bổ trợ</span>
            <Link to={`${LayoutPaths.Admin}${Paths.Exercise}`}>Xem tất cả</Link>
          </div>

          <div className="MealSchedule-group-body flex flex-wrap justify-between">
            {[1, 2, 3, 4].map((item) => (
              <div className="MealSchedule-group-body-item" key={item}>
                <ExercisePackageBox
                  title="Gói PT bổ trợ thể thao"
                  description="Lorem Ipsum is simply dummy text of the printing."
                  image={ImageExercise}
                  onClickDetail={(): void => handleNavigateExercisePackageDetail(String(item))}
                  onBuy={handleOpenConfirmExercisePackageModal}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="MealSchedule-group">
          <div className="MealSchedule-group-header flex items-center justify-between">
            <span>Gói PT online</span>
            <Link to={`${LayoutPaths.Admin}${Paths.Exercise}`}>Xem tất cả</Link>
          </div>

          <div className="MealSchedule-group-body flex flex-wrap justify-between">
            {[1, 2, 3, 4].map((item) => (
              <div className="MealSchedule-group-body-item" key={item}>
                <ExercisePackageBox
                  title="Gói PT online"
                  description="Lorem Ipsum is simply dummy text of the printing."
                  image={ImageExercise}
                  onClickDetail={(): void => handleNavigateExercisePackageDetail(String(item))}
                  onBuy={handleOpenConfirmExercisePackageModal}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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

export default MealSchedule;
