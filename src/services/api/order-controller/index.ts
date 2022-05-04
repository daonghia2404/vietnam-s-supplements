import Service from '@/services/api';
import {
  TParamsGetOrders,
  TGetOrdersResponse,
  TGetOrderResponse,
  TCreateOrderBody,
  TCreateOrderResponse,
  TCancelOrderResponse,
} from '@/services/api/order-controller/types';

class Controller {
  getOrders = async (params: TParamsGetOrders): Promise<TGetOrdersResponse> => {
    const response = await Service.get('/order', { params });
    return response.data;
  };

  getOrder = async (id: string): Promise<TGetOrderResponse> => {
    const response = await Service.get(`/order/${id}`);
    return response.data;
  };

  createOrder = async (body: TCreateOrderBody): Promise<TCreateOrderResponse> => {
    const response = await Service.post(`/order/create-oder`, body);
    return response.data;
  };

  cancelOrder = async (id: string): Promise<TCancelOrderResponse> => {
    const response = await Service.patch(`/order/cancel/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
