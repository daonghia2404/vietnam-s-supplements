import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import { TRootState } from '@/redux/reducers';
import { TParamsGetProducts } from '@/services/api/product-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { getProductsAction } from '@/redux/actions';
import { ECategoryControllerAction } from '@/redux/actions/category-controller/constants';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import ProductsCarousel from '@/containers/ProductsCarousel';
import ProductBox from '@/components/ProductBox';
import Pagination from '@/components/Pagination';
import { Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';

import './Category.scss';
import { scrollToTop } from '@/utils/functions';

const Category: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<TParamsGetProducts>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const categorysState = useSelector((state: TRootState) => state.categoryReducer.categorys);
  const productsState = useSelector((state: TRootState) => state.productReducer.products);
  const getCategorysLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ECategoryControllerAction.GET_CATEGORYS],
  );
  const categoryTitle = categorysState?.find((item) => item.id === id)?.name || 'Danh mục';
  const getProductsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS],
  );
  const isEmpty = productsState?.records.length === 0;

  const loading = getCategorysLoading || getProductsLoading;

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetProductsParamsRequest({
      ...getProductsParamsRequest,
      page,
      pageSize: pageSize || getProductsParamsRequest.pageSize,
    });
  };

  const getProductsByCategory = useCallback(() => {
    if (id) dispatch(getProductsAction.request({ ...getProductsParamsRequest, categoryId: id }));
  }, [dispatch, getProductsParamsRequest, id]);

  useEffect(() => {
    getProductsByCategory();
  }, [getProductsByCategory]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Category style-content">
      {loading ? (
        <PageLoading />
      ) : (
        <div className="Category-wrapper">
          <HeaderSkew title={categoryTitle} />

          <ProductsCarousel data={productsState?.records} />

          {isEmpty ? (
            <EmptyBox title="Không có dữ liệu sản phẩm" />
          ) : (
            <div className="Category-list flex flex-wrap">
              {productsState?.records?.map((item) => (
                <div key={item.id} className="Category-list-item">
                  <ProductBox
                    {...item}
                    type={item.type}
                    image={item.image}
                    title={item.name}
                    sale={Number(item.sale)}
                    price={Number(item.price)}
                    link={Paths.Product(item.id)}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="Category-pagination flex justify-center">
            <Pagination
              page={getProductsParamsRequest.page}
              pageSize={getProductsParamsRequest.pageSize}
              total={productsState?.total}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
