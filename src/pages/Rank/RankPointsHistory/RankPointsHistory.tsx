import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getHistoryPointsAction } from '@/redux/actions';
import { TParamsGetHistoryPoints } from '@/services/api/rank-controller/types';
import Pagination from '@/components/Pagination';
import { TRootState } from '@/redux/reducers';
import PageLoading from '@/components/PageLoading';
import EmptyBox from '@/components/EmptyBox';
import { ERankControllerAction } from '@/redux/actions/rank-controller/constants';
import { formatISODateToDateTime } from '@/utils/functions';

import './RankPointsHistory.scss';

const RankPointsHistory: React.FC = () => {
  const dispatch = useDispatch();

  const historyPointsState = useSelector((state: TRootState) => state.rankReducer.historyPoints);
  const getHistoryPointsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ERankControllerAction.GET_HISTORY_POINTS],
  );

  const isEmpty = !historyPointsState?.records || historyPointsState.records.length === 0;

  const [getHistoryPointsParamsRequest, setGetHistoryPointsParamsRequest] = useState<TParamsGetHistoryPoints>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetHistoryPointsParamsRequest({
      ...getHistoryPointsParamsRequest,
      page,
      pageSize: pageSize || getHistoryPointsParamsRequest.pageSize,
    });
  };

  const getHistoryPointsData = useCallback(() => {
    dispatch(getHistoryPointsAction.request(getHistoryPointsParamsRequest));
  }, [dispatch, getHistoryPointsParamsRequest]);

  useEffect(() => {
    getHistoryPointsData();
  }, [getHistoryPointsData]);

  return (
    <div className="RankPointsHistory">
      {getHistoryPointsLoading ? (
        <PageLoading />
      ) : (
        <>
          {isEmpty ? (
            <EmptyBox title="Chưa có lịch sử đổi điểm" />
          ) : (
            <>
              {historyPointsState.records.map((item) => (
                <div key={item.id} className="RankPointsHistory-item flex items-end justify-between">
                  <div className="RankPointsHistory-item-col">
                    <div className="RankPointsHistory-text bold">Đổi 1 lượt quay</div>
                    <div className="RankPointsHistory-text error">-1000 điểm</div>
                  </div>
                  <div className="RankPointsHistory-item-col">
                    <div className="RankPointsHistory-text">{formatISODateToDateTime(item.createdAt)}</div>
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="RankPointsHistory-pagination flex justify-center">
            <Pagination
              page={getHistoryPointsParamsRequest.page}
              pageSize={getHistoryPointsParamsRequest.pageSize}
              total={historyPointsState?.total}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RankPointsHistory;
