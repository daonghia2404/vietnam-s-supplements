import Service from '@/services/api';
import { TGetBannersResponse, TGetBannerResponse } from '@/services/api/banner-controller/types';

class Controller {
  getBanners = async (): Promise<TGetBannersResponse> => {
    const response = await Service.get('/banner');
    return response.data;
  };

  getBanner = async (id: string): Promise<TGetBannerResponse> => {
    const response = await Service.get(`/banner/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
