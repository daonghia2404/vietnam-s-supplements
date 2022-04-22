import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ProductBox from '@/components/ProductBox';
import ImageProduct from '@/assets/images/image-product.png';
import { TParamsGetProductsFavorite } from '@/services/api/product-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductsFavoriteAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import Pagination from '@/components/Pagination';

import './FavoriteProduct.scss';
import EmptyBox from '@/components/EmptyBox';

const FavoriteProduct: React.FC = () => {
  const dispatch = useDispatch();

  const [getProductsFavoriteParamsRequest, setGetProductsFavoriteParamsRequest] = useState<TParamsGetProductsFavorite>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    categoryId: null,
  });

  const productsFavoriteState = useSelector((state: TRootState) => state.productReducer.productsFavorite);
  const isEmpty = !productsFavoriteState?.records || productsFavoriteState.records.length === 0;

  const getProductsFavoriteLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS_FAVORITE],
  );

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetProductsFavoriteParamsRequest({
      ...getProductsFavoriteParamsRequest,
      page,
      pageSize: pageSize || getProductsFavoriteParamsRequest.pageSize,
    });
  };

  const getProductsFavorite = useCallback(() => {
    dispatch(getProductsFavoriteAction.request(getProductsFavoriteParamsRequest));
  }, [dispatch, getProductsFavoriteParamsRequest]);

  useEffect(() => {
    getProductsFavorite();
  }, [getProductsFavorite]);

  return (
    <div className="FavoriteProduct style-container">
      {getProductsFavoriteLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Sản phẩm yêu thích" />

          {isEmpty ? (
            <EmptyBox title="Chưa có sản phẩm yêu thích" />
          ) : (
            <>
              <div className="FavoriteProduct-main flex flex-wrap justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div className="FavoriteProduct-main-item">
                    <ProductBox
                      id={String(item)}
                      key={item}
                      image={ImageProduct}
                      title="Absolute Essentials"
                      price={318500}
                      sale={2}
                      type="1"
                    />
                  </div>
                ))}
              </div>

              <div className="FavoriteProduct-pagination flex justify-center">
                <Pagination
                  page={getProductsFavoriteParamsRequest.page}
                  pageSize={getProductsFavoriteParamsRequest.pageSize}
                  total={productsFavoriteState?.total}
                  onChange={handlePageChange}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FavoriteProduct;
