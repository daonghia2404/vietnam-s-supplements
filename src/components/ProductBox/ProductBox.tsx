import React from 'react';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import { TProductBoxProps } from './ProductBox.types';

import './ProductBox.scss';

const ProductBox: React.FC<TProductBoxProps> = ({
  className,
  image,
  sale,
  title,
  price,
  oldPrice,
  hasBg,
  link,
  onBuy,
}) => {
  const handleNavigateProductDetail = (): void => {
    if (link) navigate(link);
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
          className={classNames('ProductBox-info-price flex items-end', {
            'justify-center': price && !oldPrice,
            'justify-between': price && oldPrice,
          })}
          onClick={handleNavigateProductDetail}
        >
          <div className="ProductBox-info-price-current">
            {price}
            <sup>VNĐ</sup>
          </div>
          {oldPrice && (
            <div className="ProductBox-info-price-old">
              {oldPrice}
              <sup>VNĐ</sup>
            </div>
          )}
        </div>
        <div className="ProductBox-info-btn flex justify-center">
          <div className="ProductBox-info-cta" onClick={onBuy}>
            Mua ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
