import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { buyTurnWheelAction, getWheelsUserAction } from '@/redux/actions';
import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import { TRootState } from '@/redux/reducers';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';
import PageLoading from '@/components/PageLoading';
import { ETypeNotification } from '@/common/enums';
import { handleErrorImageUrl, showNotification } from '@/utils/functions';
import { TWheelResponse } from '@/services/api/wheel-controller/types';
import Modal from '@/components/Modal';
import { ETurnWheelControllerAction } from '@/redux/actions/turn-wheel-controller/constants';

import './RankExchangePoints.scss';

const RankExchangePoints: React.FC = () => {
  const dispatch = useDispatch();

  const [getWheelsUserParamsRequest, setGetWheelsUserParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const [confirmBuyTurnByPointModalState, setConfirmBuyTurnByPointModalState] = useState<{
    visible: boolean;
    data?: TWheelResponse;
  }>({
    visible: false,
    data: undefined,
  });

  const wheelsUserState = useSelector((state: TRootState) => state.wheelReducer.wheelsUser);

  const isEmpty = !wheelsUserState?.records || wheelsUserState.records.length === 0;

  const getWheelsUserLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EWheelControllerAction.GET_WHEELS_USER],
  );
  const buyTurnWheelLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ETurnWheelControllerAction.BUY_TURN_WHEEL],
  );

  const handleOpenConfirmBuyTurnByPointModal = (data: TWheelResponse): void => {
    setConfirmBuyTurnByPointModalState({ visible: true, data });
  };

  const handleCloseConfirmBuyTurnByPointModal = (): void => {
    setConfirmBuyTurnByPointModalState({ visible: false });
  };

  const handleConfirmBuyTurnByPointModalSubmit = (): void => {
    if (confirmBuyTurnByPointModalState.data)
      dispatch(buyTurnWheelAction.request(confirmBuyTurnByPointModalState.data.id, handleBuyTurnWheelByPointSuccess));
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetWheelsUserParamsRequest({
      ...getWheelsUserParamsRequest,
      page,
      pageSize: pageSize || getWheelsUserParamsRequest.pageSize,
    });
  };

  const handleBuyTurnWheelByPointSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi lượt quay thành công');
    handleCloseConfirmBuyTurnByPointModal();
  };

  const getWheelsUserData = useCallback(() => {
    dispatch(getWheelsUserAction.request(getWheelsUserParamsRequest));
  }, [dispatch, getWheelsUserParamsRequest]);

  useEffect(() => {
    getWheelsUserData();
  }, [getWheelsUserData]);

  return (
    <div className="RankExchangePoints">
      {getWheelsUserLoading ? (
        <PageLoading />
      ) : (
        <>
          {isEmpty ? (
            <EmptyBox title="Không có vòng quay" />
          ) : (
            <>
              {wheelsUserState.records.map((item) => (
                <div key={item.id} className="RankExchangePoints-item flex">
                  <div className="RankExchangePoints-item-image">
                    <img src={item.image} onError={handleErrorImageUrl} alt="" />
                  </div>
                  <div className="RankExchangePoints-item-info">
                    <div className="RankExchangePoints-item-info-title">{item.title}</div>
                    <div className="RankExchangePoints-item-info-points">{item.point} điểm</div>
                    <div className="RankExchangePoints-item-info-btn flex">
                      <div
                        className="RankExchangePoints-item-info-cta"
                        onClick={(): void => handleOpenConfirmBuyTurnByPointModal(item)}
                      >
                        Đổi 1 lượt quay
                      </div>
                    </div>
                  </div>
                  <div className="RankExchangePoints-item-turn">Đã có: {item.turnWheel} lượt quay</div>
                </div>
              ))}

              <div className="RankExchangePoints-pagination flex justify-center">
                <Pagination
                  page={getWheelsUserParamsRequest.page}
                  pageSize={getWheelsUserParamsRequest.pageSize}
                  total={wheelsUserState?.total}
                  onChange={handlePageChange}
                />
              </div>
            </>
          )}
        </>
      )}

      <Modal
        {...confirmBuyTurnByPointModalState}
        confirmButton={{
          title: 'Đồng ý',
          onClick: handleConfirmBuyTurnByPointModalSubmit,
          loading: buyTurnWheelLoading,
        }}
        cancelButton={{
          title: 'Huỷ bỏ',
          onClick: handleCloseConfirmBuyTurnByPointModal,
          disabled: buyTurnWheelLoading,
        }}
        onClose={handleCloseConfirmBuyTurnByPointModal}
      >
        <div className="Modal-body-title" style={{ marginBottom: '1rem' }}>
          Đổi lượt quay
        </div>
        <div className="Modal-body-subtitle" style={{ marginBottom: '.5rem' }}>
          Bạn có chắc chắn dùng <strong>{confirmBuyTurnByPointModalState?.data?.point} điểm</strong> để đổi 1 lượt quay{' '}
          <strong>{confirmBuyTurnByPointModalState?.data?.title}</strong> không?
        </div>
      </Modal>
    </div>
  );
};

export default RankExchangePoints;
