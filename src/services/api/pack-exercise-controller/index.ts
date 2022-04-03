import Service from '@/services/api';
import {
  TParamsGetPackExercises,
  TGetPackExercisesResponse,
  TGetPackExerciseResponse,
  TGetPackExercisesBoughtResponse,
  TParamsGetPackExercisesBought,
  TBodyBuyPackExercise,
  TBuyPackExerciseResponse,
} from '@/services/api/pack-exercise-controller/types';

class Controller {
  getPackExercises = async (params: TParamsGetPackExercises): Promise<TGetPackExercisesResponse> => {
    const response = await Service.get('/pack-exercise', { params });
    return response.data;
  };

  getPackExercise = async (id: string): Promise<TGetPackExerciseResponse> => {
    const response = await Service.get(`/pack-exercise/${id}`);
    return response.data;
  };

  buyPackExercise = async (body: TBodyBuyPackExercise): Promise<TBuyPackExerciseResponse> => {
    const response = await Service.post(`/pack-exercise/buy-pack-exercise`, body);
    return response.data;
  };

  getPackExercisesBought = async (params: TParamsGetPackExercisesBought): Promise<TGetPackExercisesBoughtResponse> => {
    const response = await Service.get('/pack-exercise/list-bought', { params });
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
