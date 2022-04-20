import React, { useCallback, useEffect } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import { TRootState } from '@/redux/reducers';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import { getProductAction } from '@/redux/actions';

import './Product.scss';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state: TRootState) => state.productReducer.product);
  const getProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCT],
  );

  const getProductData = useCallback(() => {
    if (id) dispatch(getProductAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  return (
    <div className="Product style-content">
      {getProductLoading ? (
        <PageLoading />
      ) : (
        <div className="Product-wrapper">
          <HeaderSkew title="Sản phẩm" />
        </div>
      )}
    </div>
  );
};

export default Product;
