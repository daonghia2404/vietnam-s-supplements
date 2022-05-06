import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import ImageCertificate1 from '@/assets/images/image-certificate-1.png';
import ImageCart from '@/assets/images/image-cart.png';
import ImageCau from '@/assets/images/image-cau.png';
import HeaderSkew from '@/components/HeaderSkew';
import ImageProduct2 from '@/assets/images/image-product-2.jpeg';
import { TRootState } from '@/redux/reducers';
import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import PageLoading from '@/components/PageLoading';
import {
  addCartAction,
  getCartAction,
  getProductAction,
  getProductsAction,
  isFavoriteProductAction,
  likeProductAction,
  uiActions,
  unlikeProductAction,
} from '@/redux/actions';
import ProductBox from '@/components/ProductBox';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Carousels, { TCarouselsProps } from '@/components/Carousels';
import { EDeviceType } from '@/redux/reducers/ui';
import { caculatorSalePrice, formatMoneyVND, showNotification } from '@/utils/functions';
import { DEFAULT_PAGE } from '@/common/constants';
import { Paths } from '@/pages/routers';
import EmptyBox from '@/components/EmptyBox';
import DistributionProductModal from '@/pages/Product/DistributionProductModal';
import { TProductResponse } from '@/services/api/product-controller/types';
import { ETypeNotification } from '@/common/enums';
import AuthHelpers from '@/services/helpers';
import { handleAddNewCartLocalStorage, parseCartData } from '@/utils/cart';
import AddCartModal from '@/containers/AddCartModal';

import './Product.scss';

