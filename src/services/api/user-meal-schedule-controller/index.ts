import Service from '@/services/api';
import {
  TBodyCreateUserInfoBody,
  TBodyCreateUserMealSchedule,
  TCreateUserInfoBodyResponse,
  TCreateUserMealScheduleResponse,
  TGetUserMealScheduleByDateResponse,
  TGetUserMealScheduleResponse,
} from '@/services/api/user-meal-schedule-controller/types';

class Controller {
  getUserMealSchedule = async (): Promise<TGetUserMealScheduleResponse> => {
    const response = await Service.get(`/user-meal-schedule`);
    return response.data;
  };

  createUserMealSchedule = async (body: TBodyCreateUserMealSchedule): Promise<TCreateUserMealScheduleResponse> => {
    const response = await Service.post(`/user-meal-schedule/create`, body);
    return response.data;
  };

  createUserInfoBody = async (body: TBodyCreateUserInfoBody): Promise<TCreateUserInfoBodyResponse> => {
    const response = await Service.post(`/info-body`, body);
    return response.data;
  };

  getUserMealScheduleByDate = async (date: string): Promise<TGetUserMealScheduleByDateResponse> => {
    const response = await Service.get(`/user-meal-schedule/${date}`);
    return response.data;
  };
}

const ControllerInstance = new Controller();

export default ControllerInstance;
