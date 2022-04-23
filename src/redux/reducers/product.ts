import { createReducer } from 'deox';

import {
  getProductAction,
  getProductsAction,
  getProductsFavoriteAction,
  getProductsSearchAction,
} from '@/redux/actions';
import {
  TGetProductResponse,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
} from '@/services/api/product-controller/types';

export interface IUIState {
  productsFavorite?: TGetProductsFavoriteResponse;
  products?: TGetProductsResponse;
  productsSearch?: TGetProductsResponse;
  product?: TGetProductResponse;
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
]);

export default reducer;
