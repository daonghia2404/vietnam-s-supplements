import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { caculatorSalePrice, formatMoneyVND, showNotification } from '@/utils/functions';
import AuthHelpers from '@/services/helpers';
import { ETypeNotification } from '@/common/enums';
import { addCartAction, getCartAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';

import { TProductBoxProps } from './ProductBox.types';
import './ProductBox.scss';

const ProductBox: React.FC<TProductBoxProps> = ({ className, image, sale, title, price, hasBg, link, onBuy, id }) => {
  const atk = AuthHelpers.getAccessToken();
  const dispatch = useDispatch();

  const addCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.ADD_CART]);

  const handleNavigateProductDetail = (): void => {
    if (link) navigate(link);
  };

  const handleBuyProduct = (): void => {
    if (atk && !addCartLoading) {
      const body = {
        product: id,
        amount: 1,
      };
      dispatch(addCartAction.request(body, handleAddCartSuccess));
      onBuy?.();
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui lòng đăng nhập để thực hiện hành động');
    }
  };

  const handleAddCartSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getCartData();
  };

  const getCartData = (): void => {
    dispatch(getCartAction.request());
  };

  return (
    <div className={classNames('ProductBox', className, { background: hasBg })}>
      {sale && <div className="ProductBox-badge">{sale}%</div>}
      <div className="ProductBox-image" onClick={handleNavigateProductDetail}>
        <img src={image} alt="" />
      </div>
      <div className="ProductBox-info">
        <div className="ProductBox-info-title" onClick={handleNavigateProductDetail}>
          {title}
        </div>
        <div
          className={classNames('ProductBox-info-price flex items-end justify-center')}
          onClick={handleNavigateProductDetail}
        >
          {sale ? (
            <>
              <div className="ProductBox-info-price-current">
                {formatMoneyVND({ amount: caculatorSalePrice(Number(price), Number(sale)) })}
                <sup>VNĐ</sup>
              </div>
              <div className="ProductBox-info-price-old">
                {formatMoneyVND({ amount: price || 0 })}
                <sup>VNĐ</sup>
              </div>
            </>
          ) : (
            <>
              <div className="ProductBox-info-price-current">
                {formatMoneyVND({ amount: price || 0 })}
                <sup>VNĐ</sup>
              </div>
            </>
          )}
        </div>
        <div className="ProductBox-info-btn flex justify-center">
          <div className={classNames('ProductBox-info-cta', { loading: addCartLoading })} onClick={handleBuyProduct}>
            Mua ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
