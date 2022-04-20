import Service from '@/services/api';
import {
  TParamsGetCategorys,
  TGetCategorysResponse,
  TGetCategoryResponse,
} from '@/services/api/category-controller/types';

class Controller {
  getCategorys = async (params: TParamsGetCategorys): Promise<TGetCategorysResponse> => {
    const response = await Service.get('/category', { params });
    return response.data;
  };

  getCategory = async (id: string): Promise<TGetCategoryResponse> => {
    const response = await Service.get(`/category/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
