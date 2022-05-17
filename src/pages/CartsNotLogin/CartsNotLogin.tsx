import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import classNames from 'classnames';
import { Form } from 'antd';

import HeaderSkew from '@/components/HeaderSkew';
import Amount from '@/components/Amount';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import { TRootState } from '@/redux/reducers';
import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';
import EmptyBox from '@/components/EmptyBox';
import { Paths } from '@/pages/routers';
import { TCartResponse, TCreateCartResponse } from '@/services/api/cart-controller/types';
import {
  formatISODateToDateTime,
  formatMoneyVND,
  handleErrorImageUrl,
  scrollToTop,
  showNotification,
  validationRules,
} from '@/utils/functions';
import { EFormatDate, ETypeNotification } from '@/common/enums';
import {
  checkoutOrderAction,
  createCartAction,
  createPaymentOrderAction,
  getAddressAction,
  uiActions,
} from '@/redux/actions';
import Radio from '@/components/Radio';
import { dataPaymentMethodOptions } from '@/pages/Carts/Carts.data';
import { handleChangeAmountCartLocalStorage, handleDeleteCartLocalStorage } from '@/utils/cart';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import '@/pages/Checkout/Checkout.scss';
import { TParamsGetAddress } from '@/services/api/address-controller/types';
import { EOrderPayment } from '@/services/api/order-controller/enums';

import './CartsNotLogin.scss';
import { TCreatePaymentResponse } from '@/services/api/payment-controller/types';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';

