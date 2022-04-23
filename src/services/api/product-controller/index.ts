import Service from '@/services/api';
import {
  TParamsGetProductsFavorite,
  TGetProductsFavoriteResponse,
  TGetProductResponse,
  TGetProductsResponse,
  TParamsGetProducts,
} from '@/services/api/product-controller/types';

class Controller {
  getProductsFavorite = async (params: TParamsGetProductsFavorite): Promise<TGetProductsFavoriteResponse> => {
    const response = await Service.get('/product/favorite', { params });
    return response.data;
  };

  getProducts = async (params: TParamsGetProducts): Promise<TGetProductsResponse> => {
    const response = await Service.get('/product', { params });
    return response.data;
  };

  getProductsSearch = async (params: TParamsGetProducts): Promise<TGetProductsResponse> => {
    const response = await Service.get('/product/search', { params });
    return response.data;
  };

  getProduct = async (id: string): Promise<TGetProductResponse> => {
    const response = await Service.get(`/product/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
