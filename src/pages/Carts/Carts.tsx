import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import classNames from 'classnames';

import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct from '@/assets/images/image-product.png';
import Amount from '@/components/Amount';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import AuthHelpers from '@/services/helpers';

import { deleteCartAction, getCartAction, patchCartAction } from '@/redux/actions';
import './Carts.scss';
import { TRootState } from '@/redux/reducers';
import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';
import PageLoading from '@/components/PageLoading';
import EmptyBox from '@/components/EmptyBox';
import { Paths } from '@/pages/routers';
import { TCartResponse } from '@/services/api/cart-controller/types';
import { formatMoneyVND } from '@/utils/functions';

const Carts: React.FC = () => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();

  const carts = useSelector((state: TRootState) => state.cartReducer.cart);
  const getCartsLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.GET_CART]);
  const patchCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.PATCH_CART]);
  const deleteCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.DELETE_CART]);
  const isEmpty = carts?.cart?.length === 0;

  const handleChangeAmount = (amount: number, data: TCartResponse): void => {
    if (!patchCartLoading) {
      const patchBody = {
        amount,
      };

      dispatch(patchCartAction.request(data.id, patchBody, getCartsData));
    }
  };

  const handleRemoveCart = (data: TCartResponse): void => {
    if (!deleteCartLoading) dispatch(deleteCartAction.request(data.id, getCartsData));
  };

  const handleClickContinueShopping = (): void => {
    navigate(Paths.Home);
  };

  const handleSubmitCart = (): void => {
    navigate(Paths.Checkout);
  };

  const getCartsData = useCallback(() => {
    if (atk) dispatch(getCartAction.request());
  }, [atk, dispatch]);

  useEffect(() => {
    getCartsData();
  }, [getCartsData]);

  return (
    <div className="Carts">
      <HeaderSkew title="Giỏ hàng" />

      {getCartsLoading ? (
        <PageLoading />
      ) : (
        <>
          {isEmpty ? (
            <EmptyBox
              title="Chưa có sản phẩm nào trong giỏ hàng của bạn"
              buttonProps={{ title: 'Tiếp tục mua sắm', onClick: handleClickContinueShopping }}
            />
          ) : (
            <div className="Carts-wrapper flex justify-between">
              <div className="Carts-wrapper-item">
                <div className="Carts-orders">
                  {carts?.cart.map((item) => (
                    <div key={item.id} className="Carts-orders-item Carts-card flex items-start justify-between">
                      <div
                        className={classNames('Carts-orders-item-remove', { loading: deleteCartLoading })}
                        onClick={(): void => handleRemoveCart(item)}
                      >
                        <Icon name={EIconName.Close} />
                      </div>
                      <div className="Carts-orders-item-image">
                        <img src={item.product.image} alt="" />
                      </div>
                      <div className="Carts-orders-item-title">{item.product.name}</div>
                      <div className="Carts-orders-item-amount">
                        Số lượng:
                        <Amount
                          value={item.amount}
                          disabled={patchCartLoading}
                          onChange={(value): void => handleChangeAmount(value, item)}
                        />
                      </div>
                      <div className="Carts-orders-item-price">
                        Tổng tiền
                        <strong>{formatMoneyVND({ amount: item?.product?.price || 0 })} VND</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="Carts-wrapper-item">
                <div className="Carts-card">
                  <div className="Carts-row flex justify-between">
                    <div className="Carts-row-text">Tổng đơn hàng</div>
                    <div className="Carts-row-text">
                      <strong>{formatMoneyVND({ amount: carts?.total_price_cart || 0 })} VND</strong>
                    </div>
                  </div>
                  <div className="Carts-row border-top">
                    <Button type="primary" title="Gửi đơn hàng" size="large" onClick={handleSubmitCart} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carts;
