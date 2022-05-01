import React, { useState } from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import { caculatorSalePrice, formatMoneyVND, showNotification } from '@/utils/functions';
import AuthHelpers from '@/services/helpers';
import { ETypeNotification } from '@/common/enums';
import { addCartAction, getCartAction, uiActions } from '@/redux/actions';
import AddCartModal from '@/containers/AddCartModal';
import { handleAddNewCartLocalStorage, parseCartData } from '@/utils/cart';
import { TRootState } from '@/redux/reducers';

import { TProductBoxProps } from './ProductBox.types';
import './ProductBox.scss';

const ProductBox: React.FC<TProductBoxProps> = ({ className, image, sale, title, price, hasBg, link, id, type }) => {
  const atk = AuthHelpers.getAccessToken();
  const dispatch = useDispatch();

  const cartsStorage = useSelector((state: TRootState) => state.uiReducer.cartsStorage) || [];

  const [addCartModalState, setAddCartModalState] = useState<{
    visible: boolean;
    data?: { id: string; type: string };
  }>({
    visible: false,
  });

  const handleOpenAddCartModal = (): void => {
    setAddCartModalState({
      visible: true,
      data: {
        id,
        type,
      },
    });
  };
  const handleCloseAddCartModal = (): void => {
    setAddCartModalState({
      visible: false,
    });
  };
  const handleSubmitAddCartModal = (values: any): void => {
    const body = {
      ...values,
      product: id,
    };

    if (atk) {
      dispatch(addCartAction.request(body, handleAddCartSuccess));
    } else {
      const newCartsData = handleAddNewCartLocalStorage(
        cartsStorage,
        parseCartData({
          ...values,
          product: {
            id,
            name: title,
            price,
            sale,
            image,
          },
        }),
      );
      dispatch(uiActions.setCartsStorage(newCartsData));
      handleCloseAddCartModal();
    }
  };

  const handleNavigateProductDetail = (): void => {
    if (link) navigate(link);
  };

  const handleAddCartSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getCartData();
    handleCloseAddCartModal();
  };

  const getCartData = (): void => {
    dispatch(getCartAction.request());
  };

  return (
    <div className={classNames('ProductBox', className, { background: hasBg })}>
      {sale && <div className="ProductBox-badge">{sale}%</div>}
      {/* <div className={classNames('ProductBox-heart', { disabled: favoriteLoading })} onClick={handleClickFavorite}>
        <Icon name={EIconName.Heart} />
      </div> */}
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
          <div className="ProductBox-info-price-current">
            {formatMoneyVND({ amount: price })}
            <sup>VNĐ</sup>
          </div>
          {sale && (
            <div className="ProductBox-info-price-old">
              {formatMoneyVND({ amount: caculatorSalePrice(price, Number(sale)) })}
              <sup>VNĐ</sup>
            </div>
          )}
        </div>
        <div className="ProductBox-info-btn flex justify-center">
          <div className={classNames('ProductBox-info-cta')} onClick={handleOpenAddCartModal}>
            Mua ngay
          </div>
        </div>
      </div>

      <AddCartModal {...addCartModalState} onClose={handleCloseAddCartModal} onSubmit={handleSubmitAddCartModal} />
    </div>
  );
};

export default ProductBox;
