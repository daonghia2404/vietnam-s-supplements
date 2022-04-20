import { ECategoryControllerAction } from '@/redux/actions/category-controller/constants';
import {
  TGetCategoryResponse,
  TGetCategorysResponse,
  TParamsGetCategorys,
} from '@/services/api/category-controller/types';

export type TGetCategorysRequest = {
  type: ECategoryControllerAction.GET_CATEGORYS_REQUEST;
  payload: {
    params: TParamsGetCategorys;
    cb?: (response: TGetCategorysResponse) => void;
  };
};

export type TGetCategorysSuccess = {
  type: ECategoryControllerAction.GET_CATEGORYS_SUCCESS;
  payload: { response: TGetCategorysResponse };
};

export type TGetCategorysFailed = { type: ECategoryControllerAction.GET_CATEGORYS_FAILED; payload: { error: unknown } };

export type TGetCategoryRequest = {
  type: ECategoryControllerAction.GET_CATEGORY_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetCategoryResponse) => void;
  };
};

export type TGetCategorySuccess = {
  type: ECategoryControllerAction.GET_CATEGORY_SUCCESS;
  payload: { response: TGetCategoryResponse };
};

export type TGetCategoryFailed = { type: ECategoryControllerAction.GET_CATEGORY_FAILED; payload: { error: unknown } };
