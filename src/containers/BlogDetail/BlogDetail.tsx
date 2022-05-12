/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from '@reach/router';

import { TRootState } from '@/redux/reducers';
import { EHandbookControllerAction } from '@/redux/actions/handbook-controller/constants';
import { ENewControllerAction } from '@/redux/actions/new-controller/constants';
import PageLoading from '@/components/PageLoading';
import { getHandbookAction, getNewAction } from '@/redux/actions';

import { ETypeBlogDetail } from './BlogDetail.enums';
import { TBlogDetailProps } from './BlogDetail.types';
import './BlogDetail.scss';

const BlogDetail: React.FC<TBlogDetailProps> = ({ type }) => {
  const dispatch = useDispatch();
  const isHandbookBlog = type === ETypeBlogDetail.HANDBOOK;
  const { id } = useParams();

  const getHandbookLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EHandbookControllerAction.GET_HANDBOOK],
  );
  const getNewLoading = useSelector((state: TRootState) => state.loadingReducer[ENewControllerAction.GET_NEW]);
  const handbookState = useSelector((state: TRootState) => state.handbookReducer.handbook);
  const newState = useSelector((state: TRootState) => state.newReducer.new);

  const loading = getHandbookLoading || getNewLoading;

  const data = isHandbookBlog ? handbookState : newState;

  const getHandbookData = useCallback(() => {
    if (id) dispatch(getHandbookAction.request(id));
  }, [dispatch, id]);

  const getNewData = useCallback(() => {
    if (id) dispatch(getNewAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    switch (type) {
      case ETypeBlogDetail.HANDBOOK:
        getHandbookData();
        break;
      case ETypeBlogDetail.NEW:
        getNewData();
        break;
      default:
        break;
    }
  }, [type, getHandbookData, getNewData]);

  return (
    <div className="BlogDetail">
      {loading ? (
        <PageLoading />
      ) : (
        <div className="BlogDetail-wrapper">
          {/* <div className="BlogDetail-image">
            <img src={data?.image} onError={handleErrorImageUrl} alt="" />
          </div> */}
          <div className="BlogDetail-content style-content" dangerouslySetInnerHTML={{ __html: data?.content || '' }} />
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
