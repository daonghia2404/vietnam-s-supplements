import React from 'react';

import Modal from '@/components/Modal';
import { TMealOverviewModalProps } from '@/containers/MealOverviewModal/MealOverviewModal.types';

import './MealOverviewModal.scss';

const MealOverviewModal: React.FC<TMealOverviewModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      closeable
      wrapClassName="MealOverviewModal-wrap"
      visible={visible}
      onClose={onClose}
      confirmButton={{ title: 'Đồng ý' }}
      hideFooter
    >
      <div className="MealOverviewModal-header">
        <div className="Modal-body-title text-center">Ngày 24/11/2021</div>
      </div>

      <div className="MealOverviewModal-body">
        <div className="MealOverviewModal-subtitle">Cách chế biến</div>
        <div className="MealOverviewModal-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s
        </div>
        <div className="MealOverviewModal-subtitle">Khối lượng/số lượng</div>
        <div className="MealOverviewModal-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s
        </div>
        <div className="MealOverviewModal-subtitle">Kcal</div>
        <div className="MealOverviewModal-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s
        </div>
      </div>
    </Modal>
  );
};

export default MealOverviewModal;
