import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import ExercisePackageBox from '@/components/ExercisePackageBox';
import { TExercisePackageProps } from './ExercisePackage.types';
import Modal from '@/components/Modal';
import { LayoutPaths, Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';
import Pagination from '@/components/Pagination';
import { TPackExerciseResponse } from '@/services/api/pack-exercise-controller/types';
import { formatMoneyVND } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { buyPackExerciseAction, buyPackPtOnlineAction } from '@/redux/actions';
import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';

import './ExercisePackage.scss';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

const ExercisePackage: React.FC<TExercisePackageProps> = ({
  type,
  owner,
  title,
  paginate,
  dataSource = [],
  onPageChange,
}) => {
  const dispatch = useDispatch();
  const isPackExercisePage = type === ETypeExercisePackage.EXERCISE;
  const isPackPtOnlinePage = type === ETypeExercisePackage.PT_ONLINE;

  const authState = useSelector((state: TRootState) => state.authReducer.user);
  const buyPackExerciseLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.BUY_PACK_EXERCISE],
  );
  const buyPackPtOnlineLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE],
  );

  const mainTitle = isPackExercisePage ? 'tập' : 'Pt Online';

  const loading = buyPackExerciseLoading || buyPackPtOnlineLoading;

  const [confirmExercisePackageModalState, setConfirmExercisePackageModalState] = useState<{
    visible: boolean;
    data?: any;
  }>({
    visible: false,
  });

  const [paymentModalState, setPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [failedPaymentModalState, setFailedPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const isEmpty = !dataSource || dataSource.length === 0;

  const handleOpenConfirmExercisePackageModal = (data: TPackExerciseResponse): void => {
    setConfirmExercisePackageModalState({
      visible: true,
      data,
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

  const handleOpenFailedPaymentModal = (): void => {
    setFailedPaymentModalState({ visible: true });
  };
  const handleCloseFailedPaymentModal = (): void => {
    setFailedPaymentModalState({ visible: false });
  };
  const handleSubmitFailedPaymentModal = (): void => {
    handleCloseFailedPaymentModal();
    navigate(`${LayoutPaths.Profile}${Paths.Wallet}`);
  };

  const handleConfirmExercisePackageModalSubmit = (): void => {
    if (confirmExercisePackageModalState.data) {
      if (isPackExercisePage) {
        dispatch(
          buyPackExerciseAction.request(
            { packExerciseId: confirmExercisePackageModalState.data.id },
            handleBuyPackExerciseSuccess,
            handleBuyPackExerciseFailed,
          ),
        );
      }

      if (isPackPtOnlinePage) {
        dispatch(
          buyPackPtOnlineAction.request(
            confirmExercisePackageModalState.data.id,
            handleBuyPackExerciseSuccess,
            handleBuyPackExerciseFailed,
          ),
        );
      }
    }
  };

  const handleBuyPackExerciseSuccess = (): void => {
    handleCloseConfirmExercisePackageModal();
    handleOpenPaymentModal();
  };
  const handleBuyPackExerciseFailed = (): void => {
    handleCloseConfirmExercisePackageModal();
    handleOpenFailedPaymentModal();
  };

  const handleSubmit = (): void => {
    handleClosePaymentModal();
  };

  const handleNavigateExercisePackageDetail = (data: TPackExerciseResponse): void => {
    if (isPackExercisePage) navigate(`${LayoutPaths.Admin}${Paths.ExerciseDetail(data.id)}`);
    if (isPackPtOnlinePage) navigate(`${LayoutPaths.Admin}${Paths.ExerciseOnlineDetail(data.id)}`);
  };

  return (
    <div className="ExercisePackage">
      <div className="ExercisePackage-title">{title}</div>
      {isEmpty ? (
        <EmptyBox title={`Bạn chưa mua gói ${mainTitle} nào`} />
      ) : (
        <>
          <div className="ExercisePackage-main flex flex-wrap justify-between">
            {dataSource.map((item) => (
              <ExercisePackageBox
                key={item.id}
                image={item.image}
                owner={owner}
                title={item.title || item.name}
                description={item.description}
                onBuy={(): void => handleOpenConfirmExercisePackageModal(item)}
                onClickDetail={(): void => handleNavigateExercisePackageDetail(item)}
              />
            ))}
          </div>

          <div className="ExercisePackage-pagination flex justify-center">
            <Pagination {...paginate} onChange={onPageChange} />
          </div>
        </>
      )}

      <Modal
        {...confirmExercisePackageModalState}
        confirmButton={{
          title: 'Thanh toán',
          onClick: handleConfirmExercisePackageModalSubmit,
          loading,
        }}
        cancelButton={{
          title: 'Huỷ bỏ',
          onClick: handleCloseConfirmExercisePackageModal,
          disabled: loading,
        }}
        onClose={handleCloseConfirmExercisePackageModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Xác nhận thanh toán
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          {confirmExercisePackageModalState.data?.title || confirmExercisePackageModalState.data?.name}:{' '}
          <strong>
            {formatMoneyVND({ amount: confirmExercisePackageModalState.data?.price || 0, showSuffix: true })}
          </strong>
        </div>
        <div className="Modal-body-link">Thanh toán qua ví của tôi</div>
      </Modal>

      <Modal {...paymentModalState} confirmButton={{ title: 'Đồng ý', onClick: handleSubmit }} onClose={handleSubmit}>
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Thanh toán thành công
        </div>
        <div className="Modal-body-description">Bạn đã mua gói {mainTitle} thành công</div>
      </Modal>

      <Modal
        {...failedPaymentModalState}
        onClose={handleCloseFailedPaymentModal}
        confirmButton={{ title: 'Nạp thêm', onClick: handleSubmitFailedPaymentModal }}
        cancelButton={{ title: 'Huỷ bỏ', onClick: handleCloseFailedPaymentModal }}
      >
        <div className="Modal-body-subtitle" style={{ marginBottom: '1.5rem' }}>
          Số dư của bạn: <strong>{formatMoneyVND({ amount: authState?.money || 0, showSuffix: true })}</strong>
        </div>
        <div className="Modal-body-description">
          Số dư ví của bạn không đủ để thanh toán gói {mainTitle}. Xin vui lòng nạp thêm!
        </div>
      </Modal>
    </div>
  );
};

export default ExercisePackage;
