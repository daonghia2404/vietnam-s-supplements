import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import NewBlock from '@/components/NewBlock';
import Pagination from '@/components/Pagination';
import NewsCarousel from '@/containers/NewsCarousel';
import { getHandbooksAction } from '@/redux/actions';
import { TParamsGetHandbooks } from '@/services/api/handbook-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TRootState } from '@/redux/reducers';
import { EHandbookControllerAction } from '@/redux/actions/handbook-controller/constants';
import PageLoading from '@/components/PageLoading';

import './Handbooks.scss';
import EmptyBox from '@/components/EmptyBox';
import { Paths } from '@/pages/routers';

const Handbooks: React.FC = () => {
  const dispatch = useDispatch();
  const [getHandbooksParamsRequest, setGetHandbooksParamsRequest] = useState<TParamsGetHandbooks>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const handbooks = useSelector((state: TRootState) => state.handbookReducer.handbooks);
  const handbooksTotal = useSelector((state: TRootState) => state.handbookReducer.handbooks?.total);
  const isEmpty = handbooks?.records?.length === 0;

  const getHandbooksLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EHandbookControllerAction.GET_HANDBOOKS],
  );

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetHandbooksParamsRequest({
      ...getHandbooksParamsRequest,
      page,
      pageSize: pageSize || getHandbooksParamsRequest.pageSize,
    });
  };

  const getHandbooksData = useCallback(() => {
    dispatch(getHandbooksAction.request(getHandbooksParamsRequest));
  }, [dispatch, getHandbooksParamsRequest]);

  useEffect(() => {
    getHandbooksData();
  }, [getHandbooksData]);

  return (
    <div className="Handbooks">
      {getHandbooksLoading ? (
        <PageLoading />
      ) : (
        <div className="Handbooks-wrapper">
          <HeaderSkew title="Cẩm nang" />

          <NewsCarousel />

          <div className="Handbooks-title">Cẩm nang</div>
          {isEmpty ? (
            <EmptyBox title="Không có dữ liệu cẩm nang" />
          ) : (
            <div className="Handbooks-list flex flex-wrap">
              {handbooks?.records?.map((item) => (
                <div key={item.id} className="Handbooks-list-item">
                  <NewBlock
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    url={Paths.HandbookDetail(String(item.id))}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="Handbooks-pagination flex justify-center">
            <Pagination
              page={getHandbooksParamsRequest.page}
              pageSize={getHandbooksParamsRequest.pageSize}
              total={handbooksTotal}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Handbooks;
