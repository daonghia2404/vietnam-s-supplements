import React, { useEffect } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { renderUrlShareSocial, scrollToTop } from '@/utils/functions';
import HeaderSkew from '@/components/HeaderSkew';

import './PolicyShipping.scss';

const PolicyShipping: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="PolicyShipping">
      <div className="PolicyShipping-wrapper style-content">
        <HeaderSkew title="Các phương thức giao hàng" />
        <p>
          Hàng đến tay các bạn sau 2-7 ngày làm việc (thành phố 3-4 ngày ; huyện/ xã tối đa 5-7 ngày), áp dụng nhận giao
          hàng tại các vùng/địa chỉ theo giới hạn của các ĐVVC
        </p>
        <h4>LƯU Ý ĐẶC BIỆT dành cho khách ở xa :</h4>
        <ul>
          <li>
            Được bóc hàng kiểm tra số lượng đầy đủ + nguyên vẹn vỏ trước mặt bưu tá , gọi điện cho shop ngay trong
            trường hợp thiếu hàng hay hàng
          </li>
          <li>Shop sẽ KHÔNG CHỊU TRÁCH NHIỆM nếu bạn không kiểm tra hàng trước mặt bưu tá.</li>
        </ul>
        <p>
          Theo quy định của các đơn vị vận chuyển, khối lượng sử dụng để tính cước là mức khối lượng cao nhất khi so
          sánh giữa cân nặng và khối lượng quy đổi của kiện hàng sau đóng gói.
        </p>
        <p>
          Ví dụ: Sản phẩm bàn phím máy tính có cân nặng sau đóng gói là 0.5kg, nhưng có kích thước đóng gói là CR x CD x
          CC (cm) là 30 x 50 x 10 (cm){' '}
        </p>
        <table>
          <tr>
            <td>Đơn vị vận chuyển</td>
            <td>Khối lượng quy đổi được ĐVVC tính như sau: Chiều rộng x Chiều dài x Chiều cao / 6000</td>
          </tr>
          <tr>
            <td>Giao hàng Tiết Kiệm</td>
            <td>= (30 x 50 x 10) / 6000 = 2.5 kg {`>`} 0.5 kg</td>
          </tr>
          <tr>
            <td>Viettel Post</td>
          </tr>
          <tr>
            <td>Vietnam Post Nhan</td>
          </tr>
          <tr>
            <td>J&T Express</td>
          </tr>
        </table>

        <a
          href={renderUrlShareSocial(Paths.PolicyShipping, 'Phương thức giao hàng')}
          target="_blank"
          className="share-content flex items-center"
          rel="noreferrer"
        >
          <Icon name={EIconName.Share} color={EIconColor.INTERNATIONAL_KLEIN_BLUE} />
          Chia sẻ bài viết qua <span>Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default PolicyShipping;
