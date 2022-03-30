import { EAddressControllerAction } from '@/redux/actions/address-controller/constants';
import { TGetAddressResponse, TParamsGetAddress } from '@/services/api/address-controller/types';

export type TGetAddressRequest = {
  type: EAddressControllerAction.GET_ADDRESS_REQUEST;
  payload: {
    params: TParamsGetAddress;
    cb?: (response: TGetAddressResponse, params: TParamsGetAddress) => void;
  };
};

export type TGetAddressSuccess = {
  type: EAddressControllerAction.GET_ADDRESS_SUCCESS;
  payload: { response: TGetAddressResponse; params: TParamsGetAddress };
};

export type TGetAddressFailed = { type: EAddressControllerAction.GET_ADDRESS_FAILED; payload: { error: unknown } };
