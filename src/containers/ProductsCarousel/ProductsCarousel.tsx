import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct from '@/assets/images/image-product.png';
import ImageProductKOL from '@/assets/images/image-product-kol.jpg';

import './ProductsCarousel.scss';
import ProductBox from '@/components/ProductBox';
import Carousels from '@/components/Carousels';

const ProductsCarousel: React.FC = () => {
  return (
    <div className="ProductsCarousel">
      <div className="container">
        <div className="ProductsCarousel-wrapper">
          <HeaderSkew title="Sản phẩm" center />

          <div className="ProductsCarousel-main flex">
            <div className="ProductsCarousel-main-item">
              <ProductBox image={ImageProduct} title="Absolute Bio Astaxanthin" price="535.500" hasBg />
            </div>
            <div className="ProductsCarousel-main-item">
              <Carousels autoplay dots={false}>
                {[1, 2].map((item) => (
                  <div key={item}>
                    <div className="ProductsCarousel-carousel-item flex">
                      <div className="ProductsCarousel-carousel-item-image">
                        <img src={ImageProductKOL} alt="" />
                      </div>
                      <div className="ProductsCarousel-carousel-item-info">
                        <div className="ProductsCarousel-carousel-item-info-title">Whey Protein Isolate</div>
                        <div className="ProductsCarousel-carousel-item-info-subtitle">Đối tượng sử dụng:</div>
                        <div className="ProductsCarousel-carousel-item-info-description">
                          Gymmber, người luyện tập thể dục, thể thao mong muốn bổ sung và tăng cường Protein cho cơ thể
                        </div>
                        <div className="ProductsCarousel-carousel-item-info-price">765.000 VNĐ</div>
                        <div className="ProductsCarousel-carousel-item-info-btn flex justify-center">
                          <div className="ProductsCarousel-carousel-item-info-cta">Mua ngay</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousels>
            </div>
            <div className="ProductsCarousel-main-item">
              <ProductBox image={ImageProduct} title="Absolute Bio Astaxanthin" price="535.500" hasBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;
