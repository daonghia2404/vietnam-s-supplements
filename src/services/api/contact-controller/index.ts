import Service from '@/services/api';
import {
  TBodyPostAgent,
  TBodyPostContact,
  TPostAgentResponse,
  TPostContactResponse,
} from '@/services/api/contact-controller/types';

class Controller {
  postContact = async (body: TBodyPostContact): Promise<TPostContactResponse> => {
    const response = await Service.post('/contact', body);
    return response.data;
  };

  postAgent = async (body: TBodyPostAgent): Promise<TPostAgentResponse> => {
    const response = await Service.post('/agent', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