const Carts: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [cartsChecked, setCartsChecked] = useState<TCartResponse[]>([]);
  const [isCheckoutStep, setIsCheckoutStep] = useState<TCreateCartResponse | undefined>();
  const addressState = useSelector((state: TRootState) => state.addressReducer);

  const [getAddressParamsRequest, setGetAddressParamsRequest] = useState<TParamsGetAddress>({
    districtCode: null,
    cityCode: null,
  });

  const isDisabledCityField = addressState.city.length === 0;
  const isDisabledDistrictField = addressState.district.length === 0;

  const cartsStorage = useSelector((state: TRootState) => state.uiReducer.cartsStorage) || [];
  const carts = cartsStorage;

  const createCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.CREATE_CART]);
  const createPaymentOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EPaymentControllerAction.CREATE_PAYMENT_ORDER],
  );
  const checkoutOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EOrderControllerAction.CHECKOUT_ORDER],
  );
  const loading = createCartLoading || createPaymentOrderLoading || checkoutOrderLoading;
  const isEmpty = carts?.length === 0;

  const handleChangeAddress = (cityCode?: string | null, districtCode?: string | null): void => {
    if (cityCode && !districtCode) form.setFieldsValue({ district: null });

    setGetAddressParamsRequest({
      cityCode: cityCode || null,
      districtCode: districtCode || null,
    });
  };

  const getAddressData = useCallback(() => {
    dispatch(getAddressAction.request(getAddressParamsRequest));
  }, [dispatch, getAddressParamsRequest]);

  const getAddressWithExistedCity = (): void => {
    dispatch(
      getAddressAction.request({
        cityCode: getAddressParamsRequest.cityCode,
        districtCode: null,
      }),
    );
  };

  const getAddressWithExistedCityAndDistrict = (): void => {
    dispatch(
      getAddressAction.request({
        cityCode: getAddressParamsRequest.cityCode,
        districtCode: getAddressParamsRequest.districtCode,
      }),
    );
  };

  const handleChangeAmount = (amount: number, data: TCartResponse): void => {
    const newCartsData = handleChangeAmountCartLocalStorage(cartsStorage, data.id, amount);
    dispatch(uiActions.setCartsStorage(newCartsData));
  };

  const handleRemoveCart = (data: TCartResponse): void => {
    const newCartsData = handleDeleteCartLocalStorage(cartsStorage, data.id);
    dispatch(uiActions.setCartsStorage(newCartsData));
  };

  const handleClickContinueShopping = (): void => {
    navigate(Paths.Home);
  };

  const handleSubmitCart = (values: any): void => {
    if (isCheckoutStep) {
      const typePayment = values.typePayment?.value;

      const body = {
        cartId: isCheckoutStep?.id,
        typePayment,
        address: values?.address,
        addressReceiver: values?.address,
        referCode: values?.referCode || '',
        district: values?.district?.value,
        districtReceiver: values?.district?.label,
        city: values?.city?.value,
        cityReceiver: values?.city?.label,
        phone: values?.phone,
        phoneReceiver: values?.phone,
        nameUser: values?.name,
        nameReceiver: values?.name,
        email: values?.email,
        note: values?.note,
      };

      if (typePayment === EOrderPayment.SHIP_COD) {
        dispatch(checkoutOrderAction.request(body, handleCheckoutOrderSuccess));
      }

      if (typePayment === EOrderPayment.WALLET) {
        dispatch(
          createPaymentOrderAction.request(
            {
              amount: String(isCheckoutStep.totalprice),
              bankCode: undefined,
              extraData: undefined,
              paymentMethod: undefined,
            },
            handleCreatePaymentSuccess,
          ),
        );
      }
    } else {
      const body = {
        cart: {
          cart: carts.map((item) => ({
            product: item.product,
            amount: item.amount,
          })),
        },
      };
      dispatch(createCartAction.request(body, handleCreateOrderSuccess));
    }
  };

  const handleCreateOrderSuccess = (response: TCreateCartResponse): void => {
    setIsCheckoutStep(response);
  };

  const handleCreatePaymentSuccess = (response: TCreatePaymentResponse): void => {
    window.open(response.paymentUrl, 'blank');
  };

  const handleCheckoutOrderSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Tạo đơn hàng thành công');
    navigate(Paths.Home);
  };

  const caculatorTotalPrice = (): number => {
    const total = cartsChecked.reduce((result, item) => {
      const newResult = result + Number(item.product?.costPrice || item.product?.price) * item.amount;

      return newResult;
    }, 0);

    return total;
  };

  useEffect(() => {
    getAddressData();
  }, [getAddressData]);

  useEffect(() => {
    if (getAddressParamsRequest.cityCode) getAddressWithExistedCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAddressParamsRequest.cityCode]);

  useEffect(() => {
    if (getAddressParamsRequest.cityCode && getAddressParamsRequest.districtCode)
      getAddressWithExistedCityAndDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAddressParamsRequest]);

  useEffect(() => {
    setCartsChecked(carts || []);
  }, [carts]);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      typePayment: dataPaymentMethodOptions?.[0],
    });
  }, [form]);

  return (
    <div className="Carts">
      <HeaderSkew title="Giỏ hàng" />

      {isEmpty ? (
        <EmptyBox
          title="Chưa có sản phẩm nào trong giỏ hàng của bạn"
          buttonProps={{ title: 'Tiếp tục mua sắm', onClick: handleClickContinueShopping }}
        />
      ) : (
        <Form form={form} onFinish={handleSubmitCart}>
          <div className="Carts-wrapper flex justify-between flex-wrap">
            <div className="Carts-wrapper-item">
              {isCheckoutStep ? (
                <div className="Carts-checkout">
                  <div className="Checkout-description">
                    Xin vui lòng điền đầy đủ thông tin dưới đây để hoàn tất đơn hàng
                  </div>
                  <div className="Checkout-subtitle">THÔNG TIN THANH TOÁN</div>

                  <div className="Checkout-form-row flex justify-between flex-wrap">
                    <Form.Item name="name" rules={[validationRules.required()]}>
                      <Input placeholder="Nhập họ tên" size="large" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                      <Input placeholder="Nhập số điện thoại" size="large" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row">
                    <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                      <Input placeholder="Nhập email" size="large" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row flex justify-between flex-wrap">
                    <Form.Item name="city" rules={[validationRules.required()]}>
                      <Select
                        placeholder="Tỉnh / thành phố"
                        options={addressState.city}
                        disabled={isDisabledCityField}
                        onChange={(option): void => handleChangeAddress(option?.value)}
                      />
                    </Form.Item>
                    <Form.Item name="district" rules={[validationRules.required()]}>
                      <Select
                        placeholder="Quận / huyện"
                        options={addressState.district}
                        disabled={isDisabledDistrictField}
                        onChange={(option): void =>
                          handleChangeAddress(getAddressParamsRequest.cityCode, option?.value)
                        }
                      />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row">
                    <Form.Item name="address" rules={[validationRules.required()]}>
                      <TextArea placeholder="Nhập địa chỉ cụ thể" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-subtitle">LƯU Ý ĐẶC BIỆT</div>
                  <div className="Checkout-form-row">
                    <Form.Item name="note">
                      <TextArea placeholder="Ghi chú (có thể bỏ trống)" />
                    </Form.Item>
                  </div>
                </div>
              ) : (
                <div className="Carts-orders">
                  {carts?.map((item) => {
                    const isSamePriceAndCostPrice = item?.product?.costPrice === item?.product?.price;

                    return (
                      <div key={item.id} className="Carts-orders-item flex items-start justify-between">
                        <div
                          className={classNames('Carts-orders-item-remove')}
                          onClick={(): void => handleRemoveCart(item)}
                        >
                          <Icon name={EIconName.Close} />
                        </div>
                        <div className="Carts-orders-item-image">
                          <img src={item?.product?.image} onError={handleErrorImageUrl} alt="" />
                        </div>
                        <div className="Carts-orders-item-info">
                          <div className="Carts-orders-item-title">{item.product.name}</div>
                          {item.dateStartEat && item.dateEndEat && (
                            <div className="Carts-orders-item-date">
                              Từ {formatISODateToDateTime(item.dateStartEat, EFormatDate.COMMON)} - đến{' '}
                              {formatISODateToDateTime(item.dateEndEat, EFormatDate.COMMON)}
                            </div>
                          )}

                          <div className="Carts-orders-item-price">
                            {formatMoneyVND({ amount: item.product.price, showSuffix: true })}{' '}
                            {Boolean(item?.product?.costPrice) && !isSamePriceAndCostPrice && (
                              <del>
                                {formatMoneyVND({
                                  amount: item?.product?.costPrice || 0,
                                  showSuffix: true,
                                })}
                              </del>
                            )}
                          </div>
                          <div className="Carts-orders-item-amount flex justify-between">
                            Số lượng:
                            <Amount value={item.amount} onChange={(value): void => handleChangeAmount(value, item)} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="Carts-wrapper-item">
              <div className="Carts-card">
                <div className="Carts-card-title">Phương thức thanh toán</div>

                <Form.Item name="typePayment" rules={[validationRules.required()]}>
                  <Radio options={dataPaymentMethodOptions} />
                </Form.Item>

                <Form.Item name="referCode">
                  <Input placeholder="Nhập mã giới thiệu" />
                </Form.Item>

                <div className="Carts-row-summary">
                  <div className="Carts-row flex justify-between">
                    <div className="Carts-row-text">Tổng giá tiền</div>
                    <div className="Carts-row-text">
                      <strong>{formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}</strong>
                    </div>
                  </div>
                  <div className="Carts-row-submit">
                    <Button
                      type="primary"
                      title={isCheckoutStep ? 'Đặt hàng' : 'Tiếp tục'}
                      size="large"
                      htmlType="submit"
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default Carts;
