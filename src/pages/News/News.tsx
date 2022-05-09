import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import NewBlock from '@/components/NewBlock';
import Pagination from '@/components/Pagination';
import NewsCarousel from '@/containers/NewsCarousel';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getNewsAction } from '@/redux/actions';
import { ENewControllerAction } from '@/redux/actions/new-controller/constants';
import { TRootState } from '@/redux/reducers';
import { TParamsGetNews } from '@/services/api/new-controller/types';
import PageLoading from '@/components/PageLoading';
import EmptyBox from '@/components/EmptyBox';

import './News.scss';
import { Paths } from '@/pages/routers';
import { scrollToTop } from '@/utils/functions';

const News: React.FC = () => {
  const dispatch = useDispatch();
  const [getNewsParamsRequest, setGetNewsParamsRequest] = useState<TParamsGetNews>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const news = useSelector((state: TRootState) => state.newReducer.news);
  const newsTotal = useSelector((state: TRootState) => state.newReducer.news?.total);
  const isEmpty = news?.records.length === 0;

  const newsCarouselData = [...(news?.records || [])]?.splice(0, 3)?.map((item) => ({
    id: String(item.id),
    title: item.title,
    image: item.image,
    description: item.description,
    shareUrl: `${Paths.HandbookDetail(String(item.id))}`,
  }));

  const getNewsLoading = useSelector((state: TRootState) => state.loadingReducer[ENewControllerAction.GET_NEWS]);

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetNewsParamsRequest({
      ...getNewsParamsRequest,
      page,
      pageSize: pageSize || getNewsParamsRequest.pageSize,
    });
  };

  const getNewsData = useCallback(() => {
    dispatch(getNewsAction.request(getNewsParamsRequest));
  }, [dispatch, getNewsParamsRequest]);

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="News style-content">
      {getNewsLoading ? (
        <PageLoading />
      ) : (
        <div className="News-wrapper">
          <HeaderSkew title="Tin tức" />

          <NewsCarousel data={newsCarouselData} />

          <div className="News-title">Tin tức</div>
          {isEmpty ? (
            <EmptyBox title="Không có dữ liệu tin tức" />
          ) : (
            <div className="News-list flex flex-wrap">
              {news?.records?.map((item) => (
                <div key={item.id} className="News-list-item">
                  <NewBlock
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    url={Paths.NewDetail(String(item.id))}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="News-pagination flex justify-center">
            <Pagination
              page={getNewsParamsRequest.page}
              pageSize={getNewsParamsRequest.pageSize}
              total={newsTotal}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
