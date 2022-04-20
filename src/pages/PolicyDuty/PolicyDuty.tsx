import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { Paths } from '@/pages/routers';
import { renderUrlShareSocial } from '@/utils/functions';

import './PolicyDuty.scss';

const PolicyDuty: React.FC = () => {
  return (
    <div className="PolicyDuty">
      <div className="PolicyDuty-wrapper style-content">
        <h3>Nghĩa vụ của người bán và nghĩa vụ của khách hàng trong mỗi giao dịch</h3>
        <h4>Nghĩa vụ của bên bán:</h4>
        <h4>Nghĩa vụ bảo đảm quyền sở hữu đối với hàng hoá</h4>
        <p>
          Đây là nghĩa vụ đầu tiên và cơ bản nhất của bên bán.Bên bán có nghĩa vụ bảo đảm: 1) Quyền sở hữu của bên mua
          đối với hàng hóa đã bán không bị tranh chấp bởi bên thứ ba; 2) Hàng hóa đó phải hợp pháp; 3) Việc chuyển giao
          hàng hoá là hợp pháp.
        </p>
        <p>
          Bên bán có nghĩa vụ đảm bảo hàng hóa là đối tượng của hợp đồng không phải hàng hóa vi phạm quyền sở hữu trí
          tuệ vàphải chịu trách nhiệm trong trường hợp có tranh chấp liên quan đến quyền sở hữu trí tuệ đối với hàng hóa
          đã bán trừ trường hợp hàng hóa được sản xuất, chế tạo, chế biến theo công thức, bản vẽ, thông số kỹ thuật chi
          tiết do bên mua cung cấp, trường hợp này bên mua phải chịu trách nhiệm nếu có khiếu nại khiếu kiện liên quan
          đến hàng hóa.
        </p>
        <h4>Nghĩa vụ giao hàng đúng đối tượng của hợp đồng và chứng từ liên quan</h4>
        <p>
          Bên bán có trách nhiệm giao hàng đúng theo thỏa thuận trong hợp đồng: bao gồm giao hàng đúng đối tượng hàng
          hóa, đúng số lượng, chất lượng, chủng loại, thông số kỹ thuật… đã được hai bên thỏa thuận.
        </p>
        <p>
          Bên cạnh việc giao hàng, bên bán còn phải giao chứng từ liên quan đến hàng hóa. Đó có thể là vận đơn, các
          thông tin về hàng hóa, quy cách đóng gói bảo quản, hướng dẫn sử dụng… Đây là nghĩa vụ bắt buộc trong cả trường
          hợp hai bên không có thỏa thuận.
        </p>
        <p>“Điều 34. Giao hàng và chứng từ liên quan đến hàng hóa</p>
        <p>
          1- Bên bán phải giao hàng, chứng từ theo thỏa thuận trong hợp đồng về số lượng, chất lượng, cách thức đóng
          gói, bảo quản và các quy định khác trong hợp đồng.
        </p>
        <p>
          2- Trường hợp không có thỏa thuận cụ thể, bên bán có nghĩa vụ giao hàng và chứng từ liên quan theo quy định
          của Luật này”.
        </p>
        <p>
          Đối với trường hợp giao hàng không đúng đối tượng được thỏa thuận, bên mua có quyền từ chối nhận hàng và yêu
          cầu bồi thường nếu có thiệt hại thực tế xảy ra.
        </p>

        <h4>Nghĩa vụ giao hàng đúng thời gian và địa điểm đã thỏa thuận</h4>
        <p>Bên bán có nghĩa vụ tôn trọng những thỏa thuận của hai bên về thời điểm cũng như địa điểm giao hàng.</p>
        <p>Trường hợp không có thoả thuận về địa điểm giao hàng thì địa điểm giao hàng được xác định như sau:</p>
        <p>(i) Trường hợp hàng hoá là vật gắn liền với đất đai thì bên bán phải giao hàng tại nơi có hàng hoá đó;</p>
        <p>
          Trường hợp trong hợp đồng có quy định về vận chuyển hàng hoá thì bên bán có nghĩa vụ giao hàng cho người vận
          chuyển đầu tiên;
        </p>
        <p>
          (ii) Trường hợp trong hợp đồng không có quy định về vận chuyển hàng hoá, nếu vào thời điểm giao kết hợp đồng,
          các bên biết được địa điểm kho chứa hàng, địa điểm xếp hàng hoặc nơi sản xuất, chế tạo hàng hoá thì bên bán
          phải giao hàng tại địa điểm đó;
        </p>
        <p>
          (iii) Trong các trường hợp khác, bên bán phải giao hàng tại địa điểm kinh doanh của bên bán, nếu không có địa
          điểm kinh doanh thì phải giao hàng tại nơi cư trú của bên bán được xác định tại thời điểm giao kết hợp đồng
          mua bán;
        </p>
        <p>
          (iv) Trường hợp các bên không thỏa thuận về thời điểm chính xác để giao hàng, mà chỉ thỏa thuận về thời hạn
          giao hàng, bên bán có nghĩa vụ tuân thủ thỏa thuận này, tiến hành giao hàng vào thời gian bất kỳ trong thời
          hạn giao hàng đã được ấn định, đồng thời phải thông báo trước cho bên mua.
        </p>
        <p>
          Trường hợp không có thỏa thuận về thời hạn giao hàng thì bên bán phải giao hàng trong một thời hạn hợp lý sau
          khi giao kết hợp đồng.
        </p>
        <p>
          Thời hạn hợp lý này phụ thuộc vào một số yếu tố như: đối tượng của hợp đồng (hàng hóa có phải là vật cần có
          điều kiện bảo quản, dễ hư hỏng hay không?), nhu cầu cấp bách của bên mua và một số yếu tố khách quan khác.
        </p>
        <p>
          Một điểm cần lưu ý nữa là việc giao hàng trước thời hạn đã thỏa thuận, tức là sớm hơn, trường hợp này bên mua
          có quyền từ chối nhận nếu các bên không có thỏa thuận khác. Việc giao hàng sớm có thể làm bên mua phát sinh
          thêm chi phí lưu kho bãi, bảo quản, bảo vệ hàng hóa, đặc biệt với những mặt hàng nông sản, vì vậy các bên có
          thể quy định cụ thể về điều khoản này để tránh các trường hợp khó khăn trong việc xác định thời điểm chuyển
          rủi ro.
        </p>

        <h4>Nghĩa vụ chuyển giao quyền sở hữu hàng hóa</h4>

        <p>
          Bản chất của việc mua bán hàng hóa là sự chuyển giao quyền sở hữu tài sản từ bên bán cho bên mua. Thời điểm
          chuyển quyền sở hữu hàng hóa được xác định như sau: trừ trường hợp pháp luật có quy định khác hoặc các bên có
          thỏa thuận khác, quyền sở hữu được chuyển từ bên bán sang bên mua kể từ thời điểm hàng hóa được chuyển giao.
        </p>
        <p>Trách nhiệm đối với hàng hóa không phù hợp với hợp đồng</p>
        <p>Hàng hóa không phù hợp với hợp đồng là hàng hóa thuộc các trường hợp sau:</p>
        <p>(i) Không phù hợp với mục đích sử dụng thông thường của các hàng hoá cùng chủng loại;</p>
        <p>
          (ii) Không phù hợp với bất kỳ mục đích cụ thể nào mà bên mua đã cho bên bán biết hoặc bên bán phải biết vào
          thời điểm giao kết hợp đồng;
        </p>
        <p>(iii) Không bảo đảm chất lượng như chất lượng của mẫu hàng hoá mà bên bán đã giao cho bên mua;</p>
        <p>
          (iv) Không được bảo quản, đóng gói theo cách thức thông thường đối với loại hàng hoá đó hoặc không theo cách
          thức thích hợp để bảo quản hàng hoá trong trường hợp không có cách thức bảo quản thông thường.
        </p>
        <p>
          Trường hợp hai bên không có thỏa thuận hoặc thỏa thuận sơ sài và không đầy đủ, sẽ rất rủi ro cho bên mua nếu
          trường hợp hàng hóa không phù hợp với yêu cầu sử dụng. Tình trạng này rất thường xảy ra đối với doanh nghiệp
          nhỏ và vừa tại Việt Nam trong giao kết hợp đồng thương mại.
        </p>
        <p>
          Quy định về trách nhiệm đối với hàng hóa không phù hợp với hợp đồng được cụ thể trong Điều 39 của Luật Thương
          mại năm 2005 như sau:
        </p>
        <p>
          Trừ trường hợp các bên có thoả thuận khác, trách nhiệm đối với hàng hóa không phù hợp với hợp đồng được quy
          định như sau:
        </p>
        <p>
          Trong thời hạn khiếu nại 03 tháng đối với khiếm khuyết về số lượng hàng hóa và 06 tháng đối với khiếm khuyết
          về chất lượng hàng hóa kể từ thời điểm bên mua nhận hàng, trừ trường hợp bên mua đã biết hoặc phải biết về
          những khiếm khuyết của hàng hóa, thì bên bán phải chịu trách nhiệm về bất kỳ khiếm khuyết nào của hàng hoá đã
          có trước thời điểm chuyển rủi ro cho bên mua, kể cả trường hợp khiếm khuyết đó được phát hiện sau thời điểm
          chuyển rủi ro hoặc phát sinh sau thời điểm chuyển rủi ro do bên bán vi phạm hợp đồng.
        </p>
        <p>
          Trong Luật bảo vệ quyền lợi người tiêu dùng năm 2010, bên bán còn phải đảm bảo nghĩa vụ thu hồi hàng hóa có
          khuyết tật, hoặc thậm chí phải bồi thường thiệt hại nếu có thiệt hại thực tế xảy ra do hàng hóa bị khuyết tật
          gây nên cho bên mua.
        </p>

        <h4>Nghĩa vụ bảo hành hàng hóa</h4>
        <p>
          Đây là một trong những nghĩa vụ cơ bản của người bán, được quy định trong Bộ Luật dân sự năm 2015 và Luật
          Thương mại 2005, Luật bảo vệ quyền lợi người tiêu dùng và một số văn bản khác.
        </p>
        <p>
          Hàng hóa có bảo hành thường là hàng hóa không tiêu hao hoặc ít tiêu hao. Hàng hóa dễ tiêu hao thì thời hạn bảo
          hành thường ngắn hoặc thậm chí không được bảo hành.
        </p>
        <p>
          Luật Thương mại năm 2005 mang tính chất là luật điều chỉnh quan hệ giữa các thương nhân, vì vậy quy định về
          bảo hành chung chung và mở rộng tối đa quyền tự do thỏa thuận của các bên. Điều 49 Luật Thương mại năm 2005
          quy định về nghĩa vụ bảo hành hàng hóa như sau:
        </p>
        <p>
          “1- Trường hợp hàng hoá mua bán có bảo hành thì bên bán phải chịu trách nhiệm bảo hành hàng hoá đó theo nội
          dung và thời hạn đã thỏa thuận.
        </p>
        <p>2- Bên bán phải thực hiện nghĩa vụ bảo hành trong thời gian ngắn nhất mà hoàn cảnh thực tế cho phép.</p>
        <p>3- Bên bán phải chịu các chi phí về việc bảo hành, trừ trường hợp có thoả thuận khác” .</p>
        <p>
          Trong trường hợp các bên không thỏa thuận, hoặc sau khi phát sinh khiếm khuyết của hàng hóa mà không có thỏa
          thuận khác, thì có thể dẫn chiếu các quy định trong Bộ Luật dân sự năm 2015 (từ Điều 446 đến Điều 449) để điều
          chỉnh.
        </p>
        <p>
          Đối với hợp đồng mua bán hàng hóa mà một bên là thương nhân, một bên là cá nhân/tổ chức tham gia hợp đồng với
          mục đích mua bán hàng hóa để tiêu dùng thì có thể áp dụng các quy định trong Luật bảo vệ quyền lợi người tiêu
          dùng năm 2010 để yêu cầu bên bán thực hiện đúng và đầy đủ nghĩa vụ bảo hành hàng hóa trong trường hợp hàng hóa
          có khiếm khuyết trong thời hạn được bảo hành.
        </p>

        <h4>Nghĩa vụ thông báo</h4>
        <p>
          Trong Bộ luật dân sự năm 2015 và cả Luật Thương mại năm 2005 ngoài quy định về nghĩa vụ thông báo của bên bán
          trong trường hợp có khiếu nại về sự vi phạm quyền sở hữu trí tuệ đối với hàng hóa được sản xuất theo yêu cầu,
          công thức bên mua cung cấp, bên bán còn có nghĩa vụ thông báo với bên mua về sự kiện bất khả kháng xảy ra
          trong quá trình thực hiện hợp đồng.
        </p>
        <p>
          Thông thường, các bên thường bổ sung nội dung thông báo trong điều khoản bất khả kháng sự tác động của sự kiện
          bất khả kháng đến việc thực hiện hợp đồng, đồng thời hành vi khắc phục của các bên để ngăn ngừa thiệt hại cho
          cả hai bên.
        </p>

        <h4>Nghĩa vụ của bên mua</h4>
        <h4>Nghĩa vụ thanh toán</h4>
        <p>Bên mua có nghĩa vụ thanh toán tiền mua hàng và nhận hàng theo thỏa thuận.</p>
        <p>
          Bên mua phải tuân thủ các phương thức thanh toán, thực hiện việc thanh toán theo trình tự, thủ tục đã thỏa
          thuận và theo quy định của pháp luật.
        </p>
        <p>
          Bên mua vẫn phải thanh toán tiền mua hàng trong trường hợp hàng hoá mất mát, hư hỏng sau thời điểm rủi ro được
          chuyển từ bên bán sang bên mua, trừ trường hợp mất mát, hư hỏng do lỗi của bên bán gây ra.
        </p>
        <p>Luật Thương mại năm 2005 cũng quy định một số trường hợp bên mua có thể tạm ngừng thanh toán như sau:</p>
        <p>“1- Bên mua có bằng chứng về việc bên bán lừa dối thì có quyền tạm ngừng việc thanh toán;</p>
        <p>
          2- Bên mua có bằng chứng về việc hàng hóa đang là đối tượng bị tranh chấp thì có quyền tạm ngừng thanh toán
          cho đến khi việc tranh chấp đã được giải quyết;
        </p>
        <p>
          3- Bên mua có bằng chứng về việc bên bán đã giao hàng không phù hợp với hợp đồng thì có quyền tạm ngừng thanh
          toán cho đến khi bên bán đã khắc phục sự không phù hợp đó”.
        </p>
        <p>
          Trong trường hợp bên mua đưa ra bằng chứng không xác thực về việc hàng hóa đang là đối tượng bị tranh chấp
          hoặc bên bán giao hàng không phù hợp với hợp đồng mà gây thiệt hại cho bên bán thì sẽ phải bồi thường thiệt
          hại và các chế tài khác theo quy định của Luật Thương mại hoặc do các bên thỏa thuận.
        </p>
        <p>
          Trong trường hợp các bên không có thỏa thuận về thời gian và địa điểm thanh toán, có thể căn cứ theo quy định
          tại Điều 54 và Điều 55 Luật Thương mại năm 2005 để xác định thời gian và địa điểm thanh toán phù hợp.
        </p>

        <h4>Nghĩa vụ nhận hàng</h4>
        <p>
          Tương ứng với nghĩa vụ giao hàng của bên bán thì bên mua cũng có nghĩa vụ nhận hàng và thiện chí thực hiện các
          biện pháp để bên bán giao hàng đúng thời gian và địa điểm đã thỏa thuận hoặc theo quy định của pháp luật.
        </p>
        <h4>Nghĩa vụ thông báo</h4>
        <p>
          Nếu không có thỏa thuận khác, bên mua có nghĩa vụ thông báo cho bên bán về việc khiếu nại, khiếu kiện của bên
          thứ ba liên quan đến vi phạm quyền sở hữu trí tuệ, hoặc sự kiện bất khả kháng ảnh hưởng đến quá trình thực
          hiện hợp đồng của hai bên.
        </p>
        <h4>Nghĩa vụ đảm bảo quyền sở hữu trí tuệ của hàng hóa</h4>
        <p>
          Bên mua có nghĩa vụ đảm bảo hàng hóa là đối tượng của hợp đồng không phải hàng hóa vi phạm quyền sở hữu trí
          tuệ trong trường hợp bên mua đặt hàng và yêu cầu bên bán sản xuất hàng hóa theo bản vẽ thiết kế, công thức cụ
          thể, chi tiết.
        </p>
        <p>
          Quyền của bên này sẽ tương ứng với nghĩa vụ của bên kia. Hai bên trong giao kết hợp đồng cần thiện chí, trung
          thực, tôn trọng các thỏa thuận đã ký kết, tích cực hỗ trợ nhau trong quá trình thực hiện hợp đồng để đảm bảo
          đạt được mục đích giao kết.
        </p>
        <p>
          Ngoài những nghĩa vụ cơ bản đã được tổng hợp ở trên theo quy định pháp luật dân sự, luật thương mại hiện hành,
          các bên còn có nghĩa vụ khác như: bồi thường thiệt hại cho đối phương nếu thiệt hại do hành vi vi phạm hợp
          đồng của một bên gây ra; nghĩa vụ thanh toán tiền phạt vi phạm trong trường hợp hai bên có thỏa thuận khác,
          hoặc nghĩa vụ thông báo về quá trình thực hiện hợp đồng nếu có thỏa thuận.
        </p>
        <p>
          Tựu chung lại, nghĩa vụ quan trọng và hàng đầu của các bên vẫn là tuân thủ nghiêm túc những nội dung đã thỏa
          thuận trong hợp đồng, phù hợp quy định pháp luật và đạo đức xã hội.
        </p>

        <a
          href={renderUrlShareSocial(Paths.PolicyDuty, 'Nghĩa vụ của người mua và người bán')}
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

export default PolicyDuty;
