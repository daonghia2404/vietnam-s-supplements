import Service from '@/services/api';
import {
  TParamsGetWheelsUser,
  TGetWheelsUserResponse,
  TGetWheelResponse,
  TParamsGetHistoryWheel,
  TGetHistoryWheelResponse,
  TStartWheelResponse,
} from '@/services/api/wheel-controller/types';

class Controller {
  getWheelsUser = async (params: TParamsGetWheelsUser): Promise<TGetWheelsUserResponse> => {
    const response = await Service.get('/wheel/user', { params });
    return response.data;
  };

  getWheel = async (id: string): Promise<TGetWheelResponse> => {
    const response = await Service.get(`/wheel/${id}`);
    return response.data;
  };

  getHistoryWheel = async (params: TParamsGetHistoryWheel): Promise<TGetHistoryWheelResponse> => {
    const response = await Service.get(`/history-wheel`, { params });
    return response.data;
  };

  startWheel = async (id: string): Promise<TStartWheelResponse> => {
    const response = await Service.get(`/wheel/${id}/start-wheel`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
