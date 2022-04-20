import { createActionCreator } from 'deox';

import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import {
  TGetProductsFavoriteRequest,
  TGetProductsFavoriteSuccess,
  TGetProductsFavoriteFailed,
  TGetProductsFailed,
  TGetProductsRequest,
  TGetProductsSuccess,
  TGetProductFailed,
  TGetProductRequest,
  TGetProductSuccess,
} from '@/redux/actions/product-controller/types';
import {
  TParamsGetProductsFavorite,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
  TParamsGetProducts,
  TGetProductResponse,
} from '@/services/api/product-controller/types';

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

export const getProductsAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_REQUEST,
    (resolve) =>
      (params: TParamsGetProducts, cb?: (response: TGetProductsResponse) => void): TGetProductsRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SUCCESS,
    (resolve) =>
      (response: TGetProductsResponse): TGetProductsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsFailed =>
        resolve({ error }),
  ),
};

export const getProductAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCT_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetProductResponse) => void): TGetProductRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TGetProductResponse): TGetProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TGetProductFailed =>
        resolve({ error }),
  ),
};
