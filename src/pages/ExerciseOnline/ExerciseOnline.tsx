import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackage from '@/containers/ExercisePackage';
import { TParamsGetPackPtOnlines } from '@/services/api/pack-pt-online-controller/types';
import { getPackPtOnlinesAction } from '@/redux/actions';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TRootState } from '@/redux/reducers';
import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';
import PageLoading from '@/components/PageLoading';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

import './ExerciseOnline.scss';

const ExerciseOnline: React.FC = () => {
  const dispatch = useDispatch();
  const [getPackPtOnlinesParamsRequest, setGetPackPtOnlinesParamsRequest] = useState<TParamsGetPackPtOnlines>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const getPackPtOnlinesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES],
  );

  const packPtOnlinesState = useSelector((state: TRootState) => state.packPtOnlineReducer.packPtOnlines);

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetPackPtOnlinesParamsRequest({
      ...getPackPtOnlinesParamsRequest,
      page,
      pageSize: pageSize || getPackPtOnlinesParamsRequest.pageSize,
    });
  };

  const getPackPtOnlinesData = useCallback(() => {
    dispatch(getPackPtOnlinesAction.request(getPackPtOnlinesParamsRequest));
  }, [dispatch, getPackPtOnlinesParamsRequest]);

  useEffect(() => {
    getPackPtOnlinesData();
  }, [getPackPtOnlinesData]);

  return (
    <div className="ExerciseOnline style-container">
      {getPackPtOnlinesLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Gói PT Online" />

          <div className="ExerciseOnline-main">
            <ExercisePackage
              type={ETypeExercisePackage.PT_ONLINE}
              dataSource={packPtOnlinesState?.records}
              paginate={{
                page: getPackPtOnlinesParamsRequest.page,
                pageSize: getPackPtOnlinesParamsRequest.pageSize,
                total: packPtOnlinesState?.total || 0,
              }}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseOnline;
