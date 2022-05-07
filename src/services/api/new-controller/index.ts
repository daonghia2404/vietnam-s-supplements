import Service from '@/services/api';
import { TParamsGetNews, TGetNewsResponse, TGetNewResponse } from '@/services/api/new-controller/types';

class Controller {
  getNews = async (params: TParamsGetNews): Promise<TGetNewsResponse> => {
    const response = await Service.get('/news', { params });
    return response.data;
  };

  getNew = async (id: string): Promise<TGetNewResponse> => {
    const response = await Service.get(`/news/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
