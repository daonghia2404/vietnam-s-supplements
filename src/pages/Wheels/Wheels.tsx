import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import WheelBox from '@/components/WheelBox';
import PageLoading from '@/components/PageLoading';
import { getWheelsUserAction } from '@/redux/actions';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { TRootState } from '@/redux/reducers';
import { EWheelControllerAction } from '@/redux/actions/wheel-controller/constants';
import { TWheelResponse } from '@/services/api/wheel-controller/types';
import { LayoutPaths, Paths } from '@/pages/routers';

import './Wheels.scss';
import Pagination from '@/components/Pagination';

const Wheels: React.FC = () => {
  const dispatch = useDispatch();
  const [getWheelsUserParamsRequest, setGetWheelsUserParamsRequest] = useState({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const wheelsUserState = useSelector((state: TRootState) => state.wheelReducer.wheelsUser);
  const getWheelsUserLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EWheelControllerAction.GET_WHEELS_USER],
  );

  const handleClickWheelBox = (data: TWheelResponse): void => {
    navigate(`${LayoutPaths.Admin}${Paths.WheelDetail(data.id)}`);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetWheelsUserParamsRequest({
      ...getWheelsUserParamsRequest,
      page,
      pageSize: pageSize || getWheelsUserParamsRequest.pageSize,
    });
  };

  const getWheelsUserData = useCallback(() => {
    dispatch(getWheelsUserAction.request(getWheelsUserParamsRequest));
  }, [dispatch, getWheelsUserParamsRequest]);

  useEffect(() => {
    getWheelsUserData();
  }, [getWheelsUserData]);

  return (
    <div className="Wheels style-container">
      {getWheelsUserLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Vòng Quay" />

          <div className="Wheels-main flex flex-wrap justify-between">
            {wheelsUserState?.records?.map((item) => (
              <div className="Wheels-main-item">
                <WheelBox
                  image={item.image}
                  title={item.title}
                  description={`Bạn còn ${item.turnWheel} lượt quay`}
                  onClick={(): void => handleClickWheelBox(item)}
                />
              </div>
            ))}
          </div>

          <div className="Wheels-pagination flex justify-center">
            <Pagination
              page={getWheelsUserParamsRequest.page}
              pageSize={getWheelsUserParamsRequest.pageSize}
              total={wheelsUserState?.total}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Wheels;
