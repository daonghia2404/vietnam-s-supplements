import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import MealPackageBox from '@/components/MealPackageBox';
import Modal from '@/components/Modal';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { buyPackMealAction, createUserMealScheduleAction, getPackMealsAction } from '@/redux/actions';
import Pagination from '@/components/Pagination';
import { TRootState } from '@/redux/reducers';
import { EPackMealControllerAction } from '@/redux/actions/pack-meal-controller/constants';
import PageLoading from '@/components/PageLoading';
import EmptyBox from '@/components/EmptyBox';
import { formatMoneyVND } from '@/utils/functions';
import { TPackMealResponse } from '@/services/api/pack-meal-controller/types';
import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';
import { LayoutPaths, Paths } from '@/pages/routers';

import { TMealPackageProps } from './MealPackage.types';
import './MealPackage.scss';

const MealPackage: React.FC<TMealPackageProps> = ({ dataGlobalStep, onBack, onClickDetail }) => {
  const dispatch = useDispatch();

  const authState = useSelector((state: TRootState) => state.authReducer.user);

  const [getPackMealsParamsRequest, setGetPackMealsParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const getPackMealsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackMealControllerAction.GET_PACK_MEALS],
  );
  const createUserMealScheduleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUserMealScheduleControllerAction.CREATE_USER_MEAL_SCHEDULE],
  );
  const buyPackMealLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackMealControllerAction.BUY_PACK_MEAL],
  );
  const packMealsState = useSelector((state: TRootState) => state.packMealReducer.packMeals);
  const isEmpty = !packMealsState || packMealsState?.length === 0;

  const [confirmMealPackageModalState, setConfirmMealPackageModalState] = useState<{
    data?: TPackMealResponse;
    visible: boolean;
  }>({
    visible: false,
  });

  const [failedPaymentModalState, setFailedPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const [paymentModalState, setPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpenConfirmMealPackageModal = (data: TPackMealResponse): void => {
    setConfirmMealPackageModalState({
      visible: true,
      data,
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
      id: confirmMealPackageModalState.data?.id,
      idPack: confirmMealPackageModalState.data?.id,
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

  const handleSubmit = (): void => {
    // onNext?.();
    handleClosePaymentModal();
    navigate(`${LayoutPaths.Admin}${Paths.MealSchedule}`);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetPackMealsParamsRequest({
      ...getPackMealsParamsRequest,
      page,
      pageSize: pageSize || getPackMealsParamsRequest.pageSize,
    });
  };

  const getPacksMealData = useCallback(() => {
    dispatch(getPackMealsAction.request(getPackMealsParamsRequest));
  }, [dispatch, getPackMealsParamsRequest]);

  useEffect(() => {
    getPacksMealData();
  }, [getPacksMealData]);

  return (
    <div className="MealPackage">
      {getPackMealsLoading ? (
        <PageLoading />
      ) : (
        <>
          {onBack && (
            <div
              className={classNames('BodyInformationForm-back flex items-center', { disabled: getPackMealsLoading })}
              onClick={onBack}
            >
              <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
              Quay l???i
            </div>
          )}
          <div className="MealPackage-title">????ng k?? g??i l???ch ??n / u???ng</div>
          {isEmpty ? (
            <EmptyBox title="Ch??a c?? g??i l???ch ??n / u???ng" />
          ) : (
            <div className="MealPackage-main flex flex-wrap justify-between">
              {packMealsState.map((item) => (
                <MealPackageBox
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  prePrice={formatMoneyVND({ amount: item.prePrice, showSuffix: true })}
                  price={formatMoneyVND({ amount: item.price, showSuffix: true })}
                  date={`${item.numberDate} ng??y`}
                  onRegister={(): void => handleOpenConfirmMealPackageModal(item)}
                  onClickDetail={(): void => onClickDetail?.(item.id)}
                />
              ))}
            </div>
          )}

          <div className="MealPackage-pagination flex justify-center">
            <Pagination
              page={getPackMealsParamsRequest.page}
              pageSize={getPackMealsParamsRequest.pageSize}
              total={0}
              onChange={handlePageChange}
            />
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
          {confirmMealPackageModalState.data?.title}:{' '}
          <strong>{formatMoneyVND({ amount: confirmMealPackageModalState.data?.price || 0, showSuffix: true })}</strong>
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

export default MealPackage;
