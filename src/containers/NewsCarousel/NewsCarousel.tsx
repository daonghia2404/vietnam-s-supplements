import React from 'react';

import Carousels from '@/components/Carousels';
import ImageNew from '@/assets/images/image-banner-1.jpg';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './NewsCarousel.scss';

const NewsCarousel: React.FC = () => {
  return (
    <div className="NewsCarousel">
      <Carousels autoplay dots={false}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item}>
            <div className="NewsCarousel-item flex flex-wrap items-center">
              <div className="NewsCarousel-item-image">
                <img src={ImageNew} alt="" />
              </div>
              <div className="NewsCarousel-item-info">
                <div className="NewsCarousel-item-info-title">Dinh dưỡng cần thiết cho nguời chơi bộ môn tennis…</div>
                <div className="NewsCarousel-item-info-description">
                  Phòng tránh chấn thương khi chơi tennis.Tennis là một môn thể thao ngày càng phổ biến ở Việt Nam. Chơi
                  tennis có tác dụng rất tốt đến hệ tim mạch, hệ hô hấp, tăng cường sức khỏe, rèn luyện độ nhanh, bền,
                  khéo léo. Việc luyện tập tennis đều đặn, đúng kỹ thuật giúp cho…{' '}
                </div>
                <div className="NewsCarousel-item-info-share flex items-center">
                  <Icon name={EIconName.Share} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
                  Chia sẻ
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default NewsCarousel;
