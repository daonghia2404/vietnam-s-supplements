import Service from '@/services/api';
import {
  TParamsGetHandbooks,
  TGetHandbooksResponse,
  TGetHandbookResponse,
} from '@/services/api/handbook-controller/types';

class Controller {
  getHandbooks = async (params: TParamsGetHandbooks): Promise<TGetHandbooksResponse> => {
    const response = await Service.get('/handbook', { params });
    return response.data;
  };

  getHandbook = async (id: string): Promise<TGetHandbookResponse> => {
    const response = await Service.get(`/handbook/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
