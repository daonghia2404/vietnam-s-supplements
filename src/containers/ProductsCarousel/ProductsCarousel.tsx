import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ProductBox from '@/components/ProductBox';
import Carousels from '@/components/Carousels';
import { Paths } from '@/pages/routers';
import { formatMoneyVND, handleErrorImageUrl } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';
import { TProductResponse } from '@/services/api/product-controller/types';

import { TProductsCarouselProps } from './ProductsCarousel.types';
import './ProductsCarousel.scss';

const ProductsCarousel: React.FC<TProductsCarouselProps> = ({ data = [], title }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const window = useSelector((state: TRootState) => state.uiReducer.device.type);

  const isMobile = window === EDeviceType.MOBILE;
  const splitData = [...data].splice(0, 5);

  const isShowCarousel = splitData.length >= 3;
  const firstBlock = splitData?.[0];
  const lastBlock = splitData?.[splitData.length - 1];
  const middleBlock = splitData?.filter((_, index) => index !== 0 && index !== splitData.length - 1);

  const productObjectDescription = (item: TProductResponse): string => {
    return (
      item.productObject
        ?.map((obj) => obj.details)
        ?.join(' ')
        ?.trim() || ''
    );
  };

  const handleNavigateProductDetail = (id: string): void => {
    if (!isDragging) navigate(Paths.Product(id));
  };

  return isShowCarousel ? (
    <div className="ProductsCarousel">
      <div className="container">
        <div className="ProductsCarousel-wrapper">
          {title && <HeaderSkew title={title} center />}

          {isMobile ? (
            <div className="ProductsCarousel-carousel-mobile">
              <Carousels autoplay={false} slidesToShow={2} onDragging={setIsDragging}>
                {data.map((item) => (
                  <div className="ProductsCarousel-carousel-mobile-item">
                    <ProductBox
                      {...item}
                      hasBg
                      title={item.name}
                      sale={Number(item.sale)}
                      price={Number(item.price)}
                      link={!isDragging ? Paths.Product(item.id) : ''}
                    />
                  </div>
                ))}
              </Carousels>
            </div>
          ) : (
            <div className="ProductsCarousel-main flex flex-wrap">
              <div className="ProductsCarousel-main-item">
                <ProductBox
                  {...firstBlock}
                  hasBg
                  title={firstBlock.name}
                  sale={Number(firstBlock.sale)}
                  price={Number(firstBlock.price)}
                  link={Paths.Product(firstBlock.id)}
                />
              </div>
              <div className="ProductsCarousel-main-item">
                <Carousels autoplay={false} dots={false} onDragging={setIsDragging}>
                  {middleBlock.map((item) => (
                    <div key={item.id}>
                      <div className="ProductsCarousel-carousel-item flex flex-wrap">
                        <div
                          className="ProductsCarousel-carousel-item-image"
                          onClick={(): void => handleNavigateProductDetail(item.id)}
                        >
                          <img src={item.imageMkt || item.image} onError={handleErrorImageUrl} alt="" />
                        </div>
                        <div className="ProductsCarousel-carousel-item-info">
                          <div
                            className="ProductsCarousel-carousel-item-info-title"
                            onClick={(): void => handleNavigateProductDetail(item.id)}
                          >
                            {item.name}
                          </div>
                          <div className="ProductsCarousel-carousel-item-info-subtitle">
                            {productObjectDescription(item) ? 'Đối tượng sử dụng:' : ''}
                          </div>
                          <div
                            className="ProductsCarousel-carousel-item-info-description style-content"
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{
                              __html: productObjectDescription(item),
                            }}
                          />

                          <div className="ProductsCarousel-carousel-item-info-price">
                            {formatMoneyVND({ amount: item.price })} VNĐ
                          </div>
                          <div className="ProductsCarousel-carousel-item-info-btn flex justify-center">
                            <div
                              className="ProductsCarousel-carousel-item-info-cta"
                              onClick={(): void => handleNavigateProductDetail(item.id)}
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
                  {...lastBlock}
                  hasBg
                  title={lastBlock.name}
                  sale={Number(lastBlock.sale)}
                  price={Number(lastBlock.price)}
                  link={Paths.Product(lastBlock.id)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductsCarousel;
