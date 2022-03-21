import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import ImageCertificate1 from '@/assets/images/image-certificate-1.png';
import Carousels from '@/components/Carousels';

import './QualityStandards.scss';

const QualityStandards: React.FC = () => {
  return (
    <div className="QualityStandards">
      <div className="container">
        <div className="QualityStandards-wrapper">
          <HeaderSkew title="Tiêu chuẩn chất lượng" center />

          <div className="QualityStandards-main">
            <Carousels
              autoplay
              dots={false}
              slidesToShow={4}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                  },
                },
              ]}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item}>
                  <div className="QualityStandards-carousel-item flex justify-center items-center">
                    <div className="QualityStandards-carousel-item-image">
                      <img src={ImageCertificate1} alt="" />
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

export default QualityStandards;
