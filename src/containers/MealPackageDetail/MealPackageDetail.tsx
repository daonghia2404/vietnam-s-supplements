import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { buyPackMealAction, createUserMealScheduleAction, getPackMealAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EPackMealControllerAction } from '@/redux/actions/pack-meal-controller/constants';
import PageLoading from '@/components/PageLoading';
import { formatMoneyVND, handleErrorImageUrl } from '@/utils/functions';
import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';
import { LayoutPaths, Paths } from '@/pages/routers';

import { TMealPackageDetailProps } from './MealPackageDetail.types';
import './MealPackageDetail.scss';

const MealPackageDetail: React.FC<TMealPackageDetailProps> = ({ dataGlobalStep, id, onBack }) => {
  const dispatch = useDispatch();

  const authState = useSelector((state: TRootState) => state.authReducer.user);

  const packMealState = useSelector((state: TRootState) => state.packMealReducer.packMeal);
  const getPackMealLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackMealControllerAction.GET_PACK_MEAL],
  );
  const createUserMealScheduleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE],
  );
  const buyPackMealLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackMealControllerAction.BUY_PACK_MEAL],
  );

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
    const body: any = {
      ...dataGlobalStep,
      id,
      idPack: id,
    };

    dispatch(
      buyPackMealAction.request(
        body,
        (): void => {
          dispatch(
            createUserMealScheduleAction.request(
              body,
              handleCreateUserMealScheduleSuccess,
              handleCreateUserMealScheduleFailed,
            ),
          );
        },
        handleCreateUserMealScheduleFailed,
      ),
    );
  };

  const handleCreateUserMealScheduleSuccess = (): void => {
    handleCloseConfirmMealPackageModal();
    handleOpenPaymentModal();
  };

  const handleCreateUserMealScheduleFailed = (): void => {
    handleCloseConfirmMealPackageModal();
    handleOpenFailedPaymentModal();
  };

  const handleSubmit = (): void => {
    // onNext?.();
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
    if (id) dispatch(getPackMealAction.request(id));
  }, [dispatch, id]);

  return (
    <div className="MealPackageDetail">
      {getPackMealLoading ? (
        <PageLoading />
      ) : (
        <>
          {onBack && (
            <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
              <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
              Quay l???i
            </div>
          )}
          <div className="MealPackageDetail-title">Th??ng tin g??i</div>
          <div className="MealPackageDetail-image">
            <img src={packMealState?.image} onError={handleErrorImageUrl} alt="" />
          </div>

          <div className="MealPackageDetail-header">
            <div className="MealPackageDetail-name">{packMealState?.title}</div>
            <div className="MealPackageDetail-price">
              <span>{formatMoneyVND({ amount: packMealState?.price || 0, showSuffix: true })}</span>{' '}
              {packMealState?.prePrice && (
                <del className="MealPackageDetail-pre-price">
                  {formatMoneyVND({ amount: packMealState?.prePrice || 0, showSuffix: true })}
                </del>
              )}{' '}
              / {packMealState?.numberDate} ng??y
            </div>
          </div>

          <div className="MealPackageDetail-subtitle">Th??ng tin g??i</div>
          <div className="MealPackageDetail-description">{packMealState?.description}</div>

          <div className="MealPackageDetail-action flex items-center flex-wrap">
            <div className="MealPackageDetail-action-item flex justify-between items-center">
              <span>M???c gi??</span>
              <span>
                {packMealState?.numberDate} ng??y /{' '}
                <strong>{formatMoneyVND({ amount: packMealState?.price || 0, showSuffix: true })}</strong>{' '}
                {packMealState?.prePrice && (
                  <del className="MealPackageDetail-pre-price">
                    {formatMoneyVND({ amount: packMealState?.prePrice || 0, showSuffix: true })}
                  </del>
                )}
              </span>
            </div>
            <div className="MealPackageDetail-action-item">
              <Button title="Mua Ngay" type="primary" onClick={handleOpenConfirmMealPackageModal} />
            </div>
          </div>
        </>
      )}

      <Modal
        {...confirmMealPackageModalState}
        confirmButton={{
          title: '?????ng ??',
          onClick: handleConfirmMealPackageModalSubmit,
          loading: createUserMealScheduleLoading || buyPackMealLoading,
        }}
        cancelButton={{
          title: 'Hu??? b???',
          onClick: handleCloseConfirmMealPackageModal,
          disabled: createUserMealScheduleLoading || buyPackMealLoading,
        }}
        onClose={handleCloseConfirmMealPackageModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          X??c nh???n thanh to??n
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          {packMealState?.title}:{' '}
          <strong>{formatMoneyVND({ amount: packMealState?.price || 0, showSuffix: true })}</strong>
        </div>
        <div className="Modal-body-link">Thanh to??n qua v?? c???a t??i</div>
      </Modal>

      <Modal {...paymentModalState} confirmButton={{ title: '?????ng ??', onClick: handleSubmit }} onClose={handleSubmit}>
        <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
          Thanh to??n th??nh c??ng
        </div>
        <div className="Modal-body-description">B???n ???? mua g??i l???ch ??n / u???ng th??nh c??ng</div>
      </Modal>

      <Modal
        {...failedPaymentModalState}
        onClose={handleCloseFailedPaymentModal}
        confirmButton={{ title: 'N???p th??m', onClick: handleSubmitFailedPaymentModal }}
        cancelButton={{ title: 'Hu??? b???', onClick: handleCloseFailedPaymentModal }}
      >
        <div className="Modal-body-subtitle" style={{ marginBottom: '1.5rem' }}>
          S??? d?? c???a b???n: <strong>{formatMoneyVND({ amount: authState?.money || 0, showSuffix: true })}</strong>
        </div>
        <div className="Modal-body-description">
          S??? d?? v?? c???a b???n kh??ng ????? ????? thanh to??n g??i l???ch ??n / u???ng. Xin vui l??ng n???p th??m!
        </div>
      </Modal>
    </div>
  );
};

export default MealPackageDetail;
