import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { THistoryWheelResponse, TParamsGetHistoryWheel } from '@/services/api/wheel-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getHisotryWheelAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import PageLoading from '@/components/PageLoading';
import { EHistoryPrizeStatus, ETypeHistoryWheel } from '@/services/api/wheel-controller/enums';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';
import { LayoutPaths, Paths } from '@/pages/routers';
import { formatISODateToDateTime, isFirstDateValueGreaterThanSecondDateValue } from '@/utils/functions';

import { EKeyTabHistoryRotation } from './HistoryRotation.enums';
import { dataHistoryRotationTabs } from './HistoryRotation.data';
import './HistoryRotation.scss';

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

  const renderStatusHistoryRotation = (data: THistoryWheelResponse): { label: string; color: string } => {
    switch (true) {
      case isFirstDateValueGreaterThanSecondDateValue('', data.outOfDate):
        return { label: 'Đã hết hạn', color: 'error' };

      case data.status === EHistoryPrizeStatus.RECEIVED:
        return { label: 'Đã nhận thưởng', color: 'success' };

      case data.status === EHistoryPrizeStatus.NOT_RECEIVED:
        return { label: 'Chưa nhận thưởng', color: 'warning' };

      default:
        return { label: '', color: '' };
    }
  };

  const handleChangeKeyTabHistoryRotation = (key: EKeyTabHistoryRotation): void => {
    setActiveKeyHistoryRotaionTab(key);
    setGetHistoryWheelParamsRequest({
      ...getHistoryWheelParamsRequest,
      type: key === EKeyTabHistoryRotation.NOT_EXPIRE ? ETypeHistoryWheel.NULL : ETypeHistoryWheel.OUTDATE,
    });
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetHistoryWheelParamsRequest({
      ...getHistoryWheelParamsRequest,
      page,
      pageSize: pageSize || getHistoryWheelParamsRequest.pageSize,
    });
  };

  const getHistoryWheelData = useCallback(() => {
    dispatch(getHisotryWheelAction.request(getHistoryWheelParamsRequest));
  }, [dispatch, getHistoryWheelParamsRequest]);

  useEffect(() => {
    getHistoryWheelData();
  }, [getHistoryWheelData]);

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

        <div className="HistoryRotation-main-list">
          {getHistoryWheelLoading ? (
            <PageLoading />
          ) : (
            <>
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
                <>
                  {historyWheelState?.records?.map((item) => (
                    <div className="HistoryRotation-main-list-item flex justify-between">
                      <div className="HistoryRotation-main-list-item-col">
                        <div className="HistoryRotation-main-list-item-text">
                          {formatISODateToDateTime(item.createdAt)}
                        </div>
                        <div className="HistoryRotation-main-list-item-text bold">{item.prize}</div>
                        <div className="HistoryRotation-main-list-item-text">{item.description}</div>
                      </div>
                      <div className="HistoryRotation-main-list-item-col">
                        <div
                          className={classNames(
                            'HistoryRotation-main-list-item-text warning nowrap',
                            renderStatusHistoryRotation(item).color,
                          )}
                        >
                          {renderStatusHistoryRotation(item).label}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div className="HistoryRotation-pagination flex justify-center">
        <Pagination
          page={getHistoryWheelParamsRequest.page}
          pageSize={getHistoryWheelParamsRequest.pageSize}
          total={historyWheelState?.total}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HistoryRotation;
