/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import Modal from '@/components/Modal';
import { TMealScheduleOverviewModalProps } from '@/containers/MealScheduleOverviewModal/MealScheduleOverviewModal.types';
import Button from '@/components/Button';
import Icon, { EIconName, EIconColor } from '@/components/Icon';
import MealOverviewModal from '@/containers/MealOverviewModal';
import { dataTabsMealSchedule } from '@/containers/MealScheduleOverview/MealScheduleOverview.data';
import { EKeyMealScheduleTab } from '@/containers/MealScheduleOverview/MealScheduleOverview.enums';

import './MealScheduleOverviewModal.scss';

const MealScheduleOverviewModal: React.FC<TMealScheduleOverviewModalProps> = ({ visible, onClose }) => {
  const [mealOverviewModalState, setMealOverviewModalState] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });
  const [activeKeyMealScheduleTab, setActiveKeyMealScheduleTab] = useState<EKeyMealScheduleTab>(
    EKeyMealScheduleTab.FOOD,
  );

  const handleOpenMealOverviewModalState = (): void => {
    setMealOverviewModalState({ visible: true });
  };
  const handleCloseMealOverviewModalState = (): void => {
    setMealOverviewModalState({ visible: false });
  };

  const handleChangeKeyTabMealSchedule = (key: EKeyMealScheduleTab): void => {
    setActiveKeyMealScheduleTab(key);
  };

  const renderSectionTabMealSchedule = (): React.ReactNode => {
    switch (activeKeyMealScheduleTab) {
      case EKeyMealScheduleTab.FOOD:
        return (
          <div className="MealScheduleOverviewModal-body-item">
            <div className="MealScheduleOverviewModal-subtitle">Danh sách món chính</div>
            <ul className="MealScheduleOverviewModal-list flex flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="MealScheduleOverviewModal-list-item flex items-center"
                  onClick={handleOpenMealOverviewModalState}
                >
                  Món số {item}
                  <Icon name={EIconName.Info} color={EIconColor.BOULDER} />
                </li>
              ))}
            </ul>

            <div className="MealScheduleOverviewModal-subtitle">Danh sách món bổ trợ</div>
            <ul className="MealScheduleOverviewModal-list flex flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="MealScheduleOverviewModal-list-item flex items-center"
                  onClick={handleOpenMealOverviewModalState}
                >
                  Món số {item}
                  <Icon name={EIconName.Info} color={EIconColor.BOULDER} />
                </li>
              ))}
            </ul>

            <div className="MealScheduleOverviewModal-subtitle">Lưu ý khác</div>
            <div className="MealScheduleOverviewModal-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div>
          </div>
        );
      case EKeyMealScheduleTab.DRINK:
        return (
          <div className="MealScheduleOverviewModal-body-item">
            <div className="MealScheduleOverviewModal-subtitle">Các loại vitamin cần bổ sung</div>
            <ul className="MealScheduleOverviewModal-list flex flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="MealScheduleOverviewModal-list-item flex items-center"
                  onClick={handleOpenMealOverviewModalState}
                >
                  Vitamin {item}
                  <Icon name={EIconName.Info} color={EIconColor.BOULDER} />
                </li>
              ))}
            </ul>

            <div className="MealScheduleOverviewModal-subtitle">Lưu ý khác</div>
            <div className="MealScheduleOverviewModal-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div>
          </div>
        );

      default:
        return <></>;
    }
  };
  return (
    <Modal
      closeable
      wrapClassName="MealScheduleOverviewModal-wrap"
      visible={visible}
      onClose={onClose}
      confirmButton={{ title: 'Đồng ý' }}
    >
      <div className="MealScheduleOverviewModal-header">
        <div className="Modal-body-title text-center">Ngày 24/11/2021</div>
      </div>

      <div className="MealScheduleOverviewModal-tabs flex justify-between">
        {dataTabsMealSchedule.map((item) => (
          <div key={item.value} className="MealScheduleOverviewModal-tabs-item">
            <Button
              size="small"
              title={item.label}
              shadow={false}
              type={activeKeyMealScheduleTab === item.value ? 'link' : undefined}
              onClick={(): void => handleChangeKeyTabMealSchedule(item.value)}
            />
          </div>
        ))}
      </div>

      <div className="MealScheduleOverviewModal-body">
        {renderSectionTabMealSchedule()}
        <MealOverviewModal {...mealOverviewModalState} onClose={handleCloseMealOverviewModalState} />
      </div>
    </Modal>
  );
};

export default MealScheduleOverviewModal;
