import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import { TRootState } from '@/redux/reducers';
import { getProductsAllAction, getProductsSpecialAction } from '@/redux/actions';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import ProductsCarousel from '@/containers/ProductsCarousel';
import ProductBox from '@/components/ProductBox';
import { Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';
import { scrollToTop } from '@/utils/functions';
import { TParamsGetProductsAll } from '@/services/api/product-controller/types';
import { DEFAULT_PAGE, filterProuductsOptions } from '@/common/constants';
import { ESortField } from '@/services/api/product-controller/enums';
import Input from '@/components/Input';
import Select from '@/components/Select';

import './Categorys.scss';

const Categorys: React.FC = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [getProductsParamsRequest, setGetProductsParamsRequest] = useState<TParamsGetProductsAll>({});

  const productsAllState = useSelector((state: TRootState) => state.productReducer.productsAll);
  const productsSpecialState = useSelector((state: TRootState) => state.productReducer.productsSpecial);
  const productsSpecialArray = Object.entries(productsSpecialState || {})
    .slice(0, -1)
    .map(([, data]) => data);

  const getProductsSpecialLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS_SPECIAL],
  );
  const getProductsAllLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCTS_ALL],
  );
  const isEmpty = productsAllState?.length === 0;

  const loading = getProductsSpecialLoading || getProductsAllLoading;

  const getProductsAll = useCallback(() => {
    dispatch(getProductsAllAction.request(getProductsParamsRequest));
  }, [dispatch, getProductsParamsRequest]);

  const getProductsSpecial = useCallback(() => {
    dispatch(getProductsSpecialAction.request({}));
  }, [dispatch]);

  const handleSearchProduct = (): void => {
    const values = form.getFieldsValue();

    let body = {
      ...getProductsParamsRequest,
      page: DEFAULT_PAGE,
      name: values?.name,
    };

    if (values.price) {
      body = {
        ...body,
        sortField: ESortField.PRICE,
        sortType: values.price?.value,
      };
    }
    setGetProductsParamsRequest(body);
  };

  useEffect(() => {
    getProductsAll();
  }, [getProductsAll]);

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

          <ProductsCarousel data={productsSpecialArray} />

          <Form form={form} className="Categorys-filters flex justify-between items-center">
            <Form.Item name="name">
              <Input placeholder="Nhập sản phẩm cần tìm kiếm" onEnter={handleSearchProduct} />
            </Form.Item>
            <Form.Item name="price">
              <Select placeholder="Lọc sản phẩm" options={filterProuductsOptions} onChange={handleSearchProduct} />
            </Form.Item>
          </Form>

          {isEmpty ? (
            <EmptyBox title="Không có dữ liệu sản phẩm" />
          ) : (
            <div className="Categorys-wrapper-main">
              {productsAllState
                ?.filter((group) => group?.products?.length > 0)
                ?.map((group) => (
                  <>
                    <HeaderSkew
                      title={group?.category?.name}
                      center
                      onClick={(): void => {
                        navigate(Paths.Category(group.category.id));
                      }}
                    />
                    <div className="Categorys-list flex flex-wrap">
                      {group?.products?.map((item) => (
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
                  </>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Categorys;
