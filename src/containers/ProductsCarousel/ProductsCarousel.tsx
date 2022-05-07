import React from 'react';
import { navigate } from '@reach/router';

import HeaderSkew from '@/components/HeaderSkew';
import ProductBox from '@/components/ProductBox';
import Carousels from '@/components/Carousels';
import { Paths } from '@/pages/routers';
import { formatMoneyVND } from '@/utils/functions';

import { TProductsCarouselProps } from './ProductsCarousel.types';
import './ProductsCarousel.scss';

const ProductsCarousel: React.FC<TProductsCarouselProps> = ({ data = [], title }) => {
  const splitData = [...data].splice(0, 5);

  const isShowCarousel = splitData.length >= 3;
  const firstBlock = splitData?.[0];
  const lastBlock = splitData?.[splitData.length - 1];
  const middleBlock = splitData?.filter((_, index) => index !== 0 && index !== splitData.length - 1);

  return (
    <div className="ProductsCarousel">
      <div className="container">
        {isShowCarousel && (
          <div className="ProductsCarousel-wrapper">
            {title && <HeaderSkew title={title} center />}

            <div className="ProductsCarousel-main flex flex-wrap">
              <div className="ProductsCarousel-main-item">
                <ProductBox
                  hasBg
                  {...firstBlock}
                  type={firstBlock.type}
                  image={firstBlock.image}
                  title={firstBlock.name}
                  sale={Number(firstBlock.sale)}
                  price={Number(firstBlock.price)}
                  link={Paths.Product(firstBlock.id)}
                />
              </div>
              <div className="ProductsCarousel-main-item">
                <Carousels autoplay={false} dots={false}>
                  {middleBlock.map((item) => (
                    <div key={item.id}>
                      <div className="ProductsCarousel-carousel-item flex flex-wrap">
                        <div className="ProductsCarousel-carousel-item-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="ProductsCarousel-carousel-item-info">
                          <div className="ProductsCarousel-carousel-item-info-title">{item.name}</div>
                          <div className="ProductsCarousel-carousel-item-info-subtitle">Đối tượng sử dụng:</div>
                          <div
                            className="ProductsCarousel-carousel-item-info-description"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: item.productObject?.map((obj) => obj.details)?.join(' ') || '',
                            }}
                          />
                          <div className="ProductsCarousel-carousel-item-info-price">
                            {formatMoneyVND({ amount: item.price })} VNĐ
                          </div>
                          <div className="ProductsCarousel-carousel-item-info-btn flex justify-center">
                            <div
                              className="ProductsCarousel-carousel-item-info-cta"
                              onClick={(): void => {
                                navigate(Paths.Product(item.id));
                              }}
                            >
                              Mua ngay
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousels>
              </div>
              <div className="ProductsCarousel-main-item">
                <ProductBox
                  hasBg
                  {...lastBlock}
                  type={lastBlock.type}
                  image={lastBlock.image}
                  title={lastBlock.name}
                  sale={Number(lastBlock.sale)}
                  price={Number(lastBlock.price)}
                  link={Paths.Product(lastBlock.id)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsCarousel;
