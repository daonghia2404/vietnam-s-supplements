import React, { useEffect } from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { renderUrlShareSocial, scrollToTop } from '@/utils/functions';
import HeaderSkew from '@/components/HeaderSkew';

import './PolicyInformation.scss';

const PolicyInformation: React.FC = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="PolicyInformation">
      <div className="PolicyInformation-wrapper style-content">
        <HeaderSkew title="Chính sách bảo vệ thông tin" />
        <h3>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</h3>
        <p>
          Cảm ơn bạn đã truy cập vào trang website được vận hành bởi Công ty TNHH Vietnam’s Supplements. Chúng tôi tôn
          trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn. Xin vui lòng đọc bản Chính sách bảo vệ
          thông tin cá nhân của người tiêu dùng dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng
          và bảo vệ quyền lợi của người truy cập.
        </p>
        <p>
          Bảo vệ thông tin cá nhân của người tiêu dùng và gây dựng được niềm tin cho bạn là vấn đề rất quan trọng với
          chúng tôi. Vì vậy, chúng tôi sẽ dùng tên và các thông tin khác liên quan đến bạn tuân thủ theo nội dung của
          chính sách này. Chúng tôi chỉ thu thập những thông tin cần thiết liên quan đến giao dịch mua bán.
        </p>
        <h4>CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h4>
        <p>
          Người Tiêu Dùng hoặc Khách hàng sẽ được yêu cầu điền đầy đủ các thông tin theo các trường thông tin theo mẫu
          có sẵn trên Website vnsupplements.vn như: Họ và Tên, địa chỉ (nhà riêng hoặc văn phòng), địa chỉ email (công
          ty hoặc cá nhân), số điện thoại (di động, nhà riêng hoặc văn phòng), các chi tiết thẻ tín dụng (là loại và số
          thẻ tín dụng, mã CVC, ngày tháng hết hạn, tên chủ thẻ) và trong mức độ có thể, các tuỳ chọn… Thông tin này
          được yêu cầu để đặt và hoàn tất việc đặt hàng online của Khách hàng (bao gồm gửi email xác nhận đặt hàng đến
          Khách hàng).
        </p>
        <p>
          Về cookie và đèn báo hiệu web: Cookie là những thư mục dữ liệu được lưu trữ tạm thời hoặc lâu dài trong ổ cứng
          máy tính của Khách hàng. Các cookie được sử dụng để xác minh, truy tìm lượt (bảo vệ trạng thái) và duy trì
          thông tin cụ thể về việc sử dụng và người sử dụng Website pnj.com.vn, như các tuỳ chọn cho trang web hoặc
          thông tin về giỏ hàng điện tử của họ. Những thư mục cookie cũng có thể được các công ty cung cấp dịch vụ quảng
          cáo đã ký kết Hợp đồng với Công ty TNHH Vietnam’s Supplements đặt trong máy tính của Khách hàng với mục đích
          nêu trên và dữ liệu được thu thập bởi những cookie này là hoàn toàn vô danh. Nếu không đồng ý, Khách hàng có
          thể xoá tất cả các cookie đã nằm trong ổ cứng máy tính của mình bằng cách tìm kiếm các thư mục với “cookie”
          trong tên của nó và xoá đi. Trong tương lai, Khách hàng có thể chỉnh sửa các lựa chọn trong trình duyệt của
          mình để các cookie (tương lai) bị chặn; Xin được lưu ý rằng: Nếu làm vậy, Khách hàng có thể không sử dụng được
          đầy đủ các tính năng của Website vnsupplements.vn. Để biết thêm thông tin về (cách sử dụng và không nhận)
          cookie, Khách hàng vui lòng truy cập vào website <a href="www.allaboutcookies.org">www.allaboutcookies.org</a>
          .
        </p>
        <p>
          Đèn báo hiệu web: Là các sợi mã phần mềm nhỏ tượng trưng cho yêu cầu về hình ảnh đồ thị trên 1 trang web hay
          email. Nó có thể có hoặc không có hình ảnh đồ thị nhìn thấy được liên quan đến đèn báo hiệu web, và thông
          thường hình ảnh được thiết kế để trộn lẫn vào nền của trang web hoặc email. Đèn báo hiệu web có thể được sử
          dụng vào các mục đích như: báo cáo lưu lượng truy cập trang web, số khách truy cập, kiểm tra và báo cáo quảng
          cáo, và tính cá nhân hoá. Đèn báo hiệu web mà Vietnam’s Supplements sử dụng chỉ để thu thập dữ liệu vô danh.
        </p>
        <h4>1. MỤC ĐÍCH THU THẬP THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h4>
        <p>
          Cung cấp dịch vụ cho Khách hàng và quản lý, sử dụng thông tin cá nhân của Người Tiêu Dùng nhằm mục đích quản
          lý cơ sở dữ liệu về Người Tiêu Dùng và kịp thời xử lý các tình huống phát sinh (nếu có).
        </p>
        <h4>2. PHẠM VI SỬ DỤNG THÔNG TIN CÁ NHÂN</h4>
        <p>Website vnsupplements.vn sử dụng thông tin của Người Tiêu Dùng cung cấp để:</p>
        <ul>
          <li>Cung cấp các dịch vụ đến Người Tiêu Dùng;</li>
          <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa Người Tiêu Dùng và Vietnam’s Supplements;</li>
          <li>
            Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản người dùng của Người Tiêu Dùng hoặc các hoạt động giả
            mạo Người Tiêu Dùng;
          </li>
          <li>Liên lạc và giải quyết khiếu nại với Người Tiêu Dùng;</li>
          <li>Xác nhận và trao đổi thông tin về giao dịch của Người Tiêu Dùng tại Vietnam’s Supplements;</li>
          <li>Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm quyền.</li>
        </ul>
        <h4>3. THỜI GIAN LƯU TRỮ THÔNG TIN CÁ NHÂN</h4>
        <p>
          Không có thời hạn ngoại trừ trường hợp Người Tiêu Dùng gửi có yêu cầu hủy bỏ tới cho Ban quản trị hoặc Công ty
          giải thể hoặc bị phá sản.
        </p>
        <h4>4. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN VỚI THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h4>
        <p>
          Người Tiêu Dùng đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp
          cận và thu thập các thông tin cá nhân của mình, bao gồm:
        </p>
        <ul>
          <li>Ban quản trị.</li>
          <li>Bên thứ ba có dịch vụ tích hợp với Website vnsupplements.vn</li>
          <li>Công ty tổ chức sự kiện và nhà tài trợ</li>
          <li>Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy định tại quy chế hoạt động</li>
          <li>Công ty nghiên cứu thị trường</li>
          <li>Cố vấn tài chính, pháp lý và Công ty kiểm toán</li>
          <li>Bên khiếu nại chứng minh được hành vi vi phạm của Người Tiêu Dùng</li>
          <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền</li>
        </ul>
        <h4>5. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN</h4>
        <p>Công ty TNHH Vietnam’s Supplements.</p>
        <ul>
          <li>Địa chỉ: 186 Tôn Đức Thắng, Đống Đa, Hà Nội</li>
          <li>Điện thoại: 0971972332</li>
          <li>Email: vnsupplements@gmail.com</li>
        </ul>
        <h4>6. PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ NGƯỜI TIÊU DÙNG TIẾP CẬN VÀ CHỈNH SỬA DỮ LIỆU THÔNG TIN CÁ NHÂN CỦA MÌNH</h4>
        <p>
          Người Tiêu Dùng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách
          đăng nhập vào Website vnsupplements.vn và chỉnh sửa thông tin cá nhân hoặc yêu cầu Ban quản trị thực hiện việc
          này.
        </p>
        <p>
          Người Tiêu Dùng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của mình cho bên thứ 3 đến Ban quản trị.
          Khi tiếp nhận những phản hồi này, Vietnam’s Supplements sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời
          lý do và hướng dẫn Người Tiêu Dùng khôi phục và bảo mật lại thông tin.
        </p>
        <p>Các hình thức tiếp nhận thông tin khiếu nại của Người Tiêu Dùng:</p>
        <ul>
          <li>Điện thoại: 0971972332</li>
          <li>Email: vnsupplements@gmail.com</li>
        </ul>
        <h4>7. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN CỦA NGƯỜI TIÊU DÙNG</h4>
        <p>
          Thông tin cá nhân của Người Tiêu Dùng trên Website vnsupplements.vn được Ban quản trị cam kết bảo mật tuyệt
          đối theo chính sách bảo mật thông tin cá nhân được đăng tải trên Website vnsupplements.vn. Việc thu thập và sử
          dụng thông tin của mỗi Người Tiêu Dùng chỉ được thực hiện khi có sự đồng ý của Người Tiêu Dùng trừ những
          trường hợp pháp luật có quy định khác và quy định này.
        </p>
        <p>
          Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về thông tin cá nhân của Người Tiêu Dùng
          khi không có sự đồng ý của Người Tiêu Dùng ngoại trừ các trường hợp được quy định tại quy định này hoặc quy
          định của pháp luật.
        </p>
        <p>
          Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân của Người Tiêu
          Dùng, Ban quản trị có trách nhiệm thông báo và làm việc với cơ quan chức năng điều tra và xử lý kịp thời, đồng
          thời thông báo cho Người Tiêu Dùng được biết về vụ việc.
        </p>
        <p>
          Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Người Tiêu Dùng bao gồm thông tin hóa đơn kế toán
          chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của Vietnam’s Supplements.
        </p>
        <h4>8. CƠ CHẾ TIẾP NHẬN VÀ GIẢI QUYẾT KHIẾU NẠI LIÊN QUAN ĐẾN VIỆC THÔNG TIN CỦA NGƯỜI TIÊU DÙNG</h4>
        <p>
          Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi, Người Tiêu Dùng gửi email khiếu
          nại đến email vnsupplements@gmail.com hoặc gọi điện thoại tới số 0971972332 để khiếu nại và cung cấp chứng cứ
          liên quan tới vụ việc cho Ban quản trị. Ban quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong
          vòng 24 (hai mươi tư) giờ làm việc kể từ thời điểm nhận được khiếu nại.
        </p>

        <a
          href={renderUrlShareSocial(Paths.PolicyInformation, 'Chính sách bảo hành sản phẩm')}
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

export default PolicyInformation;
