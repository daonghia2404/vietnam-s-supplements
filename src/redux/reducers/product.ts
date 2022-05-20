import { createReducer } from 'deox';

import {
  getProductAction,
  getProductsAction,
  getProductsAllAction,
  getProductsFavoriteAction,
  getProductsSearchAction,
  getProductsSpecialAction,
  isFavoriteProductAction,
} from '@/redux/actions';
import {
  TGetProductResponse,
  TGetProductsAllResponse,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
  TGetProductsSpecialResponse,
  TIsFavoriteProductResponse,
} from '@/services/api/product-controller/types';

export interface IUIState {
  productsFavorite?: TGetProductsFavoriteResponse;
  products?: TGetProductsResponse;
  productsSpecial?: TGetProductsSpecialResponse;
  productsSearch?: TGetProductsResponse;
  productsAll?: TGetProductsAllResponse;
  product?: TGetProductResponse;
  isFavoriteProduct?: TIsFavoriteProductResponse;
}
const initialState: IUIState = {
  productsFavorite: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getProductsFavoriteAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      productsFavorite: response,
    };
  }),
  handleAction(getProductsAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      products: response,
    };
  }),
  handleAction(getProductsSpecialAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      productsSpecial: response,
    };
  }),
  handleAction(getProductsSearchAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      productsSearch: response,
    };
  }),
  handleAction(getProductAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      product: response,
    };
  }),
  handleAction(isFavoriteProductAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      isFavoriteProduct: response,
    };
  }),
  handleAction(getProductsAllAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      productsAll: response,
    };
  }),
]);

export default reducer;
