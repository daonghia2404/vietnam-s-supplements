import Service from '@/services/api';
import { TParamsGetWheelsUser, TGetWheelsUserResponse, TGetWheelResponse } from '@/services/api/wheel-controller/types';

class Controller {
  getWheelsUser = async (params: TParamsGetWheelsUser): Promise<TGetWheelsUserResponse> => {
    const response = await Service.get('/wheel/user', { params });
    return response.data;
  };

  getWheel = async (id: string): Promise<TGetWheelResponse> => {
    const response = await Service.get(`/wheel/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
