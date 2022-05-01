import { createReducer } from 'deox';

import { TGetBannerResponse, TGetBannersResponse } from '@/services/api/banner-controller/types';
import { getBannerAction, getBannersAction } from '@/redux/actions/banner-controller';

export interface IUIState {
  banners?: TGetBannersResponse;
  banner?: TGetBannerResponse;
}
const initialState: IUIState = {
  banners: undefined,
  banner: undefined,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getBannersAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      banners: response,
    };
  }),
  handleAction(getBannerAction.success, (state, { payload }) => {
    const { response } = payload;
    return {
      ...state,
      banner: response,
    };
  }),
]);

export default reducer;
