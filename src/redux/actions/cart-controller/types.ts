import { ECartControllerAction } from '@/redux/actions/cart-controller/constants';
import {
  TAddCartResponse,
  TBodyAddCart,
  TBodyPatchCart,
  TCreateCartBody,
  TCreateCartResponse,
  TDeleteCartResponse,
  TGetCartResponse,
  TPatchCartResponse,
} from '@/services/api/cart-controller/types';

export type TGetCartRequest = {
  type: ECartControllerAction.GET_CART_REQUEST;
  payload: {
    cb?: (response: TGetCartResponse) => void;
  };
};

export type TGetCartSuccess = {
  type: ECartControllerAction.GET_CART_SUCCESS;
  payload: { response: TGetCartResponse };
};

export type TGetCartFailed = { type: ECartControllerAction.GET_CART_FAILED; payload: { error: unknown } };

export type TAddCartRequest = {
  type: ECartControllerAction.ADD_CART_REQUEST;
  payload: {
    body: TBodyAddCart;
    cb?: (response: TAddCartResponse) => void;
  };
};

export type TAddCartSuccess = {
  type: ECartControllerAction.ADD_CART_SUCCESS;
  payload: { response: TAddCartResponse };
};

export type TAddCartFailed = { type: ECartControllerAction.ADD_CART_FAILED; payload: { error: unknown } };

export type TCreateCartRequest = {
  type: ECartControllerAction.CREATE_CART_REQUEST;
  payload: {
    body: TCreateCartBody;
    cb?: (response: TCreateCartResponse) => void;
  };
};

export type TCreateCartSuccess = {
  type: ECartControllerAction.CREATE_CART_SUCCESS;
  payload: { response: TCreateCartResponse };
};

export type TCreateCartFailed = { type: ECartControllerAction.CREATE_CART_FAILED; payload: { error: unknown } };

export type TPatchCartRequest = {
  type: ECartControllerAction.PATCH_CART_REQUEST;
  payload: {
    id: string;
    body: TBodyPatchCart;
    cb?: (response: TPatchCartResponse) => void;
  };
};

export type TPatchCartSuccess = {
  type: ECartControllerAction.PATCH_CART_SUCCESS;
  payload: { response: TPatchCartResponse };
};

export type TPatchCartFailed = { type: ECartControllerAction.PATCH_CART_FAILED; payload: { error: unknown } };

export type TDeleteCartRequest = {
  type: ECartControllerAction.DELETE_CART_REQUEST;
  payload: {
    id: string;
    cb?: (response: TDeleteCartResponse) => void;
  };
};

export type TDeleteCartSuccess = {
  type: ECartControllerAction.DELETE_CART_SUCCESS;
  payload: { response: TDeleteCartResponse };
};

export type TDeleteCartFailed = { type: ECartControllerAction.DELETE_CART_FAILED; payload: { error: unknown } };
