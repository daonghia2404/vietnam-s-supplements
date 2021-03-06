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
  TGetProductsSearchFailed,
  TGetProductsSearchRequest,
  TGetProductsSearchSuccess,
  TLikeProductFailed,
  TLikeProductRequest,
  TLikeProductSuccess,
  TUnlikeProductFailed,
  TUnlikeProductRequest,
  TUnlikeProductSuccess,
  TIsFavoriteProductFailed,
  TIsFavoriteProductRequest,
  TIsFavoriteProductSuccess,
  TGetProductsSpecialFailed,
  TGetProductsSpecialRequest,
  TGetProductsSpecialSuccess,
  TGetProductsAllFailed,
  TGetProductsAllRequest,
  TGetProductsAllSuccess,
} from '@/redux/actions/product-controller/types';
import {
  TParamsGetProductsFavorite,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
  TParamsGetProducts,
  TGetProductResponse,
  TLikeProductResponse,
  TUnlikeProductResponse,
  TIsFavoriteProductResponse,
  TGetProductsSpecialResponse,
  TParamsGetProductsSpecial,
  TGetProductsAllResponse,
  TParamsGetProductsAll,
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

export const getProductsAllAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_ALL_REQUEST,
    (resolve) =>
      (params: TParamsGetProductsAll, cb?: (response: TGetProductsAllResponse) => void): TGetProductsAllRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_ALL_SUCCESS,
    (resolve) =>
      (response: TGetProductsAllResponse): TGetProductsAllSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_ALL_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsAllFailed =>
        resolve({ error }),
  ),
};

export const getProductsSpecialAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SPECIAL_REQUEST,
    (resolve) =>
      (
        params: TParamsGetProductsSpecial,
        cb?: (response: TGetProductsSpecialResponse) => void,
      ): TGetProductsSpecialRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SPECIAL_SUCCESS,
    (resolve) =>
      (response: TGetProductsSpecialResponse): TGetProductsSpecialSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SPECIAL_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsSpecialFailed =>
        resolve({ error }),
  ),
};

export const getProductsSearchAction = {
  request: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SEARCH_REQUEST,
    (resolve) =>
      (params: TParamsGetProducts, cb?: (response: TGetProductsResponse) => void): TGetProductsSearchRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SEARCH_SUCCESS,
    (resolve) =>
      (response: TGetProductsResponse): TGetProductsSearchSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.GET_PRODUCTS_SEARCH_FAILED,
    (resolve) =>
      (error: unknown): TGetProductsSearchFailed =>
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

export const likeProductAction = {
  request: createActionCreator(
    EProductControllerAction.LIKE_PRODUCT_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TLikeProductResponse) => void): TLikeProductRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.LIKE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TLikeProductResponse): TLikeProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.LIKE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TLikeProductFailed =>
        resolve({ error }),
  ),
};

export const unlikeProductAction = {
  request: createActionCreator(
    EProductControllerAction.UNLIKE_PRODUCT_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TUnlikeProductResponse) => void): TUnlikeProductRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.UNLIKE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TUnlikeProductResponse): TUnlikeProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.UNLIKE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TUnlikeProductFailed =>
        resolve({ error }),
  ),
};

export const isFavoriteProductAction = {
  request: createActionCreator(
    EProductControllerAction.IS_FAVORITE_PRODUCT_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TIsFavoriteProductResponse) => void): TIsFavoriteProductRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EProductControllerAction.IS_FAVORITE_PRODUCT_SUCCESS,
    (resolve) =>
      (response: TIsFavoriteProductResponse): TIsFavoriteProductSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EProductControllerAction.IS_FAVORITE_PRODUCT_FAILED,
    (resolve) =>
      (error: unknown): TIsFavoriteProductFailed =>
        resolve({ error }),
  ),
};
