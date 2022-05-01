import { ESex } from '@/common/enums';
import { TPaginateResponse } from '@/common/types';

export type TGetUserMealScheduleResponse = TUserMealScheduleResponse[];
export type TBodyCreateUserMealSchedule = {
  id: string;
  bodyLevel: number;
  priceFrom: number;
  priceTo: number;
  remindMealScheduleAtPhone?: boolean;
  remindVitaminScheduleAtPhone?: boolean;
};
export type TCreateUserMealScheduleResponse = unknown;

export type TBodyCreateUserInfoBody = {
  height: number;
  weight: number;
  gender: ESex;
  activityLevel: number;
  allergiesalleeOrDiet: number;
  bodyGoals: number;
  sportLevel: number;
};

export type TUserMealScheduleResponse = {
  createdSchedule: boolean;
  numberDate: number;
  createdAt: string;
  dateFrom: string;
  dateTo: string;
  id: string;
  packId: string;
  updatedAt: string;
  userId: string;
};

export type TCreateUserInfoBodyResponse = unknown;
export type TGetUserMealScheduleByDateResponse = unknown;

export type TGetUserMealScheduleFromTodayParams = {
  page: number;
  pageSize: number;
};
export type TGetUserMealScheduleFromTodayResponse = TPaginateResponse & {
  records: TScheduleMeal[];
};

export type TScheduleMeal = {
  createdAt: string;
  dateMeal: string;
  id: string;
  meal1: TMeal[];
  meal2: TMeal[];
  meal3: TMeal[];
  updatedAt: string;
  userId: string;
};

export type TMeal = {
  createdAt: string;
  dish: TDish;
  dishId: string;
  id: string;
  isHaveDish: boolean;
  meal: number;
  updatedAt: string;
  userMealScheduleId: string;
};

export type TDish = {
  active: boolean;
  createdAt: string;
  id: string;
  kcal: number;
  meal: number;
  name: string;
  processing: string;
  updatedAt: string;
  weight: number;
};
