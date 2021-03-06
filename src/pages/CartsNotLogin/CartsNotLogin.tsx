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
import { TCreatePaymentResponse } from '@/services/api/payment-controller/types';
import { EPaymentControllerAction } from '@/redux/actions/payment-controller/constants';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';

import './CartsNotLogin.scss';

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
  const isDisabledCommuneField = addressState.commune.length === 0;

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
    navigate(Paths.Categorys);
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
        commune: values?.commune?.value,
        communeReceiver: values?.commune?.label,
        phone: values?.phone,
        phoneReceiver: values?.phone,
        nameUser: values?.name,
        nameReceiver: values?.name,
        email: values?.email || '',
        note: values?.note,
      };
      dispatch(
        checkoutOrderAction.request(body, (response): void => {
          if (typePayment === EOrderPayment.SHIP_COD) {
            handleCheckoutOrderSuccess();
          }

          if (typePayment === EOrderPayment.WALLET) {
            const paymentBody: any = {
              orderId: response.id,
              amount: String(isCheckoutStep.totalprice),
              bankCode: undefined,
              extraData: undefined,
              paymentMethod: undefined,
            };
            dispatch(createPaymentOrderAction.request(paymentBody, handleCreatePaymentSuccess));
          }
        }),
      );
    } else {
      const body = {
        cart: carts.map((item) => ({
          product: item.product,
          amount: item.amount,
        })),
      };
      dispatch(createCartAction.request(body, handleCreateOrderSuccess));
    }
  };

  const handleCreateOrderSuccess = (response: TCreateCartResponse): void => {
    setIsCheckoutStep(response);
  };

  const handleCreatePaymentSuccess = (response: TCreatePaymentResponse): void => {
    window.open(response.paymentUrl, '_blank');
  };

  const handleCheckoutOrderSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'T???o ????n h??ng th??nh c??ng');
    dispatch(uiActions.setCartsStorage([]));
    navigate(Paths.Home);
  };

  const caculatorTotalPrice = (): number => {
    const total = cartsChecked.reduce((result, item) => {
      const newResult = result + Number(item.product?.price || item.product?.costPrice) * item.amount;

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
      <HeaderSkew title="Gi??? h??ng" />

      {isEmpty ? (
        <EmptyBox
          title="Ch??a c?? s???n ph???m n??o trong gi??? h??ng c???a b???n"
          buttonProps={{ title: 'Ti???p t???c mua s???m', onClick: handleClickContinueShopping }}
        />
      ) : (
        <Form form={form} onFinish={handleSubmitCart}>
          <div className="Carts-wrapper flex justify-between flex-wrap">
            <div className="Carts-wrapper-item">
              {isCheckoutStep ? (
                <div className="Carts-checkout">
                  <div className="Checkout-description">
                    Xin vui l??ng ??i???n ?????y ????? th??ng tin d?????i ????y ????? ho??n t???t ????n h??ng
                  </div>
                  <div className="Checkout-subtitle">TH??NG TIN THANH TO??N</div>

                  <div className="Checkout-form-row flex justify-between flex-wrap">
                    <Form.Item name="name" rules={[validationRules.required()]}>
                      <Input placeholder="Nh???p h??? t??n" size="large" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[validationRules.required(), validationRules.onlyNumeric()]}>
                      <Input placeholder="Nh???p s??? ??i???n tho???i" size="large" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row">
                    <Form.Item name="email" rules={[validationRules.email()]}>
                      <Input placeholder="Nh???p email" size="large" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row flex justify-between flex-wrap">
                    <Form.Item name="city" rules={[validationRules.required()]}>
                      <Select
                        placeholder="T???nh / th??nh ph???"
                        options={addressState.city}
                        disabled={isDisabledCityField}
                        onChange={(option): void => handleChangeAddress(option?.value)}
                      />
                    </Form.Item>
                    <Form.Item name="district" rules={[validationRules.required()]}>
                      <Select
                        placeholder="Qu???n / huy???n"
                        options={addressState.district}
                        disabled={isDisabledDistrictField}
                        onChange={(option): void =>
                          handleChangeAddress(getAddressParamsRequest.cityCode, option?.value)
                        }
                      />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row">
                    <Form.Item name="commune" rules={[validationRules.required()]}>
                      <Select
                        placeholder="X?? / ph?????ng"
                        options={addressState.commune}
                        disabled={isDisabledCommuneField}
                      />
                    </Form.Item>
                  </div>

                  <div className="Checkout-form-row">
                    <Form.Item name="address" rules={[validationRules.required()]}>
                      <TextArea placeholder="Nh???p ?????a ch??? c??? th???" />
                    </Form.Item>
                  </div>

                  <div className="Checkout-subtitle">L??U ?? ?????C BI???T</div>
                  <div className="Checkout-form-row">
                    <Form.Item name="note">
                      <TextArea placeholder="Ghi ch?? (c?? th??? b??? tr???ng)" />
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
                              T??? {formatISODateToDateTime(item.dateStartEat, EFormatDate.COMMON)} - ?????n{' '}
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
                            S??? l?????ng:
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
                <div className="Carts-card-title">Ph????ng th???c thanh to??n</div>

                <Form.Item name="typePayment" rules={[validationRules.required()]}>
                  <Radio options={dataPaymentMethodOptions} />
                </Form.Item>

                <Form.Item name="referCode">
                  <Input placeholder="Nh???p m?? gi???i thi???u" />
                </Form.Item>

                <div className="Carts-row-summary">
                  <div className="Carts-row flex justify-between">
                    <div className="Carts-row-text">T???ng gi?? ti???n</div>
                    <div className="Carts-row-text">
                      <strong>{formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}</strong>
                    </div>
                  </div>
                  <div className="Carts-row-submit">
                    <Button
                      type="primary"
                      title={isCheckoutStep ? '?????t h??ng' : 'Ti???p t???c'}
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
