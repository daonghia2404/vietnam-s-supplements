import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import classNames from 'classnames';
import { Form } from 'antd';

import HeaderSkew from '@/components/HeaderSkew';
import Amount from '@/components/Amount';
import Button from '@/components/Button';
import Icon, { EIconName } from '@/components/Icon';
import AuthHelpers from '@/services/helpers';
import { TRootState } from '@/redux/reducers';
import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';
import PageLoading from '@/components/PageLoading';
import EmptyBox from '@/components/EmptyBox';
import { LayoutPaths, Paths } from '@/pages/routers';
import { TCartResponse } from '@/services/api/cart-controller/types';
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
  createOrderAction,
  deleteCartAction,
  getAddressAction,
  getCartAction,
  getVouchersAction,
  patchCartAction,
  uiActions,
} from '@/redux/actions';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Radio from '@/components/Radio';
import { dataPaymentMethodOptions } from '@/pages/Carts/Carts.data';
import { TParamsGetVouchers } from '@/services/api/voucher-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';
import { handleChangeAmountCartLocalStorage, handleDeleteCartLocalStorage } from '@/utils/cart';

import './Carts.scss';

const Carts: React.FC = () => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();
  const [form] = Form.useForm();

  const [cartsChecked, setCartsChecked] = useState<TCartResponse[]>([]);
  const userInfo = useSelector((state: TRootState) => state.authReducer.user);
  const addressState = useSelector((state: TRootState) => state.addressReducer);

  const cartsDatabase = useSelector((state: TRootState) => state.cartReducer.cart?.cart);
  const cartsStorage = useSelector((state: TRootState) => state.uiReducer.cartsStorage) || [];
  const carts = atk ? cartsDatabase : cartsStorage;

  const getCartsLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.GET_CART]);
  const patchCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.PATCH_CART]);
  const deleteCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.DELETE_CART]);
  const createOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EOrderControllerAction.CREATE_ORDER],
  );
  const isEmpty = carts?.length === 0;

  const voucherTotalState = useSelector((state: TRootState) => state.voucherReducer.vouchers?.total);
  const [getVouchersParamsRequest, setGetVouchersParamsRequest] = useState<TParamsGetVouchers>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [voucherOptions, setVoucherOptions] = useState<TSelectOption[]>([]);

  const handleChangeAmount = (amount: number, data: TCartResponse): void => {
    if (atk) {
      if (!patchCartLoading) {
        const patchBody = {
          amount,
        };

        dispatch(patchCartAction.request(data.id, patchBody, getCartsData));
      }
    } else {
      const newCartsData = handleChangeAmountCartLocalStorage(cartsStorage, data.id, amount);
      dispatch(uiActions.setCartsStorage(newCartsData));
    }
  };

  const handleRemoveCart = (data: TCartResponse): void => {
    if (atk) {
      if (!deleteCartLoading) {
        dispatch(
          deleteCartAction.request(data.id, (): void => {
            showNotification(ETypeNotification.SUCCESS, 'X??a s???n ph???m kh???i gi??? h??ng th??nh c??ng');
            getCartsData();
          }),
        );
      }
    } else {
      const newCartsData = handleDeleteCartLocalStorage(cartsStorage, data.id);
      dispatch(uiActions.setCartsStorage(newCartsData));
    }
  };

  const handleClickContinueShopping = (): void => {
    navigate(Paths.Categorys);
  };

  const handleSubmitCart = (values: any): void => {
    if (atk) {
      const body = {
        typePayment: values?.typePayment?.value,
        referCode: values?.referCode || '',
        idCardBackCard: userInfo?.backIdCard || '',
        idCardFontCard: userInfo?.frontIdCard || '',
        address: userInfo?.address || '',
        phoneRevicer: userInfo?.phone || '',
        nameReceiver: userInfo?.fullName || '',
        district: userInfo?.district || '',
        city: userInfo?.city || '',
      };

      dispatch(createOrderAction.request(body, handleCreateOrderSuccess));
    } else {
      showNotification(ETypeNotification.WARNING, 'Vui l??ng ????ng nh???p ????? ti???p t???c th???c hi???n h??nh ?????ng');
    }
  };

  const handleCreateOrderSuccess = (response: any): void => {
    if (response === 'not enough money') {
      showNotification(ETypeNotification.ERROR, 'B???n kh??ng ????? ti???n ????? th???c hi???n');
    } else {
      showNotification(ETypeNotification.SUCCESS, 'T???o ????n h??ng th??nh c??ng');
      getCartsData();
      navigate(`${LayoutPaths.Profile}${Paths.Cart}`);
    }
  };

  const caculatorTotalPrice = (): number => {
    const total = cartsChecked
      .map((item) => item.price)
      .reduce((result, item) => {
        const newResult = result + Number(item);

        return newResult;
      }, 0);

    return total;
  };

  const handleLoadMoreVoucher = (): void => {
    setGetVouchersParamsRequest({
      ...getVouchersParamsRequest,
      page: getVouchersParamsRequest.page + 1,
    });
  };

  const getCartsData = useCallback(() => {
    if (atk) dispatch(getCartAction.request());
  }, [atk, dispatch]);

  const getVouchersData = useCallback(() => {
    if (atk)
      dispatch(
        getVouchersAction.request(getVouchersParamsRequest, () => {
          const isFirstFetching = getVouchersParamsRequest.page === DEFAULT_PAGE;
          const options: any = [];
          setVoucherOptions(isFirstFetching ? options : [...voucherOptions, ...options]);
        }),
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atk, getVouchersParamsRequest, dispatch]);

  const getAddressData = useCallback(() => {
    dispatch(getAddressAction.request({ districtCode: null, cityCode: null }));
  }, [dispatch]);

  const getAddressWithExistedCity = useCallback((): void => {
    if (userInfo?.city) dispatch(getAddressAction.request({ cityCode: userInfo?.city, districtCode: null }));
  }, [userInfo, dispatch]);

  useEffect(() => {
    getAddressWithExistedCity();
  }, [getAddressWithExistedCity]);

  useEffect(() => {
    getAddressData();
  }, [getAddressData]);

  useEffect(() => {
    getCartsData();
  }, [getCartsData]);

  useEffect(() => {
    getVouchersData();
  }, [getVouchersData]);

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

      {getCartsLoading ? (
        <PageLoading />
      ) : (
        <>
          {isEmpty ? (
            <EmptyBox
              title="Ch??a c?? s???n ph???m n??o trong gi??? h??ng c???a b???n"
              buttonProps={{ title: 'Ti???p t???c mua s???m', onClick: handleClickContinueShopping }}
            />
          ) : (
            <div className="Carts-wrapper flex justify-between flex-wrap">
              <div className="Carts-wrapper-item">
                <div className="Carts-orders">
                  {carts?.map((item) => {
                    const isSamePriceAndCostPrice = item?.product?.costPrice === item?.product?.price;
                    return (
                      <div key={item.id} className="Carts-orders-item flex items-start justify-between">
                        <div
                          className={classNames('Carts-orders-item-remove', { loading: deleteCartLoading })}
                          onClick={(): void => handleRemoveCart(item)}
                        >
                          <Icon name={EIconName.Close} />
                        </div>
                        {/* <div className="Carts-orders-item-check">
                          <Checkbox
                            value={cartsChecked.map((cart) => cart.id).includes(item.id)}
                            onChange={(checked): void => handleCheckCart(checked, item)}
                          />
                        </div> */}
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
                            <Amount
                              value={item.amount}
                              disabled={patchCartLoading}
                              onChange={(value): void => handleChangeAmount(value, item)}
                            />
                          </div>
                        </div>
                        {/* <div className="Carts-orders-item-price">
                          T???ng ti???n
                          <strong>{formatMoneyVND({ amount: item?.product?.price || 0 })} VND</strong>
                        </div> */}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="Carts-wrapper-item">
                <div className="Carts-card">
                  <Form form={form} onFinish={handleSubmitCart}>
                    <div className="Carts-card-title">Voucher</div>
                    <Form.Item name="voucher">
                      <Select
                        placeholder="Ch???n Voucher"
                        options={voucherOptions}
                        onLoadMore={handleLoadMoreVoucher}
                        paginate={{
                          page: getVouchersParamsRequest.page,
                          pageSize: getVouchersParamsRequest.pageSize,
                          total: voucherTotalState || 0,
                        }}
                        allowClear
                      />
                    </Form.Item>

                    <div className="Carts-card-title">?????a ch??? c???a b???n</div>
                    <div className="Carts-card-address">
                      <h6>?????a ch??? c???a b???n</h6>
                      <p>{userInfo?.phone}</p>
                      <p>{userInfo?.address}</p>
                      <p>{addressState.district.find((item) => item.value === userInfo?.district)?.label}</p>
                      <p>{addressState.city.find((item) => item.value === userInfo?.city)?.label}</p>
                    </div>
                    <div className="Carts-card-title">Ph????ng th???c thanh to??n</div>

                    <Form.Item name="typePayment" rules={[validationRules.required()]}>
                      <Radio options={dataPaymentMethodOptions} />
                    </Form.Item>
                    <div className="Carts-card-title">M?? gi???i thi???u</div>

                    <Form.Item name="referCode">
                      <Input placeholder="Nh???p m?? gi???i thi???u" />
                    </Form.Item>

                    <div className="Carts-row-summary">
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">{cartsChecked.length} s???n ph???m</div>
                        <div className="Carts-row-text">
                          {formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}
                        </div>
                      </div>
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">Voucher</div>
                        <div className="Carts-row-text">0 ??</div>
                      </div>
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">T???ng gi?? ti???n</div>
                        <div className="Carts-row-text">
                          <strong>{formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}</strong>
                        </div>
                      </div>
                      <div className="Carts-row-submit">
                        <Button
                          type="primary"
                          title="?????t h??ng"
                          size="large"
                          htmlType="submit"
                          loading={createOrderLoading}
                        />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Carts;
