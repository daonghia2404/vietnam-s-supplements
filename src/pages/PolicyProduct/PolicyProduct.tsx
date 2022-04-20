import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { renderUrlShareSocial } from '@/utils/functions';

import './PolicyProduct.scss';

const PolicyProduct: React.FC = () => {
  return (
    <div className="PolicyProduct">
      <div className="PolicyProduct-wrapper style-content">
        <h3>Chính sách bảo hành sản phẩm</h3>
        <h4>
          Chính sách bảo hành sản phẩm khi mua hàng cam kết các sản phẩm đều được bảo hành chính hãng theo đúng thời
          gian mà nhà sản xuất đưa ra
        </h4>
        <h4>Chính sách bảo hành, đổi trả hàng :</h4>
        <h4>Trường hợp được bảo hành:</h4>
        <ul>
          <li>
            Các sản phẩm có thời gian bảo hành từ 03-05 ngày hoặc theo thông tin trên nhãn cúa sản phẩm và tùy theo từng
            dòng sản phẩm
          </li>
          <li>Sản phẩm trong thời hạn bảo hành</li>
          <li>Sản phẩm được báo hành theo quy định của nhà sản xuất</li>
          <li>Quý khách xuất trình hóa đơn mua hàng khi đổi hàng</li>
          <li>Sản phẩm rách lỗi từ nhà sản xuất</li>
        </ul>
        <h4>Trường hợp được bảo hành:</h4>
        <ul>
          <li>Quá thời hạn bảo hành ghi trên Tem và phiếu bảo hành</li>
          <li>Sản phẩm không còn tem bảo hành, số serial</li>
          <li>Sản phẩm bị sửa đổi hoặc không xác định được nguồn gốc</li>
          <li>Các sản hẩm đã bóc seal, biến dạng do rơi vỡ , va đập, hư hỏng gây ra</li>
          <li>Sản phẩm bị ẩm mốc</li>
        </ul>
        <h4>Lưu ý:</h4>
        <p>Khách hàng chịu trách nhiệm cho chi phí vận chuyển đến các cửa hàng bảo hàng</p>
        <p>Hết thời hạn bảo hành, chi phí sửa chữa sẽ được cửa hàng bảo hành hỗ trợ với giá ưu đãi nhất</p>
        <h4>Chính sách đổi mới sản phẩm:</h4>
        <h4>
          Khách đảm bảo quyền lợi người tiêu dùng, nâng cao chất lượng dịch vụ sau bán hàng. Chúng tôi đổi sản phẩm mới
          cùng loại nếu sản phẩm gặp sự cố không thể khắc phục được ngay ( do lỗi kỹ thuật của nhà sản xuất). Sản phẩm
          chỉ được đổi khi đáp ứng đầy đủ các điều kiện sau:
        </h4>
        <ul>
          <li>
            Sản phẩm mới mua hàng trong vòng 3 ngày kể từ ngày xuất bản, khách hàng mua trực tuyến, thời gian được tính
            từ ngày khách nhận được sản phẩm.
          </li>
          <li>Sản phẩm không bị cũ, sước , biến dạng và thõa mãn các điều kiện bảo hành.</li>
          <li>Sản phẩm nhận lại phải còn nguyên vẹn seal kèm theo các phụ kiện quà khuyến mãi đi kèm ( nếu có)</li>
        </ul>
        <h4>Trường hợp không chấp nhận đổi trả sản phẩm:</h4>
        <ul>
          <li>Quý khách muốn thay đổi chủng loại, mẫu mã sản phẩm</li>
          <li>Lỗi do người sử dụng </li>
          <li>
            Không chấp nhận các lỗi ngoại quan ( sước , móp ,méo , nứt , rách ,…) khi khách hàng đã mang sản phẩm ra
            khỏi cửa hàng.
          </li>
        </ul>

        <h4>
          Chú ý: khách hàng xem kỹ sản phẩm trước khi mua, sản phẩm đã bán ra không nhập lại. Không có trường hợp ngoại
          lệ, để đảm bảo cho mọi khách hàng luôn mua được sản phẩm mới.
        </h4>

        <a
          href={renderUrlShareSocial(Paths.PolicyProduct, 'Chính sách bảo hành sản phẩm')}
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

export default PolicyProduct;
