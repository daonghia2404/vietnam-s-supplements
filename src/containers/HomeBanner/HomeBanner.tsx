import React from 'react';

import Carousels from '@/components/Carousels';
import ImageBanner1 from '@/assets/images/image-banner-1.jpg';
import ImageBanner2 from '@/assets/images/image-banner-2.jpg';
import { handleErrorImageUrl } from '@/utils/functions';

import './HomeBanner.scss';

const HomeBanner: React.FC = () => {
  const dataCarousel = [
    { key: '1', image: ImageBanner1 },
    { key: '2', image: ImageBanner2 },
  ];
  return (
    <div className="HomeBanner">
      <Carousels autoplay dots={false} arrows={false}>
        {dataCarousel.map((item) => (
          <div key={item.key} className="HomeBanner-item">
            <img src={item.image} onError={handleErrorImageUrl} alt="" />
          </div>
        ))}
      </Carousels>
    </div>
  );
};

export default HomeBanner;
