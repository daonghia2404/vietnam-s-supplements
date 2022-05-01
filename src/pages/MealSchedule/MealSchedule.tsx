import React, { useCallback, useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import MealScheduleOverview from '@/containers/MealScheduleOverview';
import ExercisePackageBox from '@/components/ExercisePackageBox';
import { LayoutPaths, Paths } from '@/pages/routers';
import Modal from '@/components/Modal';
import {
  buyPackExerciseAction,
  buyPackPtOnlineAction,
  getPackExercisesAction,
  getPackPtOnlinesAction,
  getUserMealScheduleAction,
  getUserMealScheduleFromTodayAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EUserMealScheduleControllerAction } from '@/redux/actions/user-meal-schedule-controller/constants';
import PageLoading from '@/components/PageLoading';
import { DEFAULT_PAGE } from '@/common/constants';
import EmptyBox from '@/components/EmptyBox';
import { TPackExerciseResponse } from '@/services/api/pack-exercise-controller/types';
import { formatMoneyVND } from '@/utils/functions';
import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';
import { TPackPtOnlineResponse } from '@/services/api/pack-pt-online-controller/types';

import './MealSchedule.scss';

const MealSchedule: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: TRootState) => state.authReducer.user);

  const getUserMealScheduleLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EUserMealScheduleControllerAction.GET_USER_MEAL_SCHEDULE],
  );
  const buyPackExerciseLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.BUY_PACK_EXERCISE],
  );
  const buyPackPtOnlineLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE],
  );

  const packExercisesState = useSelector((state: TRootState) => state.packExerciseReducer.packExercises);
  const packPtOnlinesState = useSelector((state: TRootState) => state.packPtOnlineReducer.packPtOnlines);

  const [confirmExercisePackageModalState, setConfirmExercisePackageModalState] = useState<{
    visible: boolean;
    data?: TPackExerciseResponse;
  }>({
    visible: false,
  });
  const [confirmPtOnlineModalState, setConfirmPtOnlineModalState] = useState<{
    visible: boolean;
    data?: TPackPtOnlineResponse;
  }>({
    visible: false,
  });

  const [paymentModalState, setPaymentModalState] = useState<{
    visible: boolean;
    data?: any;
  }>({
    visible: false,
  });
  const [failedPaymentModalState, setFailedPaymentModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleNavigateExercisePackageDetail = (id: string): void => {
    navigate(`${LayoutPaths.Admin}${Paths.ExerciseDetail(id)}`);
  };

  const handleNavigatePtOnlinePackageDetail = (id: string): void => {
    navigate(`${LayoutPaths.Admin}${Paths.ExerciseOnlineDetail(id)}`);
  };

  const handleOpenConfirmPtOnlineModal = (item: TPackPtOnlineResponse): void => {
    setConfirmPtOnlineModalState({
      visible: true,
      data: item,
    });
  };

  const handleCloseConfirmPtOnlineModal = (): void => {
    setConfirmPtOnlineModalState({
      visible: false,
    });
  };

  const handleConfirmPtOnlineModalSubmit = (): void => {
    dispatch(
      buyPackPtOnlineAction.request(
        confirmPtOnlineModalState?.data?.id || '',
        (): void => {
          handleOpenPaymentModal(confirmPtOnlineModalState?.data);
        },
        handleOpenFailedPaymentModal,
      ),
    );

    handleCloseConfirmPtOnlineModal();
  };

  const handleOpenConfirmExercisePackageModal = (item: TPackExerciseResponse): void => {
    setConfirmExercisePackageModalState({
      visible: true,
      data: item,
    });
  };

  const handleCloseConfirmExercisePackageModal = (): void => {
    setConfirmExercisePackageModalState({
      visible: false,
    });
  };

  const handleConfirmExercisePackageModalSubmit = (): void => {
    dispatch(
      buyPackExerciseAction.request(
        {
          packExerciseId: confirmExercisePackageModalState?.data?.id || '',
        },
        (): void => {
          handleOpenPaymentModal(confirmExercisePackageModalState?.data);
        },
        handleOpenFailedPaymentModal,
      ),
    );

    handleCloseConfirmExercisePackageModal();
  };

  const handleOpenPaymentModal = (data: any): void => {
    setPaymentModalState({
      visible: true,
      data,
    });
  };

  const handleClosePaymentModal = (): void => {
    setPaymentModalState({
      visible: false,
    });
  };

  const handleSubmitPaymentModal = (): void => {
    handleClosePaymentModal();
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

  const getScheduleFromToday = (): void => {
    dispatch(
      getUserMealScheduleFromTodayAction.request({
        page: DEFAULT_PAGE,
        pageSize: 5,
      }),
    );
  };

  const getUserMealScheduleData = useCallback(() => {
    dispatch(
      getUserMealScheduleAction.request((response): void => {
        const isEmpty = !response || response.length === 0;
        if (isEmpty) {
          navigate(`${LayoutPaths.Admin}${Paths.MealScheduleConfig}`);
        } else {
          getScheduleFromToday();
        }
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const getPackExercisesData = useCallback(() => {
    dispatch(
      getPackExercisesAction.request({
        page: DEFAULT_PAGE,
        pageSize: 4,
      }),
    );
  }, [dispatch]);

  const getPackPtOnlinesData = useCallback(() => {
    dispatch(
      getPackPtOnlinesAction.request({
        page: DEFAULT_PAGE,
        pageSize: 4,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    getPackPtOnlinesData();
  }, [getPackPtOnlinesData]);

  useEffect(() => {
    getPackExercisesData();
  }, [getPackExercisesData]);

  useEffect(() => {
    getUserMealScheduleData();
  }, [getUserMealScheduleData]);

  return (
    <div className="MealSchedule style-container">
      {getUserMealScheduleLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Lịch Ăn Uống" />

          <div className="MealSchedule-main">
            <MealScheduleOverview />

            {/* <div className="MealSchedule-group">
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
            </div> */}

            <div className="MealSchedule-group">
              <div className="MealSchedule-group-header flex items-center justify-between">
                <span>Gói tập bổ trợ</span>
                <Link to={`${LayoutPaths.Admin}${Paths.Exercise}`}>Xem tất cả</Link>
              </div>

              {packExercisesState && packExercisesState?.length > 0 ? (
                <div className="MealSchedule-group-body flex flex-wrap justify-between">
                  {packExercisesState.map((item) => (
                    <div className="MealSchedule-group-body-item" key={item.id}>
                      <ExercisePackageBox
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        onBuy={(): void => handleOpenConfirmExercisePackageModal(item)}
                        onClickDetail={(): void => handleNavigateExercisePackageDetail(item.id)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyBox title="Không có dữ liệu gói tập bổ trợ" />
              )}
            </div>

            <div className="MealSchedule-group">
              <div className="MealSchedule-group-header flex items-center justify-between">
                <span>Gói PT online</span>
                <Link to={`${LayoutPaths.Admin}${Paths.ExerciseOnline}`}>Xem tất cả</Link>
              </div>

              {packPtOnlinesState && packPtOnlinesState?.records?.length > 0 ? (
                <div className="MealSchedule-group-body flex flex-wrap justify-between">
                  {packPtOnlinesState?.records?.map((item) => (
                    <div className="MealSchedule-group-body-item" key={item.id}>
                      <ExercisePackageBox
                        key={item.id}
                        image={item.image}
                        title={item.name}
                        description={item.description}
                        onBuy={(): void => handleOpenConfirmPtOnlineModal(item)}
                        onClickDetail={(): void => handleNavigatePtOnlinePackageDetail(item.id)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyBox title="Không có dữ liệu gói tập bổ trợ" />
              )}
            </div>
          </div>

          <Modal
            {...confirmExercisePackageModalState}
            confirmButton={{
              title: 'Thanh toán',
              onClick: handleConfirmExercisePackageModalSubmit,
              loading: buyPackExerciseLoading,
            }}
            cancelButton={{
              title: 'Huỷ bỏ',
              onClick: handleCloseConfirmExercisePackageModal,
              disabled: buyPackExerciseLoading,
            }}
            onClose={handleCloseConfirmExercisePackageModal}
          >
            <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
              Xác nhận thanh toán
            </div>
            <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
              {confirmExercisePackageModalState?.data?.title}:{' '}
              <strong>
                {formatMoneyVND({ amount: confirmExercisePackageModalState?.data?.price || 0, showSuffix: true })}
              </strong>
            </div>
            <div className="Modal-body-link">Thanh toán qua ví của tôi</div>
          </Modal>

          <Modal
            {...confirmPtOnlineModalState}
            confirmButton={{
              title: 'Thanh toán',
              onClick: handleConfirmPtOnlineModalSubmit,
              loading: buyPackPtOnlineLoading,
            }}
            cancelButton={{
              title: 'Huỷ bỏ',
              onClick: handleCloseConfirmPtOnlineModal,
              disabled: buyPackPtOnlineLoading,
            }}
            onClose={handleCloseConfirmPtOnlineModal}
          >
            <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
              Xác nhận thanh toán
            </div>
            <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
              {confirmPtOnlineModalState?.data?.name}:{' '}
              <strong>
                {formatMoneyVND({ amount: confirmPtOnlineModalState?.data?.price || 0, showSuffix: true })}
              </strong>
            </div>
            <div className="Modal-body-link">Thanh toán qua ví của tôi</div>
          </Modal>

          <Modal
            {...paymentModalState}
            confirmButton={{ title: 'Đồng ý', onClick: handleSubmitPaymentModal }}
            onClose={handleClosePaymentModal}
          >
            <div className="Modal-body-title" style={{ marginBottom: '1.5rem' }}>
              Thanh toán thành công
            </div>
            <div className="Modal-body-description">
              Bạn đã mua thành công {paymentModalState.data?.title || paymentModalState.data?.name}
            </div>
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
              Số dư ví của bạn không đủ để thanh toán. Xin vui lòng nạp thêm!
            </div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default MealSchedule;
