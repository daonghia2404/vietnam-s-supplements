import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSkew from '@/components/HeaderSkew';
import UploadAvatar from '@/components/UploadAvatar';
import UploadFilesList from '@/components/UploadFilesList';
import { formatISODateToMomment, showNotification, validationRules } from '@/utils/functions';
import Input from '@/components/Input';
import DatePicker from '@/components/DatePicker';
import Select from '@/components/Select';
import Button from '@/components/Button';
import { TRootState } from '@/redux/reducers';
import { EAuthControllerAction } from '@/redux/actions/auth-controller/constants';
import PageLoading from '@/components/PageLoading';
import { getAddressAction, updateInfoAction } from '@/redux/actions';
import { ETypeNotification } from '@/common/enums';
import { TParamsGetAddress } from '@/services/api/address-controller/types';

import './ProfileInformation.scss';

const ProfileInformation: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const getInfoLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.GET_INFO]);
  const updateInfoLoading = useSelector((state: TRootState) => state.loadingReducer[EAuthControllerAction.UPDATE_INFO]);

  const authInfoState = useSelector((state: TRootState) => state.authReducer.user);
  const addressState = useSelector((state: TRootState) => state.addressReducer);

  const [isAvaiableSetDefaultValue, setIsAvaiableSetDefaultValue] = useState<boolean>(true);

  const [getAddressParamsRequest, setGetAddressParamsRequest] = useState<TParamsGetAddress>({
    districtCode: null,
    cityCode: null,
  });

  const isDisabledCityField = addressState.city.length === 0;
  const isDisabledDistrictField = addressState.district.length === 0;
  const isUserHaveCityCode = authInfoState?.city;
  const isUserHaveDistrictCode = isUserHaveCityCode && authInfoState?.district;

  const handleSubmit = (values: any): void => {
    const body = {
      fullName: values.fullName,
      avatar: values.avatar,
      address: values.address,
      city: values.city.value,
      district: values.district.value,
      backIdCard: values.backIdCard?.join(''),
      frontIdCard: values.frontIdCard?.join(''),
      birthday: values.birthday,
      email: values.email,
    };

    dispatch(updateInfoAction.request(body, handleUpdateInfoSuccess));
  };

  const handleUpdateInfoSuccess = (): void => {
    showNotification(ETypeNotification.SUCCESS, 'Cập nhật thông tin cá nhân thành công');
  };

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

  const getAddress = (): void => {
    dispatch(getAddressAction.request({ cityCode: null, districtCode: null }));
  };

  const getAddressWithExistedCity = (): void => {
    dispatch(
      getAddressAction.request({
        cityCode: getAddressParamsRequest.cityCode || authInfoState.city,
        districtCode: null,
      }),
    );
  };

  const getAddressWithExistedCityAndDistrict = (): void => {
    dispatch(
      getAddressAction.request({
        cityCode: getAddressParamsRequest.cityCode || authInfoState.city,
        districtCode: getAddressParamsRequest.districtCode || authInfoState.district,
      }),
    );
  };

  useEffect(() => {
    const isAvaiableUpdateExistedField =
      (!isUserHaveCityCode && !isUserHaveDistrictCode) ||
      (isUserHaveCityCode && !isDisabledCityField && !isUserHaveDistrictCode && isDisabledDistrictField) ||
      (isUserHaveCityCode && !isDisabledCityField && isUserHaveDistrictCode && !isDisabledDistrictField);

    if (isAvaiableSetDefaultValue && isAvaiableUpdateExistedField && authInfoState) {
      form.setFieldsValue({
        address: authInfoState.address,
        avatar: authInfoState.avatar,
        birthday: formatISODateToMomment(authInfoState.birthday),
        city: addressState.city.find((option) => option.value === authInfoState.city),
        district: addressState.district.find((option) => option.value === authInfoState.district),
        email: authInfoState.email,
        frontIdCard: authInfoState.frontIdCard ? [authInfoState.frontIdCard] : undefined,
        backIdCard: authInfoState.backIdCard ? [authInfoState.backIdCard] : undefined,
        fullName: authInfoState.fullName,
      });

      setIsAvaiableSetDefaultValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, authInfoState, addressState, isAvaiableSetDefaultValue]);

  useEffect(() => {
    if (!isAvaiableSetDefaultValue) getAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAddressData]);

  useEffect(() => {
    getAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isUserHaveCityCode && !isDisabledCityField) getAddressWithExistedCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfoState, isDisabledCityField]);

  useEffect(() => {
    if (!isDisabledCityField && isUserHaveDistrictCode && !isDisabledDistrictField)
      getAddressWithExistedCityAndDistrict();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfoState, isDisabledCityField, isDisabledDistrictField]);

  return (
    <div className="ProfileInformation style-container">
      {getInfoLoading ? (
        <PageLoading />
      ) : (
        <>
          <HeaderSkew title="Thông tin cá nhân" />

          <div className="ProfileInformation-main">
            <Form className="ProfileInformation-main-form" form={form} onFinish={handleSubmit}>
              <Form.Item name="avatar" style={{ marginBottom: '3.2rem' }}>
                <UploadAvatar />
              </Form.Item>
              <Form.Item name="fullName" rules={[validationRules.required()]}>
                <Input placeholder="Tên của bạn" />
              </Form.Item>
              <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="birthday" rules={[validationRules.required()]}>
                <DatePicker placeholder="Sinh nhật" />
              </Form.Item>
              <div className="ProfileInformation-main-form-row flex justify-between two flex-wrap">
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
                    onChange={(option): void => handleChangeAddress(getAddressParamsRequest.cityCode, option?.value)}
                  />
                </Form.Item>
              </div>
              <Form.Item name="address" rules={[validationRules.required()]}>
                <Input placeholder="Địa chỉ cụ thể" />
              </Form.Item>
              <Form.Item
                name="frontIdCard"
                rules={[validationRules.required('Vui lòng tải ảnh mặt trước CMND - CCCD')]}
              >
                <UploadFilesList label="Ảnh mặt trước CMND - CCCD" useSingle />
              </Form.Item>
              <Form.Item name="backIdCard" rules={[validationRules.required('Vui lòng tải ảnh mặt sau CMND - CCCD')]}>
                <UploadFilesList label="Ảnh mặt sau CMND- CCCD" useSingle />
              </Form.Item>

              <div className="ProfileInformation-main-form-submit flex justify-center">
                <Button title="Chỉnh sửa" type="primary" htmlType="submit" loading={updateInfoLoading} />
              </div>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileInformation;
