import React from 'react';

import Modal from '@/components/Modal';
import { TMealOverviewModalProps } from '@/containers/MealOverviewModal/MealOverviewModal.types';

import './MealOverviewModal.scss';

const MealOverviewModal: React.FC<TMealOverviewModalProps> = ({ visible, data, onClose }) => {
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
        <div className="Modal-body-title text-center">Thông tin</div>
      </div>

      <div className="MealOverviewModal-body">
        <div className="MealOverviewModal-subtitle">Cách chế biến</div>
        <div className="MealOverviewModal-description">
          {data?.map((item) => `${item.dish.name}: ${item.dish.processing}`)}
        </div>
        <div className="MealOverviewModal-subtitle">Khối lượng / Số lượng</div>
        <div className="MealOverviewModal-description">
          {data?.map((item) => `${item.dish.name}: ${item.dish.weight}`)}
        </div>
        <div className="MealOverviewModal-subtitle">Kcal</div>
        <div className="MealOverviewModal-description">
          {data?.map((item) => `${item.dish.name}: ${item.dish.kcal}`)}
        </div>
      </div>
    </Modal>
  );
};

export default MealOverviewModal;
