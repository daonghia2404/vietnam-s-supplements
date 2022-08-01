import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeBanner from '@/containers/HomeBanner';
import TradeMark from '@/containers/TradeMark';
import ProductsCarousel from '@/containers/ProductsCarousel';
import ReviewsCarousel from '@/containers/ReviewsCarousel';
import QuanlityStandards from '@/containers/QualityStandards';
import { TRootState } from '@/redux/reducers';
import { getProductsAction } from '@/redux/actions';
import { DEFAULT_PAGE } from '@/common/constants';
import { scrollToTop } from '@/utils/functions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const categoryState = useSelector((state: TRootState) => state.categoryReducer.categorys);
  const featureCategoryId = categoryState?.find(
    (item) => item.name?.toLowerCase() === 'SẢN PHẨM NỔI BẬT'.toLowerCase(),
  )?.id;

  const productsState = useSelector((state: TRootState) => state.productReducer.productsSpecial);
  const productsSpecialArray = Object.entries(productsState || {})
    .slice(0, -1)
    .map(([, data]) => data);

  useEffect(() => {
    if (featureCategoryId) {
      dispatch(getProductsAction.request({ page: DEFAULT_PAGE, pageSize: 5, categoryId: featureCategoryId }));
    }
  }, [dispatch, featureCategoryId]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Home">
      <HomeBanner />
      <TradeMark />
      <ProductsCarousel title="Sản phẩm" data={productsSpecialArray} />
      <ReviewsCarousel />
      <QuanlityStandards />
    </div>
  );
};

export default Home;
