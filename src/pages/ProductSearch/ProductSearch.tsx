import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import { TRootState } from '@/redux/reducers';
import { TParamsGetProducts } from '@/services/api/product-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductsSearchAction } from '@/redux/actions';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import ProductBox from '@/components/ProductBox';
import Pagination from '@/components/Pagination';
import { Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';
import { getQueryParam, scrollToTop } from '@/utils/functions';

import './ProductSearch.scss';

const ProductSearch: React.FC = () => {
  const keyword = getQueryParam('keyword') || undefined;
  const dispatch = useDispatch();
  const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<TParamsGetProducts>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
    name: keyword,
  });
  const productsSearchState = useSelector((state: TRootState) => state.productReducer.productsSearch);
  const getProductsSearchLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS_SEARCH],
  );
  const isEmpty = productsSearchState?.records.length === 0;

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetProductsParamsRequest({
      ...getProductsParamsRequest,
      page,
      pageSize: pageSize || getProductsParamsRequest.pageSize,
    });
  };

  const getProductsByProductSearch = useCallback(() => {
    if (keyword) dispatch(getProductsSearchAction.request({ ...getProductsParamsRequest, name: keyword }));
    else navigate(Paths.Home);
  }, [dispatch, getProductsParamsRequest, keyword]);

  useEffect(() => {
    getProductsByProductSearch();
  }, [getProductsByProductSearch]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="ProductSearch style-content">
      {getProductsSearchLoading ? (
        <PageLoading />
      ) : (
        <div className="ProductSearch-wrapper">
          <HeaderSkew title="T??m ki???m s???n ph???m" />

          <div className="ProductSearch-text">
            K???t qu??? t??m ki???m <strong>{`"${keyword}"`}</strong>. T??m ???????c{' '}
            <strong>{productsSearchState?.total || 0}</strong> s???n ph???m:
          </div>

          {isEmpty ? (
            <EmptyBox title="Kh??ng c?? d??? li???u s???n ph???m" />
          ) : (
            <div className="ProductSearch-list flex flex-wrap">
              {productsSearchState?.records?.map((item) => (
                <div key={item.id} className="ProductSearch-list-item">
                  <ProductBox
                    {...item}
                    title={item.name}
                    sale={Number(item.sale)}
                    price={Number(item.price)}
                    link={Paths.Product(item.id)}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="ProductSearch-pagination flex justify-center">
            <Pagination
              page={getProductsParamsRequest.page}
              pageSize={getProductsParamsRequest.pageSize}
              total={productsSearchState?.total}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
