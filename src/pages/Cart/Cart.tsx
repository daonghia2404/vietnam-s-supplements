import React from 'react';

import HeaderSkew from '@/components/HeaderSkew';
import Button from '@/components/Button';

import './Cart.scss';

const Cart: React.FC = () => {
  return (
    <div className="Cart style-container">
      <HeaderSkew title="Lịch sử đơn hàng" />

      <div className="Cart-main">
        <div className="Cart-main-header flex justify-between flex-wrap">
          {['Tất cả', 'Chờ xác nhận', 'Đang giao', 'Hoàn thành', 'Đã huỷ'].map((item) => (
            <Button size="small" title={item} key={item} shadow={false} />
          ))}
        </div>

        <div className="Cart-main-body">
          <div className="Cart-card">
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">Mã đơn hàng</div>
              <div className="Cart-card-text">ABC 123456</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text success">Hoàn thành</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">1 sản phẩm</div>
              <div className="Cart-card-text hightlight">900.000 đ</div>
            </div>

            <div className="Cart-card-footer">
              <div className="Cart-card-row flex justify-between">
                <div className="Cart-card-text">Tích điểm</div>
                <div className="Cart-card-text">+ 100 điểm</div>
              </div>
            </div>
          </div>
          <div className="Cart-card">
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">Mã đơn hàng</div>
              <div className="Cart-card-text">ABC 123456</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text warning">Chờ xác nhận</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">1 sản phẩm</div>
              <div className="Cart-card-text hightlight">900.000 đ</div>
            </div>
          </div>
          <div className="Cart-card">
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">Mã đơn hàng</div>
              <div className="Cart-card-text">ABC 123456</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text disabled">Đã huỷ</div>
            </div>
            <div className="Cart-card-row flex justify-between">
              <div className="Cart-card-text bold">1 sản phẩm</div>
              <div className="Cart-card-text hightlight">900.000 đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
