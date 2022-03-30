import Service from '@/services/api';
import { TParamsGetOrders, TGetOrdersResponse, TGetOrderResponse } from '@/services/api/order-controller/types';

class Controller {
  getOrders = async (params: TParamsGetOrders): Promise<TGetOrdersResponse> => {
    const response = await Service.get('/order', { params });
    return response.data;
  };

  getOrder = async (id: string): Promise<TGetOrderResponse> => {
    const response = await Service.get(`/order/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
