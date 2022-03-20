import React from 'react';

import ImageRotationItem from '@/assets/images/image-rotation-item.png';

import './RankExchangePoints.scss';

const RankExchangePoints: React.FC = () => {
  return (
    <div className="RankExchangePoints">
      {[1, 2, 3].map((item) => (
        <div key={item} className="RankExchangePoints-item flex">
          <div className="RankExchangePoints-item-image">
            <img src={ImageRotationItem} alt="" />
          </div>
          <div className="RankExchangePoints-item-info">
            <div className="RankExchangePoints-item-info-title">Đổi 1 lượt quay</div>
            <div className="RankExchangePoints-item-info-points">1000 điểm</div>
            <div className="RankExchangePoints-item-info-btn flex">
              <div className="RankExchangePoints-item-info-cta">Đổi ngay</div>
            </div>
          </div>
          <div className="RankExchangePoints-item-turn">1 lượt quay</div>
        </div>
      ))}
    </div>
  );
};

export default RankExchangePoints;
