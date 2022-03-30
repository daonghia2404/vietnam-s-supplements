import { createActionCreator } from 'deox';

import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import {
  TGetProductsFavoriteRequest,
  TGetProductsFavoriteSuccess,
  TGetProductsFavoriteFailed,
} from '@/redux/actions/product-controller/types';
import { TParamsGetProductsFavorite, TGetProductsFavoriteResponse } from '@/services/api/product-controller/types';

export const getProductsFavoriteAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_FAVORITE_REQUEST,
    (resolve) =>
      (
        params: TParamsGetProductsFavorite,
        cb?: (response: TGetProductsFavoriteResponse) => void,
      ): TGetProductsFavoriteRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_FAVORITE_SUCCESS,
    (resolve) =>
      (response: TGetProductsFavoriteResponse): TGetProductsFavoriteSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_FAVORITE_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsFavoriteFailed =>
        resolve({ error }),
  ),
};
