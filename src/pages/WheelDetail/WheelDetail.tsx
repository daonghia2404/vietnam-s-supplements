import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import WheelRotation, { TWheelRotationData } from '@/components/WheelRotation';

import { listGift } from './WheelDetail.data';
import './WheelDetail.scss';
import { LayoutPaths, Paths } from '@/pages/routers';

const WheelDetail: React.FC = () => {
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

  const handleRotationStart = (): void => {
    setWheelRotationState({
      triggerStart: true,
    });
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

  return (
    <div className="WheelDetail style-container">
      <HeaderSkew title="Vòng Quay" />

      <div className="WheelDetail-main">
        <div className="WheelDetail-main-rotation">
          <WheelRotation
            dataGifts={listGift}
            triggerStart={wheelRotationState.triggerStart}
            onFinish={handleRotationFinish}
          />
        </div>
        <div className="WheelDetail-main-description">
          Điểm tích luỹ có thể dùng để quay vòng quay may mắn. Sử dụng điểm tích luỹ không ảnh hưởng đến tiến trình lên
          hạng thành viên.
        </div>
        <div className="WheelDetail-main-group-btns">
          <Button title="Sử dụng 1000 điểm tích luỹ" type="ghost" />
          <Button
            title="Quay số (0 lượt quay)"
            type="primary"
            onClick={handleRotationStart}
            disabled={wheelRotationState.triggerStart}
          />
          <Button title="Chia sẻ mạng xã hội để nhận thêm 1 lượt quay" type="ghost" />
          <Link to="/" className="WheelDetail-main-link">
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
    </div>
  );
};

export default WheelDetail;
