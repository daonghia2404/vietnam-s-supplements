import { createActionCreator } from 'deox';

import { EAddressControllerAction } from '@/redux/actions/address-controller/constants';
import { TGetAddressResponse, TParamsGetAddress } from '@/services/api/address-controller/types';
import { TGetAddressRequest, TGetAddressSuccess, TGetAddressFailed } from '@/redux/actions/address-controller/types';

export const getAddressAction = {
  request: createActionCreator(
    EAddressControllerAction.GET_ADDRESS_REQUEST,
    (resolve) =>
      (
        params: TParamsGetAddress,
        cb?: (response: TGetAddressResponse, params: TParamsGetAddress) => void,
      ): TGetAddressRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EAddressControllerAction.GET_ADDRESS_SUCCESS,
    (resolve) =>
      (response: TGetAddressResponse, params: TParamsGetAddress): TGetAddressSuccess =>
        resolve({ response, params }),
  ),
  failure: createActionCreator(
    EAddressControllerAction.GET_ADDRESS_FAILED,
    (resolve) =>
      (error: unknown): TGetAddressFailed =>
        resolve({ error }),
  ),
};
