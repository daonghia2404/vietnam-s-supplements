import React from 'react';
import { useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import ImageReview1 from '@/assets/images/image-review-1.png';
import ImageReview2 from '@/assets/images/image-review-2.png';
import ImageReview3 from '@/assets/images/image-review-3.png';
import ImageReview4 from '@/assets/images/image-review-4.png';
import ImageReview5 from '@/assets/images/image-review-5.jpeg';
import Carousels from '@/components/Carousels';
import { TRootState } from '@/redux/reducers';

import './ReviewsCarousel.scss';

const ReviewsCarousel: React.FC = () => {
  const window = useSelector((state: TRootState) => state.uiReducer.device.width);

  const isMobile = window <= 768;

  const dataReviews = [
    {
      name: 'Châu Bùi',
      description: 'Influencer',
      content: 'Supplements Việt Nam luôn là người bạn đồng hành đáng tin cậy trong suốt quá trình luyện tập của tôi.',
      image: ImageReview1,
    },
    {
      name: 'Nguyễn H. Nam',
      description: 'Á Vương Mister Việt Nam 2019',
      content: 'Một sản phẩm không thể thiếu nếu bạn thật sự quan tâm tới sức khỏe của mình.',
      image: ImageReview2,
    },
    {
      name: 'Trà My',
      description: 'Influencer',
      content: 'Tôi chọn sử dụng VNSupplements mỗi ngày để bổ sung và cân bằng các vitamin cần thiết cho cơ thể.',
      image: ImageReview3,
    },
    {
      name: 'Lê Thành Công',
      description: 'Hot Gymer',
      content: 'Sản phẩm chất lượng cao, được kiểm định từ Bộ Y Tế nên tôi rất yên tâm khi sử dụng.',
      image: ImageReview4,
    },
    {
      name: 'Shin Phạm',
      description: 'Hot Gymer',
      content:
        'Sử dụng sản phẩm bổ sung của Vietnam’s Supplements mỗi ngày luôn là yếu tố quan trọng trong cuộc sống luyện tập của tôi.',
      image: ImageReview5,
    },
  ];

  return (
    <div className="ReviewsCarousel">
      <div className="container">
        <div className="ReviewsCarousel-wrapper">
          <HeaderSkew title="Chuyên gia cùng" center />

          <div className="ReviewsCarousel-main">
            <Carousels autoplay dots={isMobile} slidesToShow={isMobile ? 1 : 2}>
              {dataReviews.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="ReviewsCarousel-carousel flex justify-between flex-wrap">
                  <div className="ReviewsCarousel-carousel-item">
                    <div className="ReviewsCarousel-carousel-item-image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="ReviewsCarousel-carousel-item-info">
                      <div className="ReviewsCarousel-carousel-item-info-header">
                        <div className="ReviewsCarousel-carousel-item-info-header-name">{item.name}</div>
                        <div className="ReviewsCarousel-carousel-item-info-header-description">{item.description}</div>
                      </div>
                      <div className="ReviewsCarousel-carousel-item-info-quote">{item.content}</div>
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
