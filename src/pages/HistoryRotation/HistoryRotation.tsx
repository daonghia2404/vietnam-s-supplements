import React, { useState } from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';

import { EKeyTabHistoryRotation } from './HistoryRotation.enums';
import { dataHistoryRotationTabs } from './HistoryRotation.data';
import './HistoryRotation.scss';

const HistoryRotation: React.FC = () => {
  const [activeKeyHistoryRotaionTab, setActiveKeyHistoryRotaionTab] = useState<EKeyTabHistoryRotation>(
    EKeyTabHistoryRotation.NOT_EXPIRE,
  );

  const handleChangeKeyTabHistoryRotation = (key: EKeyTabHistoryRotation): void => {
    setActiveKeyHistoryRotaionTab(key);
  };

  const renderSectionTabMealSchedule = (): React.ReactNode => {
    switch (activeKeyHistoryRotaionTab) {
      case EKeyTabHistoryRotation.NOT_EXPIRE:
        return (
          <div className="HistoryRotation-main-list">
            <div className="HistoryRotation-main-list-item flex justify-between">
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text">C08:00 - 20/11/2021</div>
                <div className="HistoryRotation-main-list-item-text bold">Combo dụng cụ tập 3 trong 1</div>
                <div className="HistoryRotation-main-list-item-text">
                  Quà tặng: Combo dụng cụ tập 3 trong 1 Quà tặng cho vòng quay may mắn, áp dụng cùng các CTKM trên
                  fanpage trong tháng.
                </div>
              </div>
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text warning nowrap">Chưa nhận thưởng</div>
              </div>
            </div>
            <div className="HistoryRotation-main-list-item flex justify-between">
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text">C08:00 - 20/11/2021</div>
                <div className="HistoryRotation-main-list-item-text bold">Combo dụng cụ tập 3 trong 1</div>
                <div className="HistoryRotation-main-list-item-text">
                  Quà tặng: Combo dụng cụ tập 3 trong 1 Quà tặng cho vòng quay may mắn, áp dụng cùng các CTKM trên
                  fanpage trong tháng.
                </div>
              </div>
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text success nowrap">Đã nhận thưởng</div>
              </div>
            </div>
          </div>
        );
      case EKeyTabHistoryRotation.EXPIRE:
        return (
          <div className="HistoryRotation-main-list">
            <div className="HistoryRotation-main-list-item flex justify-between">
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text">C08:00 - 20/11/2021</div>
                <div className="HistoryRotation-main-list-item-text bold">Combo dụng cụ tập 3 trong 1</div>
                <div className="HistoryRotation-main-list-item-text">
                  Quà tặng: Combo dụng cụ tập 3 trong 1 Quà tặng cho vòng quay may mắn, áp dụng cùng các CTKM trên
                  fanpage trong tháng.
                </div>
              </div>
              <div className="HistoryRotation-main-list-item-col">
                <div className="HistoryRotation-main-list-item-text error nowrap">Đã hết hạn</div>
              </div>
            </div>
          </div>
        );

      default:
        return <></>;
    }
  };
  return (
    <div className="HistoryRotation style-container">
      <HeaderSkew title="Lịch sử vòng quay" />

      <div className="HistoryRotation-main">
        <div className="HistoryRotation-tabs flex justify-between">
          {dataHistoryRotationTabs.map((item) => (
            <div className="HistoryRotation-tabs-item">
              <Button
                size="small"
                title={item.label}
                shadow={false}
                type={activeKeyHistoryRotaionTab === item.value ? 'link' : undefined}
                onClick={(): void => handleChangeKeyTabHistoryRotation(item.value)}
              />
            </div>
          ))}
        </div>

        {renderSectionTabMealSchedule()}
      </div>
    </div>
  );
};

export default HistoryRotation;
