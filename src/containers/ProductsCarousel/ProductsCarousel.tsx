import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct from '@/assets/images/image-product.png';
import ImageProductKOL from '@/assets/images/image-product-kol.jpg';
import ProductBox from '@/components/ProductBox';
import Carousels from '@/components/Carousels';

import { TProductsCarouselProps } from './ProductsCarousel.types';
import './ProductsCarousel.scss';

const ProductsCarousel: React.FC<TProductsCarouselProps> = ({ title }) => {
  return (
    <div className="ProductsCarousel">
      <div className="container">
        <div className="ProductsCarousel-wrapper">
          {title && <HeaderSkew title={title} center />}

          <div className="ProductsCarousel-main flex flex-wrap">
            <div className="ProductsCarousel-main-item">
              <ProductBox id="1" image={ImageProduct} title="Absolute Bio Astaxanthin" price={535000} type="1" hasBg />
            </div>
            <div className="ProductsCarousel-main-item">
              <Carousels autoplay dots={false}>
                {[1, 2].map((item) => (
                  <div key={item}>
                    <div className="ProductsCarousel-carousel-item flex flex-wrap">
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
              <ProductBox type="1" id="1" image={ImageProduct} title="Absolute Bio Astaxanthin" price={545000} hasBg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;
