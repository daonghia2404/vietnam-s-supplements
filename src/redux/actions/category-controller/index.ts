import { createActionCreator } from 'deox';

import { ECategoryControllerAction } from '@/redux/actions/category-controller/constants';
import {
  TGetCategoryResponse,
  TGetCategorysResponse,
  TParamsGetCategorys,
} from '@/services/api/category-controller/types';
import {
  TGetCategorysRequest,
  TGetCategorysSuccess,
  TGetCategorysFailed,
  TGetCategoryFailed,
  TGetCategoryRequest,
  TGetCategorySuccess,
} from '@/redux/actions/category-controller/types';

export const getCategorysAction = {
  request: createActionCreator(
    ECategoryControllerAction.GET_CATEGORYS_REQUEST,
    (resolve) =>
      (params: TParamsGetCategorys, cb?: (response: TGetCategorysResponse) => void): TGetCategorysRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    ECategoryControllerAction.GET_CATEGORYS_SUCCESS,
    (resolve) =>
      (response: TGetCategorysResponse): TGetCategorysSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECategoryControllerAction.GET_CATEGORYS_FAILED,
    (resolve) =>
      (error: unknown): TGetCategorysFailed =>
        resolve({ error }),
  ),
};

export const getCategoryAction = {
  request: createActionCreator(
    ECategoryControllerAction.GET_CATEGORY_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetCategoryResponse) => void): TGetCategoryRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ECategoryControllerAction.GET_CATEGORY_SUCCESS,
    (resolve) =>
      (response: TGetCategoryResponse): TGetCategorySuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECategoryControllerAction.GET_CATEGORY_FAILED,
    (resolve) =>
      (error: unknown): TGetCategoryFailed =>
        resolve({ error }),
  ),
};
