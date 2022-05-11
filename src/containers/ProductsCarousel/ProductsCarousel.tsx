import React from 'react';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ProductBox from '@/components/ProductBox';
import Carousels from '@/components/Carousels';
import { Paths } from '@/pages/routers';
import { formatMoneyVND, handleErrorImageUrl } from '@/utils/functions';
import { TRootState } from '@/redux/reducers';
import { EDeviceType } from '@/redux/reducers/ui';

import { TProductsCarouselProps } from './ProductsCarousel.types';
import './ProductsCarousel.scss';

const ProductsCarousel: React.FC<TProductsCarouselProps> = ({ data = [], title }) => {
  const window = useSelector((state: TRootState) => state.uiReducer.device.type);

  const isMobile = window === EDeviceType.MOBILE;
  const splitData = [...data].splice(0, 5);

  const isShowCarousel = splitData.length >= 3;
  const firstBlock = splitData?.[0];
  const lastBlock = splitData?.[splitData.length - 1];
  const middleBlock = splitData?.filter((_, index) => index !== 0 && index !== splitData.length - 1);

  const handleNavigateProductDetail = (id: string): void => {
    navigate(Paths.Product(id));
  };

  return isShowCarousel ? (
    <div className="ProductsCarousel">
      <div className="container">
        <div className="ProductsCarousel-wrapper">
          {title && <HeaderSkew title={title} center />}

          {isMobile ? (
            <div className="ProductsCarousel-carousel-mobile">
              <Carousels autoplay={false} slidesToShow={2}>
                {data.map((item) => (
                  <div className="ProductsCarousel-carousel-mobile-item">
                    <ProductBox
                      {...item}
                      hasBg
                      title={item.name}
                      sale={Number(item.sale)}
                      price={Number(item.price)}
                      link={Paths.Product(item.id)}
                    />
                  </div>
                ))}
              </Carousels>
            </div>
          ) : (
            <div className="ProductsCarousel-main flex flex-wrap">
              <div className="ProductsCarousel-main-item">
                <ProductBox
                  hasBg
                  {...firstBlock}
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
                        <div
                          className="ProductsCarousel-carousel-item-image"
                          onClick={(): void => handleNavigateProductDetail(item.id)}
                        >
                          <img src={item.image} onError={handleErrorImageUrl} alt="" />
                        </div>
                        <div className="ProductsCarousel-carousel-item-info">
                          <div
                            className="ProductsCarousel-carousel-item-info-title"
                            onClick={(): void => handleNavigateProductDetail(item.id)}
                          >
                            {item.name}
                          </div>
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
                  hasBg
                  {...lastBlock}
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
