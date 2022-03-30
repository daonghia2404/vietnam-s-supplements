import Service from '@/services/api';
import {
  TGetBonusResponse,
  TParamsGetHistoryPoints,
  TGetHistoryPointsResponse,
} from '@/services/api/rank-controller/types';

class Controller {
  getBonus = async (): Promise<TGetBonusResponse> => {
    const response = await Service.get('/user/bonus');
    return response.data;
  };

  getHistoryPoints = async (params: TParamsGetHistoryPoints): Promise<TGetHistoryPointsResponse> => {
    const response = await Service.get(`/history-point`, { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
