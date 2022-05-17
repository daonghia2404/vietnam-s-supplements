import Service from '@/services/api';
import {
  TGetCartResponse,
  TBodyAddCart,
  TAddCartResponse,
  TPatchCartResponse,
  TDeleteCartResponse,
  TBodyPatchCart,
  TCreateCartResponse,
  TCreateCartBody,
} from '@/services/api/cart-controller/types';

class Controller {
  getCart = async (): Promise<TGetCartResponse> => {
    const response = await Service.get('/cart');
    return response.data;
  };

  createCart = async (body: TCreateCartBody): Promise<TCreateCartResponse> => {
    const response = await Service.post('/cart', body);
    return response.data;
  };

  addCart = async (body: TBodyAddCart): Promise<TAddCartResponse> => {
    const response = await Service.post(`/cart/add-item`, body);
    return response.data;
  };

  patchCart = async (id: string, body: TBodyPatchCart): Promise<TPatchCartResponse> => {
    const response = await Service.patch(`/cart/item/${id}`, body);
    return response.data;
  };

  deleteCart = async (id: string): Promise<TDeleteCartResponse> => {
    const response = await Service.delete(`/cart/item`, { params: { id } });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
