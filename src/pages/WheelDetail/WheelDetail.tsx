import React from 'react';
import { Link } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import ImageWheelRotation from '@/assets/images/image-wheel-rotation.png';

import './WheelDetail.scss';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

const WheelDetail: React.FC = () => {
  return (
    <div className="WheelDetail style-container">
      <HeaderSkew title="Vòng Quay" />

      <div className="WheelDetail-main">
        <div className="WheelDetail-main-rotation">
          <img src={ImageWheelRotation} alt="" />
        </div>
        <div className="WheelDetail-main-description">
          Điểm tích luỹ có thể dùng để quay vòng quay may mắn. Sử dụng điểm tích luỹ không ảnh hưởng đến tiến trình lên
          hạng thành viên.
        </div>
        <div className="WheelDetail-main-group-btns">
          <Button title="Sử dụng 1000 điểm tích luỹ" type="ghost" />
          <Button title="Quay số (0 lượt quay)" type="primary" />
          <Button title="Chia sẻ mạng xã hội để nhận thêm 1 lượt quay" type="ghost" />
          <Link to="/" className="WheelDetail-main-link">
            Lịch sử quay
          </Link>
        </div>
      </div>

      <Modal visible cancelButton={{ title: 'Xem lịch sử' }} confirmButton={{ title: 'Quay tiếp' }}>
        <div className="Modal-body-description" style={{ marginBottom: '0.6rem' }}>
          Phần thưởng bạn nhận được:
        </div>
        <div className="Modal-body-title">Combo dụng cụ tập 3 trong 1</div>
      </Modal>
    </div>
  );
};

export default WheelDetail;
