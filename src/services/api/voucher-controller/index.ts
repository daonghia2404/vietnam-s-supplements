import Service from '@/services/api';
import { TParamsGetVouchers, TGetVouchersResponse, TGetVoucherResponse } from '@/services/api/voucher-controller/types';

class Controller {
  getVouchers = async (params: TParamsGetVouchers): Promise<TGetVouchersResponse> => {
    const response = await Service.get('/voucher/user', { params });
    return response.data;
  };

  getVoucher = async (id: string): Promise<TGetVoucherResponse> => {
    const response = await Service.get(`/voucher/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