const Product: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();
  const window = useSelector((state: TRootState) => state.uiReducer.device.type);
  const isMobile = window === EDeviceType.MOBILE;

  const [distributionProductModalState, setDistributionProductModalState] = useState<{
    visible: boolean;
    data?: TProductResponse;
  }>({
    visible: false,
  });

  const cartsStorage = useSelector((state: TRootState) => state.uiReducer.cartsStorage) || [];

  const [addCartModalState, setAddCartModalState] = useState<{
    visible: boolean;
    data?: { id: string; type: string };
  }>({
    visible: false,
  });

  const productState = useSelector((state: TRootState) => state.productReducer.product);
  const getProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.GET_PRODUCT],
  );
  const productsState = useSelector((state: TRootState) => state.productReducer.products);

  const likeProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.LIKE_PRODUCT],
  );
  const unlikeProductLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EProductControllerAction.UNLIKE_PRODUCT],
  );
  const isFavoriteProductState = useSelector((state: TRootState) => state.productReducer.isFavoriteProduct?.message);

  const favoriteLoading = likeProductLoading || unlikeProductLoading;

  const isEmpty = productsState?.records.length === 0;

  const handleOpenDistributionProductModal = (): void => {
    setDistributionProductModalState({ visible: true, data: productState });
  };
  const handleCloseDistributionProductModal = (): void => {
    setDistributionProductModalState({ visible: false });
  };

  const handleClickFavoriteProduct = (): void => {
    if (!favoriteLoading) {
      if (isFavoriteProductState) {
        dispatch(unlikeProductAction.request(id, handleFavoriteProductSuccess));
      } else {
        dispatch(likeProductAction.request(id, handleFavoriteProductSuccess));
      }
    }
  };

  const handleFavoriteProductSuccess = (): void => {
    if (isFavoriteProductState) {
      showNotification(ETypeNotification.SUCCESS, 'Đã bỏ sản phẩm khỏi danh sách yêu thích');
      dispatch(isFavoriteProductAction.success({ message: false }));
    } else {
      showNotification(ETypeNotification.SUCCESS, 'Đã thêm sản phẩm vào danh sách yêu thích');
      dispatch(isFavoriteProductAction.success({ message: true }));
    }
  };

  const carouselProps = (): TCarouselsProps => {
    const commonProps = {
      arrows: true,
      dots: false,
      autoplay: true,
      slidesPerRow: 1,
    };

    if (isMobile) {
      return { ...commonProps, slidesToShow: 1 };
    }

    return { ...commonProps, slidesToShow: 3 };
  };

  const getProductData = useCallback(() => {
    if (id) dispatch(getProductAction.request(id));
  }, [dispatch, id]);

  const getProductsByCategory = useCallback(() => {
    if (productState?.category?.id)
      dispatch(
        getProductsAction.request({
          page: DEFAULT_PAGE,
          pageSize: 4,
          categoryId: productState?.category?.id,
        }),
      );
  }, [dispatch, productState?.category?.id]);

  const getIsFavoriteProductData = useCallback(() => {
    if (id && atk) dispatch(isFavoriteProductAction.request(id));
  }, [atk, id, dispatch]);

  const handleOpenAddCartModal = (): void => {
    setAddCartModalState({
      visible: true,
      data: {
        id,
        type: productState?.type || '',
      },
    });
  };
  const handleCloseAddCartModal = (): void => {
    setAddCartModalState({
      visible: false,
    });
  };
  const handleSubmitAddCartModal = (values: any): void => {
    const body = {
      ...values,
      product: id,
    };

    if (atk) {
      dispatch(addCartAction.request(body, handleAddCartSuccess));
    } else {
      const newCartsData = handleAddNewCartLocalStorage(
        cartsStorage,
        parseCartData({
          ...values,
          product: {
            id,
            ...productState,
          },
        }),
      );
      dispatch(uiActions.setCartsStorage(newCartsData));
      handleCloseAddCartModal();
    }
  };

  const handleAddCartSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    getCartData();
    handleCloseAddCartModal();
  };

  const getCartData = (): void => {
    dispatch(getCartAction.request());
  };

  useEffect(() => {
    getIsFavoriteProductData();
  }, [getIsFavoriteProductData]);

  useEffect(() => {
    getProductsByCategory();
  }, [getProductsByCategory]);

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
            <div
              className={classNames('Product-banner-favorite', { disabled: favoriteLoading })}
              onClick={handleClickFavoriteProduct}
            >
              <Icon name={EIconName.Heart} color={isFavoriteProductState ? EIconColor.RED : EIconColor.BLACK} />
            </div>
            <div className="Product-banner-item flex justify-center">
              <div className="Product-banner-image">
                <img src={productState?.image} alt="" />
              </div>
            </div>
            <div className="Product-banner-item flex flex-col justify-center items-center">
              <div className="Product-banner-title">{productState?.name}</div>
              {productState?.sale && (
                <del className="Product-banner-old-price">
                  {formatMoneyVND({ amount: caculatorSalePrice(productState.price, Number(productState.sale)) })} VND
                </del>
              )}
              <div className="Product-banner-price">{formatMoneyVND({ amount: productState?.price || 0 })} VND</div>

              <div className="Product-banner-button" onClick={handleOpenAddCartModal}>
                Mua ngay
              </div>
              <div className="Product-banner-link" onClick={handleOpenDistributionProductModal}>
                Đăng ký phân phối
              </div>
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
              <Carousels {...carouselProps()}>
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
            {isEmpty ? (
              <EmptyBox title="Không có dữ liệu sản phẩm" />
            ) : (
              <div className="Product-list flex flex-wrap">
                {productsState?.records?.map((item) => (
                  <div key={item.id} className="Product-list-item">
                    <ProductBox
                      {...item}
                      type={item.type}
                      image={item.image}
                      title={item.name}
                      sale={Number(item.sale)}
                      price={Number(item.price)}
                      link={Paths.Product(item.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <DistributionProductModal {...distributionProductModalState} onClose={handleCloseDistributionProductModal} />

      <AddCartModal {...addCartModalState} onClose={handleCloseAddCartModal} onSubmit={handleSubmitAddCartModal} />
    </div>
  );
};

export default Product;
