import Service from '@/services/api';
import { TParamsGetProductsFavorite, TGetProductsFavoriteResponse } from '@/services/api/product-controller/types';

class Controller {
  getProductsFavorite = async (params: TParamsGetProductsFavorite): Promise<TGetProductsFavoriteResponse> => {
    const response = await Service.get('/product/favorite', { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
