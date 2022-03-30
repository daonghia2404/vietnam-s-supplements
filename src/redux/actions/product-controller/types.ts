import { EProductControllerAction } from '@/redux/actions/product-controller/constants';
import { TParamsGetProductsFavorite, TGetProductsFavoriteResponse } from '@/services/api/product-controller/types';

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
