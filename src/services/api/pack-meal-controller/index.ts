import Service from '@/services/api';
import {
  TParamsGetPackMeals,
  TGetPackMealsResponse,
  TGetPackMealResponse,
  TBodyBuyPackMeal,
  TBuyPackMealResponse,
} from '@/services/api/pack-meal-controller/types';

class Controller {
  getPackMeals = async (params: TParamsGetPackMeals): Promise<TGetPackMealsResponse> => {
    const response = await Service.get('/pack-meal', { params });
    return response.data;
  };

  getPackMeal = async (id: string): Promise<TGetPackMealResponse> => {
    const response = await Service.get(`/pack-meal/${id}`);
    return response.data;
  };

  buyPackMeal = async (body: TBodyBuyPackMeal): Promise<TBuyPackMealResponse> => {
    const response = await Service.post(`/pack-meal/buy-pack-meal`, body);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
