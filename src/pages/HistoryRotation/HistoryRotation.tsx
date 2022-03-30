import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';

import { EKeyTabHistoryRotation } from './HistoryRotation.enums';
import { dataHistoryRotationTabs } from './HistoryRotation.data';
import './HistoryRotation.scss';
import { TParamsGetHistoryWheel } from '@/services/api/wheel-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getHisotryWheelAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import PageLoading from '@/components/PageLoading';
import { ETypeHistoryWheel } from '@/services/api/wheel-controller/enums';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';
import { LayoutPaths, Paths } from '@/pages/routers';

const HistoryRotation: React.FC = () => {
  const dispatch = useDispatch();

  const getHistoryWheelLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EWheelControllerAction.GET_HISTORY_WHEEL],
  );
  const historyWheelState = useSelector((state: TRootState) => state.wheelReducer.historyWheel);
  const isEmpty = historyWheelState?.records && historyWheelState?.records?.length === 0;

  const [getHistoryWheelParamsRequest, setGetHistoryWheelParamsRequest] = useState<TParamsGetHistoryWheel>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    type: ETypeHistoryWheel.NULL,
  });

  const [activeKeyHistoryRotaionTab, setActiveKeyHistoryRotaionTab] = useState<EKeyTabHistoryRotation>(
    EKeyTabHistoryRotation.NOT_EXPIRE,
  );

  const handleChangeKeyTabHistoryRotation = (key: EKeyTabHistoryRotation): void => {
    setActiveKeyHistoryRotaionTab(key);
    setGetHistoryWheelParamsRequest({
      ...getHistoryWheelParamsRequest,
      type: key === EKeyTabHistoryRotation.NOT_EXPIRE ? ETypeHistoryWheel.NULL : ETypeHistoryWheel.OUTDATE,
    });
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

  const getHistoryWheelData = useCallback(() => {
    dispatch(getHisotryWheelAction.request(getHistoryWheelParamsRequest));
  }, [dispatch, getHistoryWheelParamsRequest]);

  useEffect(() => {
    getHistoryWheelData();
  }, [getHistoryWheelData]);

  return (
    <div className="HistoryRotation style-container">
      {getHistoryWheelLoading ? (
        <PageLoading />
      ) : (
        <>
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

            {isEmpty ? (
              <EmptyBox
                title="Không có dữ liệu lịch sử quay thưởng"
                buttonProps={{
                  title: 'Đi tới vòng quay',
                  type: 'primary',
                  link: `${LayoutPaths.Admin}${Paths.Wheels}`,
                }}
              />
            ) : (
              renderSectionTabMealSchedule()
            )}
          </div>

          <div className="HistoryRotation-pagination flex justify-center">
            <Pagination
              page={getHistoryWheelParamsRequest.page}
              pageSize={getHistoryWheelParamsRequest.pageSize}
              total={historyWheelState?.total}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryRotation;
