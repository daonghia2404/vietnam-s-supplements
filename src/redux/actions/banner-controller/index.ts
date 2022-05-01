import { createActionCreator } from 'deox';

import { EBannerControllerAction } from '@/redux/actions/banner-controller/constants';
import { TGetBannerResponse, TGetBannersResponse } from '@/services/api/banner-controller/types';
import {
  TGetBannersRequest,
  TGetBannersSuccess,
  TGetBannersFailed,
  TGetBannerFailed,
  TGetBannerRequest,
  TGetBannerSuccess,
} from '@/redux/actions/banner-controller/types';

export const getBannersAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_BANNERS_REQUEST,
    (resolve) =>
      (cb?: (response: TGetBannersResponse) => void): TGetBannersRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_BANNERS_SUCCESS,
    (resolve) =>
      (response: TGetBannersResponse): TGetBannersSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_BANNERS_FAILED,
    (resolve) =>
      (error: unknown): TGetBannersFailed =>
        resolve({ error }),
  ),
};

export const getBannerAction = {
  request: createActionCreator(
    EBannerControllerAction.GET_BANNER_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetBannerResponse) => void): TGetBannerRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EBannerControllerAction.GET_BANNER_SUCCESS,
    (resolve) =>
      (response: TGetBannerResponse): TGetBannerSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EBannerControllerAction.GET_BANNER_FAILED,
    (resolve) =>
      (error: unknown): TGetBannerFailed =>
        resolve({ error }),
  ),
};
