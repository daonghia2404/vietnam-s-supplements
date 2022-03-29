import Service from '@/services/api';
import { TParamsGetAddress, TGetAddressResponse } from '@/services/api/address-controller/types';

class Controller {
  getAddress = async (params: TParamsGetAddress): Promise<TGetAddressResponse> => {
    const response = await Service.get('/address', { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
