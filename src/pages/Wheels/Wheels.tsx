import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import WheelBox from '@/components/WheelBox';
import ImageWheel from '@/assets/images/image-wheel.png';

import './Wheels.scss';

const Wheels: React.FC = () => {
  return (
    <div className="Wheels style-container">
      <HeaderSkew title="Vòng Quay" />

      <div className="Wheels-main flex flex-wrap justify-between">
        <div className="Wheels-main-item">
          <WheelBox image={ImageWheel} title="Vòng quay 1" description="Bạn còn 1 lượt quay" />
        </div>
        <div className="Wheels-main-item">
          <WheelBox image={ImageWheel} title="Vòng quay 1" description="Bạn còn 1 lượt quay" />
        </div>
        <div className="Wheels-main-item">
          <WheelBox image={ImageWheel} title="Vòng quay 1" description="Bạn còn 1 lượt quay" />
        </div>
        <div className="Wheels-main-item">
          <WheelBox image={ImageWheel} title="Vòng quay 1" description="Bạn còn 1 lượt quay" />
        </div>
      </div>
    </div>
  );
};

export default Wheels;
