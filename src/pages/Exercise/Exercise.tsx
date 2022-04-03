import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackage from '@/containers/ExercisePackage';
import { TParamsGetPackExercises } from '@/services/api/pack-exercise-controller/types';
import { getPackExercisesAction } from '@/redux/actions';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TRootState } from '@/redux/reducers';
import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import PageLoading from '@/components/PageLoading';

import './Exercise.scss';
import { ETypeExercisePackage } from '@/containers/ExercisePackage/ExercisePackage.enums';

const Exercise: React.FC = () => {
  const dispatch = useDispatch();
  const [getPackExercisesParamsRequest, setGetPackExercisesParamsRequest] = useState<TParamsGetPackExercises>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const getPackExercisesLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.GET_PACK_EXERCISES],
  );

  const packExercisesState = useSelector((state: TRootState) => state.packExerciseReducer.packExercises);

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetPackExercisesParamsRequest({
      ...getPackExercisesParamsRequest,
      page,
      pageSize: pageSize || getPackExercisesParamsRequest.pageSize,
    });
  };

  const getPackExercisesData = useCallback(() => {
    dispatch(getPackExercisesAction.request(getPackExercisesParamsRequest));
  }, [dispatch, getPackExercisesParamsRequest]);

  useEffect(() => {
    getPackExercisesData();
  }, [getPackExercisesData]);

  return (
    <div className="Exercise style-container">
      {getPackExercisesLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Gói tập" />

          <div className="Exercise-main">
            <ExercisePackage
              type={ETypeExercisePackage.EXERCISE}
              dataSource={packExercisesState}
              paginate={{
                page: getPackExercisesParamsRequest.page,
                pageSize: getPackExercisesParamsRequest.pageSize,
                total: 0,
              }}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Exercise;
