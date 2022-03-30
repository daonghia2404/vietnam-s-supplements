import Service from '@/services/api';
import { TUploadResponse } from '@/services/api/upload-controller/types';

class Controller {
  upload = async (body: FormData): Promise<TUploadResponse> => {
    const response = await Service.post('/upload', body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
