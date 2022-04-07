import Service from '@/services/api';
import {
  TParamsGetPaymentHistorys,
  TGetPaymentHistorysResponse,
  TGetPaymentHistoryResponse,
  TBodyCreatePayment,
  TCreatePaymentResponse,
  TReturnPaymentResponse,
  TParamsReturnPayment,
} from '@/services/api/payment-controller/types';

class Controller {
  getPaymentHistorys = async (params: TParamsGetPaymentHistorys): Promise<TGetPaymentHistorysResponse> => {
    const response = await Service.get('/auth/history-recharge', { params });
    return response.data;
  };

  getPaymentHistory = async (id: string): Promise<TGetPaymentHistoryResponse> => {
    const response = await Service.get(`/payment/appotapay/history/${id}`);
    return response.data;
  };

  createPayment = async (body: TBodyCreatePayment): Promise<TCreatePaymentResponse> => {
    const response = await Service.post(`/payment/appotapay/create-payment`, body);
    return response.data;
  };

  returnPayment = async (params: TParamsReturnPayment): Promise<TReturnPaymentResponse> => {
    const response = await Service.get(`/payment/appotapay/return-url`, { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
