import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, useParams } from '@reach/router';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import {
  buyPackExerciseAction,
  buyPackPtOnlineAction,
  getPackExerciseAction,
  getPackPtOnlineAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import PageLoading from '@/components/PageLoading';
import { formatMoneyVND } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

import { TExercisePackageDetailProps } from './ExercisePackageDetail.types';
import './ExercisePackageDetail.scss';
import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';

const ExercisePackageDetail: React.FC<TExercisePackageDetailProps> = ({ type, onBack }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isPackExercisePage = type === ETypeExercisePackage.EXERCISE;
  const isPackPtOnlinePage = type === ETypeExercisePackage.PT_ONLINE;

  const mainTitle = isPackExercisePage ? 'tập' : 'Pt Online';

  const authState = useSelector((state: TRootState) => state.authReducer.user);

  const packExerciseState = useSelector((state: TRootState) => state.packExerciseReducer.packExercise);
  const packPtOnlineState = useSelector((state: TRootState) => state.packPtOnlineReducer.packPtOnline);

  const packState: any = isPackExercisePage ? packExerciseState : packPtOnlineState;

  const getPackExerciseLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.GET_PACK_EXERCISE],
  );
  const buyPackExerciseLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.BUY_PACK_EXERCISE],
  );
  const buyPackPtOnlineLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE],
  );

  const loading = buyPackExerciseLoading || buyPackPtOnlineLoading;

  const [failedPaymentModalState, setFailedPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

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
    if (isPackExercisePage) {
      dispatch(
        buyPackExerciseAction.request(
          { packExerciseId: id },
          handleBuyPackExerciseSuccess,
          handleBuyPackExerciseFailed,
        ),
      );
    }

    if (isPackPtOnlinePage) {
      dispatch(buyPackPtOnlineAction.request(id, handleBuyPackExerciseSuccess, handleBuyPackExerciseFailed));
    }
  };

  const handleBuyPackExerciseSuccess = (): void => {
    handleCloseConfirmMealPackageModal();
    handleOpenPaymentModal();
  };

  const handleBuyPackExerciseFailed = (): void => {
    handleCloseConfirmMealPackageModal();
    handleOpenFailedPaymentModal();
  };

  const handleSubmit = (): void => {
    handleClosePaymentModal();
    navigate(`${LayoutPaths.Admin}${Paths.MealSchedule}`);
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

  useEffect(() => {
    if (id) {
      if (isPackExercisePage) dispatch(getPackExerciseAction.request(id));
      if (isPackPtOnlinePage) dispatch(getPackPtOnlineAction.request(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  return (
    <div className="ExercisePackageDetail">
      {getPackExerciseLoading ? (
        <PageLoading />
      ) : (
        <>
          {onBack && (
            <div className="ExercisePackageDetail-back flex items-center" onClick={onBack}>
              <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
              Quay lại
            </div>
          )}
          <div className="ExercisePackageDetail-title">Thông tin gói</div>
          <div className="ExercisePackageDetail-image">
            <img src={packState?.image} alt="" />
          </div>

          <div className="ExercisePackageDetail-header">
            <div className="ExercisePackageDetail-name">{packState?.title || packState?.name}</div>
            <div className="ExercisePackageDetail-price">
              <span>{formatMoneyVND({ amount: packState?.price || 0, showSuffix: true })}</span>{' '}
              {Boolean(packState?.prePrice) && (
                <del className="ExercisePackageDetail-pre-price">
                  {formatMoneyVND({ amount: packState?.prePrice || 0, showSuffix: true })}
                </del>
              )}
            </div>
          </div>

          <div className="ExercisePackageDetail-subtitle">Thông tin gói</div>
          <div className="ExercisePackageDetail-description">{packState?.description}</div>

          <div className="ExercisePackageDetail-action flex items-center flex-wrap">
            <div className="ExercisePackageDetail-action-item flex justify-between items-center">
              <span>Mức giá</span>
              <span>
                <strong>{formatMoneyVND({ amount: packState?.price || 0, showSuffix: true })}</strong>{' '}
                {Boolean(packState?.prePrice) && (
                  <del className="ExercisePackageDetail-pre-price">
                    {formatMoneyVND({ amount: packState?.prePrice || 0, showSuffix: true })}
                  </del>
                )}
              </span>
            </div>
            <div className="ExercisePackageDetail-action-item">
              <Button title="Mua Ngay" type="primary" onClick={handleOpenConfirmMealPackageModal} />
            </div>
          </div>
        </>
      )}

      <Modal
        {...confirmMealPackageModalState}
        confirmButton={{
          title: 'Đồng ý',
          onClick: handleConfirmMealPackageModalSubmit,
          loading,
        }}
        cancelButton={{
          title: 'Huỷ bỏ',
          onClick: handleCloseConfirmMealPackageModal,
          disabled: loading,
        }}
        onClose={handleCloseConfirmMealPackageModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Xác nhận thanh toán
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          {packState?.title || packState?.name}:{' '}
          <strong>{formatMoneyVND({ amount: packState?.price || 0, showSuffix: true })}</strong>
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

export default ExercisePackageDetail;
