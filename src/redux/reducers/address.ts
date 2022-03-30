import { createReducer } from 'deox';

import { TAddressResponse } from '@/services/api/address-controller/types';
import { getAddressAction } from '@/redux/actions/address-controller';
import { TSelectOption } from '@/components/Select';

export interface IUIState {
  city: TSelectOption[];
  district: TSelectOption[];
  commune: TSelectOption[];
}
const initialState: IUIState = {
  city: [],
  district: [],
  commune: [],
};

const parseToOptions = (data: TAddressResponse[]): TSelectOption[] =>
  data.map((item) => ({ label: item.name_with_type, value: item.code }));

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getAddressAction.success, (state, { payload }) => {
    const { response, params } = payload;

    switch (true) {
      case !params.cityCode && !params.districtCode:
        return { ...state, city: parseToOptions(response), district: [], commune: [] };
      case params.cityCode && !params.districtCode:
        return { ...state, district: parseToOptions(response), commune: [] };
      case Boolean(params.cityCode && params.districtCode):
        return { ...state, commune: parseToOptions(response) };
      default:
        return state;
    }
  }),
]);

export default reducer;
