import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ProductBox from '@/components/ProductBox';
import ImageProduct from '@/assets/images/image-product.png';

import './FavoriteProduct.scss';

const FavoriteProduct: React.FC = () => {
  return (
    <div className="FavoriteProduct style-container">
      <HeaderSkew title="Sản phẩm yêu thích" />

      <div className="FavoriteProduct-main flex flex-wrap justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div className="FavoriteProduct-main-item">
            <ProductBox
              key={item}
              image={ImageProduct}
              title="Absolute Essentials"
              price="318.500"
              oldPrice="325.000"
              sale="-2%"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProduct;
