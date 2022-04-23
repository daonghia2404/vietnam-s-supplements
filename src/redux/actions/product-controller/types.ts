import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import {
  TParamsGetProductsFavorite,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
  TParamsGetProducts,
  TGetProductResponse,
} from '@/services/api/product-controller/types';

export type TGetProductsFavoriteRequest = {
  type: EProductControllerAction.GET_PRODUCTS_FAVORITE_REQUEST;
  payload: {
    params: TParamsGetProductsFavorite;
    cb?: (response: TGetProductsFavoriteResponse) => void;
  };
};

export type TGetProductsFavoriteSuccess = {
  type: EProductControllerAction.GET_PRODUCTS_FAVORITE_SUCCESS;
  payload: { response: TGetProductsFavoriteResponse };
};

export type TGetProductsFavoriteFailed = {
  type: EProductControllerAction.GET_PRODUCTS_FAVORITE_FAILED;
  payload: { error: unknown };
};

export type TGetProductsRequest = {
  type: EProductControllerAction.GET_PRODUCTS_REQUEST;
  payload: {
    params: TParamsGetProducts;
    cb?: (response: TGetProductsResponse) => void;
  };
};

export type TGetProductsSuccess = {
  type: EProductControllerAction.GET_PRODUCTS_SUCCESS;
  payload: { response: TGetProductsResponse };
};

export type TGetProductsFailed = {
  type: EProductControllerAction.GET_PRODUCTS_FAILED;
  payload: { error: unknown };
};

export type TGetProductsSearchRequest = {
  type: EProductControllerAction.GET_PRODUCTS_SEARCH_REQUEST;
  payload: {
    params: TParamsGetProducts;
    cb?: (response: TGetProductsResponse) => void;
  };
};

export type TGetProductsSearchSuccess = {
  type: EProductControllerAction.GET_PRODUCTS_SEARCH_SUCCESS;
  payload: { response: TGetProductsResponse };
};

export type TGetProductsSearchFailed = {
  type: EProductControllerAction.GET_PRODUCTS_SEARCH_FAILED;
  payload: { error: unknown };
};

export type TGetProductRequest = {
  type: EProductControllerAction.GET_PRODUCT_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetProductResponse) => void;
  };
};

export type TGetProductSuccess = {
  type: EProductControllerAction.GET_PRODUCT_SUCCESS;
  payload: { response: TGetProductResponse };
};

export type TGetProductFailed = {
  type: EProductControllerAction.GET_PRODUCT_FAILED;
  payload: { error: unknown };
};
