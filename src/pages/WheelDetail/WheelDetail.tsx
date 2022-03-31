import React, { useCallback, useEffect, useState } from 'react';
import { Link, navigate, useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import WheelRotation, { TWheelRotationData } from '@/components/WheelRotation';
import { LayoutPaths, Paths } from '@/pages/routers';
import {
  buyTurnWheelAction,
  getTurnWheelUserAction,
  getWheelAction,
  shareSocialTurnWheelAction,
  startWheelAction,
} from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import PageLoading from '@/components/PageLoading';

import './WheelDetail.scss';
import { showNotification } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import { ETurnWheelControllerAction } from '@/redux/actions/turn-wheel-controller/constants';

const WheelDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const wheelState = useSelector((state: TRootState) => state.wheelReducer.wheel?.result);
  const turnWheel = useSelector((state: TRootState) => state.turnWheelReducer.turnNumber);
  const startWheelState = useSelector((state: TRootState) => state.wheelReducer.startWheel);

  const startWheelLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EWheelControllerAction.START_WHEEL],
  );
  const getWheelLoading = useSelector((state: TRootState) => state.loadingReducer[EWheelControllerAction.GET_WHEEL]);
  const getTurnWheelUserLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ETurnWheelControllerAction.GET_TURN_WHEEL_USER],
  );
  const buyTurnWheelLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ETurnWheelControllerAction.BUY_TURN_WHEEL],
  );
  const shareSocialTurnWheelLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL],
  );

  const [wheelRotationState, setWheelRotationState] = useState<{
    triggerStart: boolean;
  }>({
    triggerStart: false,
  });
  const [rewardModalState, setRewardModalState] = useState<{
    gift?: TWheelRotationData;
    visible: boolean;
  }>({
    visible: false,
    gift: undefined,
  });

  const isStartWheel = startWheelLoading || wheelRotationState.triggerStart;

  const listGift =
    wheelState?.listPrizes?.map((item) => ({
      ...item,
      id: item.idPrize,
      label: item.namePrize,
      percent: item.percent / 100,
    })) || [];

  const handleRotationStart = (): void => {
    dispatch(
      startWheelAction.request(id, (response): void => {
        setWheelRotationState({
          triggerStart: true,
        });
        dispatch(getTurnWheelUserAction.success({ turnNumber: response.turnOfUser, wheelId: id }));
      }),
    );
  };

  const handleRotationFinish = (gift: TWheelRotationData): void => {
    setWheelRotationState({
      triggerStart: false,
    });
    handleOpenRewardModalState(gift);
  };

  const handleNavigateRotationHistory = (): void => {
    navigate(`${LayoutPaths.Profile}${Paths.HistoryRotation}`);
  };

  const handleOpenRewardModalState = (gift: TWheelRotationData): void => {
    setRewardModalState({
      visible: true,
      gift,
    });
  };

  const handleCloseRewardModalState = (): void => {
    setRewardModalState({
      visible: false,
    });
  };

  const handleBuyTurnWheelByPoint = (): void => {
    dispatch(buyTurnWheelAction.request(id, handleAddTurnWheelSuccess));
  };

  const handleShareSocialTurnWHeel = (): void => {
    dispatch(shareSocialTurnWheelAction.request(id, handleAddTurnWheelSuccess));
  };

  const handleAddTurnWheelSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Đổi lượt quay thành công');
    getTurnWheelUserData();
  };

  const getWheelDetailData = useCallback((): void => {
    if (id) dispatch(getWheelAction.request(id));
  }, [id, dispatch]);

  const getTurnWheelUserData = useCallback((): void => {
    if (id) dispatch(getTurnWheelUserAction.request(id));
  }, [id, dispatch]);

  useEffect(() => {
    getWheelDetailData();
  }, [getWheelDetailData]);

  useEffect(() => {
    getTurnWheelUserData();
  }, [getTurnWheelUserData]);

  return (
    <div className="WheelDetail style-container">
      {getWheelLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Vòng Quay" />

          <div className="WheelDetail-main">
            <div className="WheelDetail-main-rotation">
              <WheelRotation
                dataGifts={listGift}
                dataGift={startWheelState?.prize}
                triggerStart={wheelRotationState.triggerStart}
                onFinish={handleRotationFinish}
              />
            </div>
            <div className="WheelDetail-main-description">
              Điểm tích luỹ có thể dùng để quay vòng quay may mắn. Sử dụng điểm tích luỹ không ảnh hưởng đến tiến trình
              lên hạng thành viên.
            </div>
            <div className="WheelDetail-main-group-btns">
              <Button
                title="Sử dụng 1000 điểm tích luỹ"
                type="ghost"
                onClick={handleBuyTurnWheelByPoint}
                loading={buyTurnWheelLoading}
                disabled={isStartWheel}
              />
              <Button
                title={`Quay số (${turnWheel} lượt quay)`}
                type="primary"
                onClick={handleRotationStart}
                loading={getTurnWheelUserLoading}
                disabled={isStartWheel || turnWheel === 0}
              />
              <Button
                title="Chia sẻ mạng xã hội để nhận thêm 1 lượt quay"
                type="ghost"
                onClick={handleShareSocialTurnWHeel}
                loading={shareSocialTurnWheelLoading}
                disabled={isStartWheel}
              />
              <Link to={`${LayoutPaths.Profile}${Paths.HistoryRotation}`} className="WheelDetail-main-link">
                Lịch sử quay
              </Link>
            </div>
          </div>

          <Modal
            visible={rewardModalState.visible}
            cancelButton={{ title: 'Xem lịch sử', onClick: handleNavigateRotationHistory }}
            confirmButton={{ title: 'Quay tiếp', onClick: handleCloseRewardModalState }}
            onClose={handleCloseRewardModalState}
          >
            <div className="Modal-body-description" style={{ marginBottom: '0.6rem' }}>
              Phần thưởng bạn nhận được:
            </div>
            <div className="Modal-body-title">{rewardModalState.gift?.label}</div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default WheelDetail;
