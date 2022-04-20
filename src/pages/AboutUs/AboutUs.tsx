import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import HeaderSkew from '@/components/HeaderSkew';

import './AboutUs.scss';

const AboutUs: React.FC = () => {
  return (
    <div className="AboutUs style-content">
      <div className="AboutUs-wrapper">
        <HeaderSkew title="Về chúng tôi" />
        <p>
          Giới thiệu về Supplements Việt Nam: Tiên phong trong lĩnh vực thực phẩm bảo vệ sức khoẻ , Vietnam’s
          Supplements mang tới những nghiên cứu chuyên sâu về chế độ dinh dưỡng, bổ sung dưỡng chất, từ đó sản xuất nên
          những sản phẩm phù hợp nhất với cơ thể người Việt
        </p>
        <p>
          Nguồn gốc sản phẩm : Các sản phẩm của Supplements Việt Nam được tổng hợp và viết công thức bởi QuangBangs (
          Nguyễn Duy Quang ) , một tiến sĩ người Đức gốc Việt vào tháng 1 năm 2018. Khi viết nên công thức này anh hoàn
          toàn không hề nắm rõ thị trường chung của thế giới cũng như tại Việt Nam tại thời điểm đó. Mục đích tại thời
          điểm của anh là tạo nên các sản phẩm để tối ưu dinh dưỡng cho các khách hàng Private của mình vì số lượng lớn
          tập trung tại Việt Nam. Tất cả khách hàng của anh đều hoang mang vì hàng hoá nhập khẩu không rõ nguồn gốc xuất
          xứ cũng như thị trường hàng hoá thực phẩm chức năng trong nước chưa có một định vị thị trường rõ ràng cho dinh
          dưỡng người tập thể thao .Vì một số lý do chưa hiểu hết kinh doanh và nguồn vốn tài chính ban đầu có hạn, anh
          cùng với founder VietNam’s Supplement mất đến 2 năm sau để có thể cho ra mắt thị trường 5 sản phẩm hiện có của
          Supplements Việt Nam.
        </p>

        <a
          href="https://www.facebook.com/sharer?u=https://vnsupplements.vn/ve-chung-toi/&t=Về Chúng Tôi"
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

export default AboutUs;
