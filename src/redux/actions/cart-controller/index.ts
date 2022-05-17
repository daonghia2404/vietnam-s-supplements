import { createActionCreator } from 'deox';

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
import {
  TAddCartRequest,
  TAddCartSuccess,
  TAddCartFailed,
  TPatchCartRequest,
  TPatchCartSuccess,
  TPatchCartFailed,
  TDeleteCartRequest,
  TDeleteCartSuccess,
  TDeleteCartFailed,
  TGetCartFailed,
  TGetCartRequest,
  TGetCartSuccess,
  TCreateCartFailed,
  TCreateCartRequest,
  TCreateCartSuccess,
} from '@/redux/actions/cart-controller/types';

export const getCartAction = {
  request: createActionCreator(
    ECartControllerAction.GET_CART_REQUEST,
    (resolve) =>
      (cb?: (response: TGetCartResponse) => void): TGetCartRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    ECartControllerAction.GET_CART_SUCCESS,
    (resolve) =>
      (response: TGetCartResponse): TGetCartSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECartControllerAction.GET_CART_FAILED,
    (resolve) =>
      (error: unknown): TGetCartFailed =>
        resolve({ error }),
  ),
};

export const addCartAction = {
  request: createActionCreator(
    ECartControllerAction.ADD_CART_REQUEST,
    (resolve) =>
      (body: TBodyAddCart, cb?: (response: TAddCartResponse) => void): TAddCartRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    ECartControllerAction.ADD_CART_SUCCESS,
    (resolve) =>
      (response: TAddCartResponse): TAddCartSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECartControllerAction.ADD_CART_FAILED,
    (resolve) =>
      (error: unknown): TAddCartFailed =>
        resolve({ error }),
  ),
};

export const createCartAction = {
  request: createActionCreator(
    ECartControllerAction.CREATE_CART_REQUEST,
    (resolve) =>
      (body: TCreateCartBody, cb?: (response: TCreateCartResponse) => void): TCreateCartRequest =>
        resolve({ body, cb }),
  ),
  success: createActionCreator(
    ECartControllerAction.CREATE_CART_SUCCESS,
    (resolve) =>
      (response: TCreateCartResponse): TCreateCartSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECartControllerAction.CREATE_CART_FAILED,
    (resolve) =>
      (error: unknown): TCreateCartFailed =>
        resolve({ error }),
  ),
};

export const patchCartAction = {
  request: createActionCreator(
    ECartControllerAction.PATCH_CART_REQUEST,
    (resolve) =>
      (id: string, body: TBodyPatchCart, cb?: (response: TPatchCartResponse) => void): TPatchCartRequest =>
        resolve({ id, body, cb }),
  ),
  success: createActionCreator(
    ECartControllerAction.PATCH_CART_SUCCESS,
    (resolve) =>
      (response: TPatchCartResponse): TPatchCartSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECartControllerAction.PATCH_CART_FAILED,
    (resolve) =>
      (error: unknown): TPatchCartFailed =>
        resolve({ error }),
  ),
};

export const deleteCartAction = {
  request: createActionCreator(
    ECartControllerAction.DELETE_CART_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TDeleteCartResponse) => void): TDeleteCartRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ECartControllerAction.DELETE_CART_SUCCESS,
    (resolve) =>
      (response: TDeleteCartResponse): TDeleteCartSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ECartControllerAction.DELETE_CART_FAILED,
    (resolve) =>
      (error: unknown): TDeleteCartFailed =>
        resolve({ error }),
  ),
};
