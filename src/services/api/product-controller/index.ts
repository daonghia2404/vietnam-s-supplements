import Service from '@/services/api';
import {
  TParamsGetProductsFavorite,
  TGetProductsFavoriteResponse,
  TGetProductResponse,
  TGetProductsResponse,
  TParamsGetProducts,
  TLikeProductResponse,
  TUnlikeProductResponse,
  TIsFavoriteProductResponse,
  TGetProductsSpecialResponse,
  TParamsGetProductsSpecial,
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

  getProductsSpecial = async (params: TParamsGetProductsSpecial): Promise<TGetProductsSpecialResponse> => {
    const response = await Service.get('/product/special', { params });
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

  likeProduct = async (id: string): Promise<TLikeProductResponse> => {
    const response = await Service.get(`/product/favorite/like/${id}`);
    return response.data;
  };

  unlikeProduct = async (id: string): Promise<TUnlikeProductResponse> => {
    const response = await Service.get(`/product/favorite/unlike/${id}`);
    return response.data;
  };

  isFavoriteProduct = async (id: string): Promise<TIsFavoriteProductResponse> => {
    const response = await Service.get(`/product/is-favorite/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
