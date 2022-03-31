import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ExercisePackage from '@/containers/ExercisePackage';
import { TParamsGetPackExercisesBought } from '@/services/api/pack-exercise-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getPackExercisesBoughtAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EPackExerciseControllerAction } from '@/redux/actions/pack-exercise-controller/constants';
import PageLoading from '@/components/PageLoading';

import './ExerciseBought.scss';

const ExerciseBought: React.FC = () => {
  const dispatch = useDispatch();

  const [getPackExercisesParamsRequest, setGetPackExercisesParamsRequest] = useState<TParamsGetPackExercisesBought>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const getPackExercisesBoughtLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPackExerciseControllerAction.GET_PACK_EXERCISES_BOUGHT],
  );

  const packExercisesBoughtState = useSelector((state: TRootState) => state.packExerciseReducer.packExercisesBought);
  const parsePackExercisesBought = packExercisesBoughtState?.map((item) => ({
    ...item.packExercise,
    idPack: item.id,
    createdAtPack: item.createdAt,
    updatedAtPack: item.updatedAt,
  }));

  const getPackExercisesBoughtData = useCallback(() => {
    dispatch(getPackExercisesBoughtAction.request(getPackExercisesParamsRequest));
  }, [dispatch, getPackExercisesParamsRequest]);

  useEffect(() => {
    getPackExercisesBoughtData();
  }, [getPackExercisesBoughtData]);

  return (
    <div className="ExerciseBought style-container">
      {getPackExercisesBoughtLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Gói tập đã mua" />

          <div className="ExerciseBought-main">
            <ExercisePackage title="Các gói tập đã mua" dataSource={parsePackExercisesBought || []} />
          </div>
        </>
      )}
    </div>
  );
};

export default ExerciseBought;