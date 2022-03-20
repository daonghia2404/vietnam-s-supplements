/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import ImageTradeMark1 from '@/assets/images/image-trademark-1.png';
import ImageTradeMark2 from '@/assets/images/image-trademark-2.png';
import ImageTradeMark3 from '@/assets/images/image-trademark-3.png';

import './TradeMark.scss';

const TradeMark: React.FC = () => {
  return (
    <div className="TradeMark">
      <div className="container">
        <div className="TradeMark-wrapper flex flex-wrap justify-between">
          <div className="TradeMark-wrapper-item">
            <div className="TradeMark-wrapper-item-title">
              Thương hiệu <span>Vietnam's Supplements</span>
            </div>
            <div className="TradeMark-wrapper-item-description">
              Tiên phong trong lĩnh vực thực phẩm bảo vệ sức khoẻ...
            </div>
            <div className="TradeMark-wrapper-item-btn flex justify-center">
              <div className="TradeMark-wrapper-item-cta">Xem thêm</div>
            </div>
          </div>

          <div className="TradeMark-wrapper-item">
            <div className="TradeMark-wrapper-item-icon">
              <img src={ImageTradeMark1} alt="" />
            </div>
            <div className="TradeMark-wrapper-item-subtitle">
              <span>Công thức độc quyền của </span> Tiến sĩ người Việt tại Đức
            </div>
          </div>

          <div className="TradeMark-wrapper-item">
            <div className="TradeMark-wrapper-item-icon">
              <img src={ImageTradeMark2} alt="" />
            </div>
            <div className="TradeMark-wrapper-item-subtitle">Tiên phong trong lĩnh vực thực phẩm bảo vệ sức khoẻ</div>
          </div>

          <div className="TradeMark-wrapper-item">
            <div className="TradeMark-wrapper-item-icon">
              <img src={ImageTradeMark3} alt="" />
            </div>
            <div className="TradeMark-wrapper-item-subtitle">
              Nghiên cứu chuyên sâu cho chế độ dinh dưỡng của người Việt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeMark;
