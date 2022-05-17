import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import { TRootState } from '@/redux/reducers';
import { getProductsSpecialAction } from '@/redux/actions';
import { ECategoryControllerAction } from '@/redux/actions/category-controller/constants';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import ProductsCarousel from '@/containers/ProductsCarousel';
import ProductBox from '@/components/ProductBox';
import { Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';
import { scrollToTop } from '@/utils/functions';

import './Categorys.scss';

const Categorys: React.FC = () => {
  const dispatch = useDispatch();

  // const [form] = Form.useForm();
  // const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<TParamsGetProducts>({
  //   page: DEFAULT_PAGE,
  //   pageSize: DEFAULT_PAGE_SIZE,
  // });
  const productsSpecialState = useSelector((state: TRootState) => state.productReducer.productsSpecial);
  const getCategoryssLoading = useSelector(
    (state: TRootState) => state.loadingReducer[ECategoryControllerAction.GET_CATEGORYS],
  );
  const getProductsLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS],
  );
  const isEmpty = productsSpecialState?.length === 0;

  const loading = getCategoryssLoading || getProductsLoading;

  // const handlePageChange = (page: number, pageSize?: number): void => {
  //   setGetProductsParamsRequest({
  //     ...getProductsParamsRequest,
  //     page,
  //     pageSize: pageSize || getProductsParamsRequest.pageSize,
  //   });
  // };

  const getProductsSpecial = useCallback(() => {
    dispatch(getProductsSpecialAction.request({}));
  }, [dispatch]);

  // const handleSearchProduct = (): void => {
  //   const values = form.getFieldsValue();

  //   let body = {
  //     ...getProductsParamsRequest,
  //     page: DEFAULT_PAGE,
  //     name: values?.name,
  //   };

  //   if (values.price) {
  //     body = {
  //       ...body,
  //       sortField: ESortField.PRICE,
  //       sortType: values.price?.value,
  //     };
  //   }
  //   setGetProductsParamsRequest(body);
  // };

  useEffect(() => {
    getProductsSpecial();
  }, [getProductsSpecial]);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="Categorys">
      {loading ? (
        <PageLoading />
      ) : (
        <div className="Categorys-wrapper">
          <HeaderSkew title="Danh mục sản phẩm" />

          <ProductsCarousel data={productsSpecialState} />

          {/* <Form form={form} className="Categorys-filters flex justify-between items-center">
            <Form.Item name="name">
              <Input placeholder="Nhập sản phẩm cần tìm kiếm" onEnter={handleSearchProduct} />
            </Form.Item>
            <Form.Item name="price">
              <Select placeholder="Lọc sản phẩm" options={filterProuductsOptions} onChange={handleSearchProduct} />
            </Form.Item>
          </Form> */}

          {isEmpty ? (
            <EmptyBox title="Không có dữ liệu sản phẩm" />
          ) : (
            <div className="Categorys-list flex flex-wrap">
              {productsSpecialState?.map((item) => (
                <div key={item.id} className="Categorys-list-item">
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

          {/* <div className="Categorys-pagination flex justify-center">
            <Pagination
              page={getProductsParamsRequest.page}
              pageSize={getProductsParamsRequest.pageSize}
              total={productsState?.total}
              onChange={handlePageChange}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Categorys;
