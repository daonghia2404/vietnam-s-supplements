import Service from '@/services/api';
import {
  TGetTurnWheelUserResponse,
  TBuyTurnWheelResponse,
  TShareSocialTurnWheelResponse,
} from '@/services/api/turn-wheel-controller/types';

class Controller {
  getTurnWheelUser = async (id: string): Promise<TGetTurnWheelUserResponse> => {
    const response = await Service.get(`/turn-wheel/user/${id}`);
    return response.data;
  };

  buyTurnWheel = async (id: string): Promise<TBuyTurnWheelResponse> => {
    const response = await Service.post(`/turn-wheel/buy/${id}`);
    return response.data;
  };

  shareSocialTurnWheel = async (id: string): Promise<TShareSocialTurnWheelResponse> => {
    const response = await Service.post(`/turn-wheel/share-social/${id}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
