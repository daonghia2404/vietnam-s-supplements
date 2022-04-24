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
  caculatorSalePrice,
  formatISODateToDateTime,
  formatMoneyVND,
  showNotification,
  validationRules,
} from '@/utils/functions';
import Checkbox from '@/components/Checkbox';
import { EFormatDate, ETypeNotification } from '@/common/enums';
import {
  createOrderAction,
  deleteCartAction,
  getAddressAction,
  getCartAction,
  getVouchersAction,
  patchCartAction,
} from '@/redux/actions';

import './Carts.scss';
import Select, { TSelectOption } from '@/components/Select';
import Input from '@/components/Input';
import Radio from '@/components/Radio';
import { dataPaymentMethodOptions } from '@/pages/Carts/Carts.data';
import { TParamsGetVouchers } from '@/services/api/voucher-controller/types';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/common/constants';
import { EOrderControllerAction } from '@/redux/actions/order-controller/constants';

const Carts: React.FC = () => {
  const dispatch = useDispatch();
  const atk = AuthHelpers.getAccessToken();
  const [form] = Form.useForm();

  const [cartsChecked, setCartsChecked] = useState<TCartResponse[]>([]);
  const userInfo = useSelector((state: TRootState) => state.authReducer.user);
  const addressState = useSelector((state: TRootState) => state.addressReducer);

  const carts = useSelector((state: TRootState) => state.cartReducer.cart);
  const getCartsLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.GET_CART]);
  const patchCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.PATCH_CART]);
  const deleteCartLoading = useSelector((state: TRootState) => state.loadingReducer[ECartControllerAction.DELETE_CART]);
  const createOrderLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EOrderControllerAction.CREATE_ORDER],
  );
  const isEmpty = carts?.cart?.length === 0;

  const voucherTotalState = useSelector((state: TRootState) => state.voucherReducer.vouchers?.total);
  const [getVouchersParamsRequest, setGetVouchersParamsRequest] = useState<TParamsGetVouchers>({
    page: DEFAULT_PAGE,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [voucherOptions, setVoucherOptions] = useState<TSelectOption[]>([]);

  const handleCheckCart = (checked: boolean, data: TCartResponse): void => {
    if (checked) setCartsChecked([...cartsChecked, data]);
    else setCartsChecked(cartsChecked.filter((cart) => cart.id !== data.id));
  };

  const handleChangeAmount = (amount: number, data: TCartResponse): void => {
    if (!patchCartLoading) {
      const patchBody = {
        amount,
      };

      dispatch(patchCartAction.request(data.id, patchBody, getCartsData));
    }
  };

  const handleRemoveCart = (data: TCartResponse): void => {
    if (!deleteCartLoading) dispatch(deleteCartAction.request(data.id, getCartsData));
  };

  const handleClickContinueShopping = (): void => {
    navigate(Paths.Home);
  };

  const handleSubmitCart = (values: any): void => {
    const body = {
      typePayment: values?.typePayment?.value,
      referCode: values?.referCode || '',
      idCardBackCard: userInfo?.backIdCard,
      idCardFontCard: userInfo?.frontIdCard,
      address: userInfo?.address,
      phoneRevicer: userInfo?.phone,
      nameReceiver: userInfo?.fullName,
      district: userInfo?.district,
      city: userInfo?.city,
    };

    dispatch(createOrderAction.request(body, handleCreateOrderSuccess));
  };

  const handleCreateOrderSuccess = (response: any): void => {
    if (response === 'not enough money') {
      showNotification(ETypeNotification.ERROR, 'Bạn không đủ tiền để thực hiện');
    } else {
      showNotification(ETypeNotification.SUCCESS, 'Tạo đơn hàng thành công');
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
    setCartsChecked(carts?.cart || []);
  }, [carts]);

  return (
    <div className="Carts">
      <HeaderSkew title="Giỏ hàng" />

      {getCartsLoading ? (
        <PageLoading />
      ) : (
        <>
          {isEmpty ? (
            <EmptyBox
              title="Chưa có sản phẩm nào trong giỏ hàng của bạn"
              buttonProps={{ title: 'Tiếp tục mua sắm', onClick: handleClickContinueShopping }}
            />
          ) : (
            <div className="Carts-wrapper flex justify-between">
              <div className="Carts-wrapper-item">
                <div className="Carts-orders">
                  {carts?.cart.map((item) => (
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
                        <img src={item.product.image} alt="" />
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
                          {item.product.sale && (
                            <del>
                              {formatMoneyVND({
                                amount: caculatorSalePrice(item.product.price, Number(item.product.sale)),
                                showSuffix: true,
                              })}
                            </del>
                          )}
                        </div>
                        <div className="Carts-orders-item-amount flex justify-between">
                          Số lượng:
                          <Amount
                            value={item.amount}
                            disabled={patchCartLoading}
                            onChange={(value): void => handleChangeAmount(value, item)}
                          />
                        </div>
                      </div>
                      {/* <div className="Carts-orders-item-price">
                        Tổng tiền
                        <strong>{formatMoneyVND({ amount: item?.product?.price || 0 })} VND</strong>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="Carts-wrapper-item">
                <div className="Carts-card">
                  <Form form={form} onFinish={handleSubmitCart}>
                    <div className="Carts-card-title">Voucher</div>
                    <Form.Item name="voucher">
                      <Select
                        placeholder="Chọn Voucher"
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

                    <div className="Carts-card-title">Địa chỉ của bạn</div>
                    <div className="Carts-card-address">
                      <h6>Địa chỉ của bạn</h6>
                      <p>{userInfo?.phone}</p>
                      <p>{userInfo?.address}</p>
                      <p>{addressState.district.find((item) => item.value === userInfo?.district)?.label}</p>
                      <p>{addressState.city.find((item) => item.value === userInfo?.city)?.label}</p>
                    </div>
                    <div className="Carts-card-title">Phương thức thanh toán</div>

                    <Form.Item name="typePayment" rules={[validationRules.required()]}>
                      <Radio options={dataPaymentMethodOptions} />
                    </Form.Item>
                    <div className="Carts-card-title">Mã giới thiệu</div>

                    <Form.Item name="referCode">
                      <Input placeholder="Nhập mã giới thiệu" />
                    </Form.Item>

                    <div className="Carts-row-summary">
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">{cartsChecked.length} sản phẩm</div>
                        <div className="Carts-row-text">
                          {formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}
                        </div>
                      </div>
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">Voucher</div>
                        <div className="Carts-row-text">0 đ</div>
                      </div>
                      <div className="Carts-row flex justify-between">
                        <div className="Carts-row-text">Tổng giá tiền</div>
                        <div className="Carts-row-text">
                          <strong>{formatMoneyVND({ amount: caculatorTotalPrice(), showSuffix: true })}</strong>
                        </div>
                      </div>
                      <div className="Carts-row-submit">
                        <Button
                          type="primary"
                          title="Đặt hàng"
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
