import Service from '@/services/api';
import {
  TParamsGetPackPtOnlines,
  TGetPackPtOnlinesResponse,
  TGetPackPtOnlineResponse,
} from '@/services/api/pack-pt-online-controller/types';

class Controller {
  getPackPtOnlines = async (params: TParamsGetPackPtOnlines): Promise<TGetPackPtOnlinesResponse> => {
    const response = await Service.get('/pack-pt-online', { params });
    return response.data;
  };

  getPackPtOnline = async (id: string): Promise<TGetPackPtOnlineResponse> => {
    const response = await Service.get(`/pack-pt-online/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
