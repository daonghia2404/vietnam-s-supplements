import React, { useState } from 'react';
import { navigate } from '@reach/router';

import Carousels from '@/components/Carousels';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { handleErrorImageUrl, renderUrlShareSocial } from '@/utils/functions';
import { ENewsCarouselType } from '@/containers/NewsCarousel/NewsCarousel.enums';
import { Paths } from '@/pages/routers';

import { TNewsCarouselProps } from './NewsCarousel.types';
import './NewsCarousel.scss';

const NewsCarousel: React.FC<TNewsCarouselProps> = ({ data = [], type }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleNavigateDetail = (id: string): void => {
    if (!isDragging) {
      if (type === ENewsCarouselType.HANDBOOKS) navigate(Paths.HandbookDetail(id));
      if (type === ENewsCarouselType.NEWS) navigate(Paths.NewDetail(id));
    }
  };

  return (
    <div className="NewsCarousel">
      <Carousels autoplay dots={false} onDragging={setIsDragging}>
        {data.map((item) => (
          <div key={item.id}>
            <div className="NewsCarousel-item flex flex-wrap items-center">
              <div className="NewsCarousel-item-image" onClick={(): void => handleNavigateDetail(item.id)}>
                <img src={item.image} onError={handleErrorImageUrl} alt="" />
              </div>
              <div className="NewsCarousel-item-info">
                <div className="NewsCarousel-item-info-title" onClick={(): void => handleNavigateDetail(item.id)}>
                  {item.title}
                </div>
                <div
                  className="NewsCarousel-item-info-description style-content"
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
