import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ImageReview from '@/assets/images/image-review.png';
import Carousels from '@/components/Carousels';

import './ReviewsCarousel.scss';

const ReviewsCarousel: React.FC = () => {
  return (
    <div className="ReviewsCarousel">
      <div className="container">
        <div className="ReviewsCarousel-wrapper">
          <HeaderSkew title="Chuyên gia cùng" center />

          <div className="ReviewsCarousel-main">
            <Carousels autoplay dots={false}>
              {[1, 2].map((item) => (
                <div key={item}>
                  <div className="ReviewsCarousel-carousel flex justify-between">
                    <div className="ReviewsCarousel-carousel-item">
                      <div className="ReviewsCarousel-carousel-item-image">
                        <img src={ImageReview} alt="" />
                      </div>
                      <div className="ReviewsCarousel-carousel-item-info">
                        <div className="ReviewsCarousel-carousel-item-info-header">
                          <div className="ReviewsCarousel-carousel-item-info-header-name">Châu Bùi</div>
                          <div className="ReviewsCarousel-carousel-item-info-header-description">Influencer</div>
                        </div>
                        <div className="ReviewsCarousel-carousel-item-info-quote">
                          Supplements Việt Nam luôn là người bạn đồng hành đáng tin cậy trong suốt quá trình luyện tập
                          của tôi.
                        </div>
                      </div>
                    </div>
                    <div className="ReviewsCarousel-carousel-item">
                      <div className="ReviewsCarousel-carousel-item-image">
                        <img src={ImageReview} alt="" />
                      </div>
                      <div className="ReviewsCarousel-carousel-item-info">
                        <div className="ReviewsCarousel-carousel-item-info-header">
                          <div className="ReviewsCarousel-carousel-item-info-header-name">Châu Bùi</div>
                          <div className="ReviewsCarousel-carousel-item-info-header-description">Influencer</div>
                        </div>
                        <div className="ReviewsCarousel-carousel-item-info-quote">
                          Supplements Việt Nam luôn là người bạn đồng hành đáng tin cậy trong suốt quá trình luyện tập
                          của tôi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
