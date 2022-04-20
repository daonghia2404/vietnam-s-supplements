import { createReducer } from 'deox';

import { getProductAction, getProductsAction, getProductsFavoriteAction } from '@/redux/actions';
import {
  TGetProductResponse,
  TGetProductsFavoriteResponse,
  TGetProductsResponse,
} from '@/services/api/product-controller/types';

export interface IUIState {
  productsFavorite?: TGetProductsFavoriteResponse;
  products?: TGetProductsResponse;
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
  handleAction(getProductAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      product: response,
    };
  }),
]);

export default reducer;
