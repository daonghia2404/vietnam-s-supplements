import React from 'react';

import Carousels from '@/components/Carousels';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { TNewsCarouselProps } from './NewsCarousel.types';
import './NewsCarousel.scss';
import { renderUrlShareSocial } from '@/utils/functions';

const NewsCarousel: React.FC<TNewsCarouselProps> = ({ data = [] }) => {
  return (
    <div className="NewsCarousel">
      <Carousels autoplay dots={false}>
        {data.map((item) => (
          <div key={item.id}>
            <div className="NewsCarousel-item flex flex-wrap items-center">
              <div className="NewsCarousel-item-image">
                <img src={item.image} alt="" />
              </div>
              <div className="NewsCarousel-item-info">
                <div className="NewsCarousel-item-info-title">{item.title}</div>
                <div
                  className="NewsCarousel-item-info-description"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: item.description || '' }}
                />
                <a
                  href={renderUrlShareSocial(item.shareUrl, item.title)}
                  className="NewsCarousel-item-info-share flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name={EIconName.Share} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
                  Chia sẻ
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default NewsCarousel;
