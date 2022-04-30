/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import LogoLight from '@/assets/images/logo-light.png';
import ImageGov from '@/assets/images/image-bo-cong-thuong.png';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper flex flex-wrap justify-between">
          <div className="Footer-wrapper-item">
            <div className="Footer-logo">
              <img src={LogoLight} alt="" />
            </div>
            <div className="Footer-title">Công Ty TNHH Vietnam's Supplements</div>
            <div className="Footer-text">
              <Icon name={EIconName.MapMarker} color={EIconColor.BOULDER} />
              186 Tôn Đức Thắng, Phường Quốc Tử Giám, Quận Đống Đa, Hà Nội
            </div>
            <div className="Footer-text">
              <Icon name={EIconName.Phone} color={EIconColor.BOULDER} />
              0971972332
            </div>
            <div className="Footer-text">
              <Icon name={EIconName.Mail} color={EIconColor.BOULDER} />
              vnsupplement@gmail.com
            </div>
            <div className="Footer-text">Số Dkkd 0107653467</div>
            <div className="Footer-text">Ngày cấp 02/12/2016</div>
            <div className="Footer-text">Nơ̛i cấp Sở kế hoạch và đầu tư Thành Phố Hà Nội</div>
            <div className="Footer-text">©2020. All rights reserved.</div>
          </div>

          <div className="Footer-wrapper-item">
            <div className="Footer-title italic">Chính sách</div>
            <br />
            <div className="Footer-list">
              <div className="Footer-text">Chính sách hoàn trả</div>
              <div className="Footer-text">Chính sách bảo hành sản phẩm</div>
              <div className="Footer-text">Các phương thức giao hàng</div>
              <div className="Footer-text">Chính sách bảo vệ thông tin các nhân của người tiêu dùng</div>
              <div className="Footer-text">Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch</div>
            </div>
          </div>
          <div className="Footer-wrapper-item">
            <div className="Footer-title italic">Về chúng tôi</div>
            <br />
            <div className="Footer-socials flex flex-wrap">
              <a
                href="https://www.facebook.com/supplementsvietnam?gidzl=gBSK4YzMb1QbhHOMBqcM4AYf41CvIC8HjgH17pr1a1YwfX8NCq6G4xkZ6nKoHPWIwF5E736_rRCs9bkG5m"
                target="_blank"
                className="Footer-socials-item"
                rel="noreferrer"
              >
                <Icon name={EIconName.Facebook} color={EIconColor.WHITE} />
              </a>
              <a
                href="https://www.instagram.com/vnsupplements/"
                target="_blank"
                className="Footer-socials-item"
                rel="noreferrer"
              >
                <Icon name={EIconName.Instagram} color={EIconColor.WHITE} />
              </a>
              <a
                href="https://www.tiktok.com/@vnsupplements"
                target="_blank"
                className="Footer-socials-item"
                rel="noreferrer"
              >
                <Icon name={EIconName.Tiktok} color={EIconColor.WHITE} />
              </a>
            </div>
            <br />
            <div className="Footer-gov">
              <img src={ImageGov} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
