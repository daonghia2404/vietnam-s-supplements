import React, { useCallback, useEffect } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import ImageCertificate1 from '@/assets/images/image-certificate-1.png';
import ImageCart from '@/assets/images/image-cart.png';
import ImageCau from '@/assets/images/image-cau.png';
import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct from '@/assets/images/image-product.png';
import ImageProduct2 from '@/assets/images/image-product-2.jpeg';
import { TRootState } from '@/redux/reducers';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import { getProductAction } from '@/redux/actions';

import './Product.scss';
import Button from '@/components/Button';
import ProductBox from '@/components/ProductBox';
import Icon, { EIconName } from '@/components/Icon';
import Carousels from '@/components/Carousels';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state: TRootState) => state.productReducer.product);
  const getProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCT],
  );

  const getProductData = useCallback(() => {
    if (id) dispatch(getProductAction.request(id));
  }, [dispatch, id]);

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  return (
    <div className="Product">
      {getProductLoading ? (
        <PageLoading />
      ) : (
        <div className="Product-wrapper">
          <div className="Product-banner flex flex-wrap">
            <div className="Product-banner-item flex justify-center">
              <div className="Product-banner-image">
                <img src={ImageProduct} alt="" />
              </div>
            </div>
            <div className="Product-banner-item flex flex-col justify-center items-center">
              <div className="Product-banner-title">Absolute Chill</div>
              <del className="Product-banner-old-price">480.00 VND</del>
              <div className="Product-banner-price">470.400 VND</div>
              <div className="Product-banner-button">Mua ngay</div>
              <div className="Product-banner-link">Đăng ký phân phối</div>
            </div>
          </div>

          <div className="Product-info">
            <div className="Product-basic-info flex flex-wrap justify-between">
              <div className="Product-basic-info-item flex items-center justify-center flex-col">
                <div className="Product-basic-info-item-title">Tiêu chuẩn chất lượng</div>
                <div className="Product-basic-info-item-image">
                  <img src={ImageCertificate1} alt="" />
                </div>
              </div>
              <div className="Product-basic-info-item flex items-center justify-center flex-col">
                <div className="Product-basic-info-item-title">Tiêu chuẩn chất lượng</div>
                <div className="Product-basic-info-item-subtitle">094 544 92 29</div>
                <div className="Product-basic-info-item-description flex items-center justify-center">
                  <Icon name={EIconName.User} />
                  Tư vấn cho tôi
                </div>
              </div>
              <div className="Product-basic-info-item flex items-center justify-center flex-col">
                <div className="Product-basic-info-item-image">
                  <img src={ImageCart} alt="" />
                </div>
                <div className="Product-basic-info-item-description flex items-center justify-center">
                  <Icon name={EIconName.MapMarker} />
                  <strong>Xem bản đồ</strong>
                </div>
                <div className="Product-basic-info-item-description flex items-center justify-center gray">
                  186 Tôn Đức Thắng, Phường Quốc Tử Giám, Quận Đống Đa, Hà Nội
                </div>
              </div>

              <div className="Product-basic-info-item flex items-center justify-center flex-col">
                <div className="Product-basic-info-item-title">Tiêu chuẩn chất lượng</div>
                <div className="Product-basic-info-item-image">
                  <img src={ImageCau} alt="" />
                </div>
                <div className="Product-basic-info-item-description flex items-center justify-center">
                  <Icon name={EIconName.CloudDownload} />
                  <strong>Download File</strong>
                </div>
              </div>
            </div>
            <div className="Product-carousel">
              <Carousels slidesToShow={1} slidesPerRow={3} arrows dots={false} autoplay>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="Product-carousel-item">
                    <img src={ImageProduct2} alt="" />
                  </div>
                ))}
              </Carousels>
            </div>
            <div className="Product-content">
              <div className="Product-content-title">Chi tiết sản phẩm</div>

              <div className="Product-content-card">
                <h3>Thông tin</h3>
                <table>
                  <tr>
                    <td>Thành phần</td>
                    <td />
                  </tr>
                  <tr>
                    <td>L-Leucine</td>
                    <td>106.9mq</td>
                  </tr>
                  <tr>
                    <td>L-Leucine</td>
                    <td>106.9mq</td>
                  </tr>
                  <tr>
                    <td>L-Leucine</td>
                    <td>106.9mq</td>
                  </tr>
                  <tr>
                    <td>L-Leucine</td>
                    <td>106.9mq</td>
                  </tr>
                  <tr>
                    <td>Phụ liệu</td>
                    <td>
                      Phụ liệu: Calci Hydrophosphat khan, Bột Talc, Magnesi Stearat, Nipagin, Nipasol, Vỏ nang vừa đủ 1
                      viên nang.
                    </td>
                  </tr>
                  <tr>
                    <td>Quy cách đóng gói</td>
                    <td>300 viên</td>
                  </tr>
                </table>

                <h3>Công dụng</h3>
                <p>
                  Optimized eAA là thực phẩm bổ sung các axit amin cần thiết cho cơ thể trong tập luyện thể hình, thể
                  dục thể thao, người cần tăng cường sức khoẻ. Axit amin thiết yếu sẽ giúp kích thích sản xuất năng
                  lượng tế bào và thúc đẩy tái tạo tế bào, tạo ra các enzyme quan trọng cần thiết cho tiêu hoá khoẻ
                  mạnh, ngăn ngừa sự dị hoá cơ bắp trong các giai đoạn căng thẳng về chất và tăng cường hệ miễn dịch của
                  cơ thể
                </p>

                <h3>Cách dùng:</h3>
                <p>Người lớn: 5-8 viên/ngày</p>
                <p>Người luyện tập cường độ cao: 10-15 viên/ngày</p>
                <p>Sử dụng vào sáng và tối hoặc trước và sau khi tập luyện</p>

                <h3>Lưu ý</h3>
                <p>Bảo quản: ở nhiệt độ dưới 30°C, tránh ánh nắng.</p>
                <p>
                  Chú ý: Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Không sử dụng
                  cho người mẫn cảm với bất kỳ với thành phần nào của sản phẩm.
                </p>
              </div>
            </div>
            <HeaderSkew title="Sản phẩm liên quan" />
            <div className="Product-list flex flex-wrap">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="Product-list-item">
                  <ProductBox {...item} image={ImageProduct} title="Absolute chill" price="124000" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
