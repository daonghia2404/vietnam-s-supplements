import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';
import { TParamsGetOrders } from '@/services/api/order-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { EOrderStatus } from '@/services/api/order-controller/enums';
import { getOrdersAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import Pagination from '@/components/Pagination';
import EmptyBox from '@/components/EmptyBox';
import { cartFilterTabOptions } from '@/pages/Cart/Cart.data';
import PageLoading from '@/components/PageLoading';
import { formatMoneyVND } from '@/utils/functions';
import { LayoutPaths, Paths } from '@/pages/routers';

import './Cart.scss';

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const getOrdersLoading = useSelector((state: TRootState) => state.loadingReducer[EOrderControllerAction.GET_ORDERS]);
  const ordersState = useSelector((state: TRootState) => state.orderReducer.orders);

  const isEmpty = ordersState?.records && ordersState?.records?.length === 0;

  const [getOrdersParamsRequest, setGetOrdersParamsRequest] = useState<TParamsGetOrders>({
    status: EOrderStatus.NULL,
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  const handleNavigateCartDetail = (id: string): void => {
    navigate(`${LayoutPaths.Profile}${Paths.CartDetail(id)}`);
  };

  const handlePageChange = (page: number, pageSize?: number): void => {
    setGetOrdersParamsRequest({
      ...getOrdersParamsRequest,
      page,
      pageSize: pageSize || getOrdersParamsRequest.pageSize,
    });
  };

  const handleFilterOrder = (status: EOrderStatus): void => {
    setGetOrdersParamsRequest({
      ...getOrdersParamsRequest,
      page: DEFAULT_PAGE,
      status,
    });
  };

  const getOrdersData = useCallback(() => {
    dispatch(
      getOrdersAction.request({
        ...getOrdersParamsRequest,
        status: getOrdersParamsRequest?.status || undefined,
      }),
    );
  }, [dispatch, getOrdersParamsRequest]);

  useEffect(() => {
    getOrdersData();
  }, [getOrdersData]);

  return (
    <div className="Cart style-container">
      <HeaderSkew title="Lịch sử đơn hàng" />

      <div className="Cart-main">
        <div className="Cart-main-header flex justify-between flex-wrap">
          {cartFilterTabOptions.map((item) => (
            <Button
              className={classNames({ active: item.value === getOrdersParamsRequest.status })}
              size="small"
              title={item.label}
              key={item.value}
              shadow={false}
              onClick={(): void => handleFilterOrder(item.value)}
            />
          ))}
        </div>

        {isEmpty ? (
          <EmptyBox title="Chưa có đơn hàng" />
        ) : (
          <div className="Cart-main-body">
            {getOrdersLoading ? (
              <PageLoading />
            ) : (
              <>
                {ordersState?.records.map((item) => {
                  const statusOrder = cartFilterTabOptions.find(
                    (option) => String(option.value) === String(item.status),
                  );

                  return (
                    <div key={item.id} className="Cart-card" onClick={(): void => handleNavigateCartDetail(item.id)}>
                      <div className="Cart-card-row flex justify-between">
                        <div className="Cart-card-text bold">Mã đơn hàng</div>
                        <div className="Cart-card-text">{item.orderCode}</div>
                      </div>
                      <div className="Cart-card-row flex justify-between">
                        <div className={classNames('Cart-card-text', statusOrder?.color)}>{statusOrder?.label}</div>
                      </div>
                      <div className="Cart-card-row flex justify-between">
                        <div className="Cart-card-text bold">{item.amount || 0} sản phẩm</div>
                        <div className="Cart-card-text hightlight">
                          {formatMoneyVND({ amount: item.totalprice || 0, showSuffix: true })}
                        </div>
                      </div>

                      <div className="Cart-card-footer">
                        <div className="Cart-card-row flex justify-between">
                          <div className="Cart-card-text">Tích điểm</div>
                          <div className="Cart-card-text">+ {item.point} điểm</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>

      <div className="Cart-pagination flex justify-center">
        <Pagination
          page={getOrdersParamsRequest.page}
          pageSize={getOrdersParamsRequest.pageSize}
          total={ordersState?.total}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Cart;
