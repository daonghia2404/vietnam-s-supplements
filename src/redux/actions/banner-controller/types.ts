import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { TGetBannerResponse, TGetBannersResponse } from '@/services/api/banner-controller/types';

export type TGetBannersRequest = {
  type: EBannerControllerAction.GET_BANNERS_REQUEST;
  payload: {
    cb?: (response: TGetBannersResponse) => void;
  };
};

export type TGetBannersSuccess = {
  type: EBannerControllerAction.GET_BANNERS_SUCCESS;
  payload: { response: TGetBannersResponse };
};

export type TGetBannersFailed = { type: EBannerControllerAction.GET_BANNERS_FAILED; payload: { error: unknown } };

export type TGetBannerRequest = {
  type: EBannerControllerAction.GET_BANNER_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetBannerResponse) => void;
  };
};

export type TGetBannerSuccess = {
  type: EBannerControllerAction.GET_BANNER_SUCCESS;
  payload: { response: TGetBannerResponse };
};

export type TGetBannerFailed = { type: EBannerControllerAction.GET_BANNER_FAILED; payload: { error: unknown } };
