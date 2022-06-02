import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousels from '@/components/Carousels';
import { handleErrorImageUrl } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { getBannersAction } from '@/redux/actions';

import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  const dispatch = useDispatch();

  const bannersData = useSelector((state: TRootState) => state.bannerReducer.banners);

  const getBannersData = useCallback(() => {
    dispatch(getBannersAction.request());
  }, [dispatch]);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  return (
    <div className="HomeBanner">
      <Carousels autoplay dots={false} arrows={false}>
        {bannersData?.map((item) => (
          <div key={item.id} className="HomeBanner-item">
            <img src={item?.imageUrls?.[0]?.imageUrl} onError={handleErrorImageUrl} alt="" />
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default HomeBanner;
