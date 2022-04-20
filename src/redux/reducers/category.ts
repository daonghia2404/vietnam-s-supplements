import { createReducer } from 'deox';

import { TGetCategoryResponse, TGetCategorysResponse } from '@/services/api/category-controller/types';
import { getCategoryAction, getCategorysAction } from '@/redux/actions/category-controller';

export interface IUIState {
  categorys?: TGetCategorysResponse;
  category?: TGetCategoryResponse;
}
const initialState: IUIState = {
  categorys: undefined,
  category: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getCategorysAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      categorys: response,
    };
  }),
  handleAction(getCategoryAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      category: response,
    };
  }),
]);

export default reducer;
