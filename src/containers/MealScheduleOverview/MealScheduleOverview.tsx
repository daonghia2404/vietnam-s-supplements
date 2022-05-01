/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Calendar from '@/components/Calendar';
import Button from '@/components/Button';
import MealScheduleOverviewModal from '@/containers/MealScheduleOverviewModal';
import MealOverviewModal from '@/containers/MealOverviewModal';
import { dataTabsMealSchedule } from '@/containers/MealScheduleOverview/MealScheduleOverview.data';
import { EKeyMealScheduleTab } from '@/containers/MealScheduleOverview/MealScheduleOverview.enums';
import { TRootState } from '@/redux/reducers';
import { formatISODateToDateTime } from '@/utils/functions';
import { EFormatDate } from '@/common/enums';
import { TMeal } from '@/services/api/user-meal-schedule-controller/types';
import EmptyBox from '@/components/EmptyBox';

import { TMealScheduleOverviewProps } from './MealScheduleOverview.types';
import './MealScheduleOverview.scss';

const MealScheduleOverview: React.FC<TMealScheduleOverviewProps> = ({ onBack, onNext }) => {
  const userMealScheduleState = useSelector((state: TRootState) => state.userMealScheduleReducer.userMealSchedule?.[0]);
  const userMealScheduleFromTodayState = useSelector(
    (state: TRootState) => state.userMealScheduleReducer.userMealScheduleFromToday,
  );

  const [mealOverviewModalState, setMealOverviewModalState] = useState<{
    visible: boolean;
    data?: TMeal[];
  }>({
    visible: false,
  });
  const [activeKeyMealScheduleTab, setActiveKeyMealScheduleTab] = useState<EKeyMealScheduleTab>(
    EKeyMealScheduleTab.FOOD,
  );

  const handleOpenMealOverviewModalState = (data: TMeal[]): void => {
    setMealOverviewModalState({ visible: true, data });
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
          <>
            {userMealScheduleFromTodayState?.records?.map((item) => (
              <div key={item.id} className="MealScheduleOverview-main-item">
                <div className="MealScheduleOverview-subtitle">
                  Danh sách món chính ngày: {formatISODateToDateTime(item.dateMeal, EFormatDate.COMMON)}
                </div>
                <ul className="MealScheduleOverview-list flex flex-wrap">
                  {[item.meal1, item.meal2, item.meal3].map((meal, mealIndex) => {
                    if (meal.length === 0) return <></>;

                    return (
                      <li
                        // eslint-disable-next-line react/no-array-index-key
                        key={mealIndex}
                        className="MealScheduleOverview-list-item flex items-center"
                        onClick={(): void => handleOpenMealOverviewModalState(meal)}
                      >
                        {meal.map((dish) => dish.dish.name).join(', ')}
                        <Icon name={EIconName.Info} color={EIconColor.BOULDER} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {/* <div className="MealScheduleOverview-subtitle">Lưu ý khác</div>
            <div className="MealScheduleOverview-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div> */}
          </>
        );
      case EKeyMealScheduleTab.DRINK:
        return (
          <div className="MealScheduleOverview-main-item">
            <EmptyBox title="Không có dữ liệu lịch uống thuốc" />
            {/* <div className="MealScheduleOverview-subtitle">Các loại vitamin cần bổ sung</div>
            <ul className="MealScheduleOverview-list flex flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <li
                  key={item}
                  className="MealScheduleOverview-list-item flex items-center"
                  onClick={handleOpenMealOverviewModalState}
                >
                  Vitamin {item}
                  <Icon name={EIconName.Info} color={EIconColor.BOULDER} />
                </li>
              ))}
            </ul>

            <div className="MealScheduleOverview-subtitle">Lưu ý khác</div>
            <div className="MealScheduleOverview-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
            </div> */}
          </div>
        );

      default:
        return <></>;
    }
  };

  return (
    <div className="MealScheduleOverview">
      {onBack && (
        <div className="BodyInformationForm-back flex items-center" onClick={onBack}>
          <Icon name={EIconName.AngleRight} color={EIconColor.ELECTRIC_VIOLET} />
          Quay lại
        </div>
      )}
      <div className="MealScheduleOverview-title">Lịch ăn uống tổng quát</div>

      <div className="MealScheduleOverview-calendar" style={{ pointerEvents: 'none' }}>
        {userMealScheduleState && (
          <Calendar
            value={[
              new Date(moment(userMealScheduleState?.dateFrom).format(EFormatDate.MM_DD_YYYY)),
              new Date(moment(userMealScheduleState?.dateTo).format(EFormatDate.MM_DD_YYYY)),
            ]}
          />
        )}

        <div className="MealScheduleOverview-description">
          Bạn có thể ấn vào từng ngày để xem thông tin chi tiết lịch ăn uống của ngày đó.
        </div>
      </div>

      <div className="MealScheduleOverview-tabs flex justify-between">
        {dataTabsMealSchedule.map((item) => (
          <div key={item.value} className="MealScheduleOverview-tabs-item">
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

      <div className="MealScheduleOverview-main">{renderSectionTabMealSchedule()}</div>

      {onNext && (
        <div className="MealScheduleOverview-submit flex justify-center">
          <Button title="Hoàn tất" type="primary" onClick={onNext} />
        </div>
      )}

      <MealScheduleOverviewModal visible={false} />

      <MealOverviewModal {...mealOverviewModalState} onClose={handleCloseMealOverviewModalState} />
    </div>
  );
};

export default MealScheduleOverview;
