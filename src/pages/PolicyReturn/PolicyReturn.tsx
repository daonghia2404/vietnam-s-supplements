import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { renderUrlShareSocial } from '@/utils/functions';
import HeaderSkew from '@/components/HeaderSkew';

import './PolicyReturn.scss';

const PolicyReturn: React.FC = () => {
  return (
    <div className="PolicyReturn">
      <div className="PolicyReturn-wrapper style-content">
        <HeaderSkew title="Chính sách hoàn trả" />
        <h4>Đổi trả hàng</h4>
        <ul>
          <li>
            Trong trường hợp bạn muốn đổi hoặc trả sản phẩm, chúng tôi hỗ trợ khách hàng đổi trả sản phẩm trong vòng 7
            ngày kể từ ngày nhận được hàng theo phiếu giao hàng.
          </li>
          <li>
            Bạn có thể đổi lại sản phẩm hoặc đổi sang sản phẩm (hoặc nhiều sản phẩm) khác có giá trị bằng hoặc cao hơn
            giá trị của sản phẩm đổi. Nếu tổng giá trị cao hơn, bạn vui lòng thanh toán thêm tiền.{' '}
          </li>
        </ul>
        <h4>Điều kiện đổi hàng</h4>
        <h4>Chính sách đổi trả hàng chỉ áp dụng trong các trường hợp sau:</h4>
        <ul>
          <li>Sản phẩm còn đầy đủ hóa đơn mua hàng, tem nhãn mác, phụ kiện đi kèm…</li>
          <li>Sản phẩm bị dính bẩn, trầy xước, có mùi lạ khi nhận hàng.</li>
          <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất.</li>
          <li>Sản phẩm bị vỡ hỏng trong quá trình vận chuyển đến khách hàng.</li>
          <li>
            Sản phẩm bị chuyển nhầm hàng, nhầm màu, thiếu hàng, sai lệch so với thông tin đơn hàng đã được xác nhận.
          </li>
          <li>
            Trong trường hợp lỗi do nhà sản xuất hoặc chuyển sai sản phẩm, chúng tôi thanh toán 100% chi phí đổi trả
            hàng.
          </li>
        </ul>
        <h4>Các bước đổi trả</h4>
        <p>Để tiến hành đổi trả sản phẩm, bạn vui lòng thực hiện các bước sau: </p>
        <ul>
          <li>
            Gọi điện trực tiếp đến hotline/nhắn tin qua để kiểm tra điều kiện sản phẩm và điều kiện đổi trả hàng nhằm
            đảm bảo sản phẩm đáp ứng các điều kiện như đã quy định.{' '}
          </li>
          <li>
            Đồng thời cung cấp cho Bộ phận Chăm sóc Khách hàng về thông tin đơn hàng, mã sản phẩm, tên sản phẩm, màu,
            dung tích/size, số lượng sản phẩm đã mua.{' '}
          </li>
          <li>
            Sau khi cung cấp các thông tin như trên, bạn có thể gửi hàng qua bưu điện hoặc mang trực tiếp tới showroom
            hoặc các đại lý phân phối của chúng tôi. Kèm theo chứng từ khi nhận hàng (hóa đơn hoặc phiếu giao hàng, nếu
            có).
          </li>
        </ul>

        <p>
          Bạn vui lòng đóng gói sản phẩm theo đúng quy trình và xác nhận với bên vận chuyển về tình trạng của hàng hóa:
          còn nguyên tem nhãn mác, nguyên vỏ hộp, không bị vỡ hỏng… Nếu sản phẩm đổi trả thỏa mãn các điều kiện đổi hàng
          như trong quy định, trong khoảng thời gian 5 ngày, chúng tôi sẽ tiến hành gửi lại sản phẩm tương ứng.{' '}
        </p>
        <p>
          Trong trường hợp sản phẩm không đạt điều kiện đổi trả hàng theo quy định, bạn sẽ phải chịu chi phí để chúng
          tôi gửi trả lại sản phẩm.
        </p>

        <a
          href={renderUrlShareSocial(Paths.PolicyReturn, 'Chính sách bảo hành sản phẩm')}
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

export default PolicyReturn;
