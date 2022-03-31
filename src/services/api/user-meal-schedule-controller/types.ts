import { ESex } from '@/common/enums';

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
  id: string;
  userId: string;
  dateMeal: string;
  createdAt: string;
  updatedAt: string;
};

export type TCreateUserInfoBodyResponse = unknown;
export type TGetUserMealScheduleByDateResponse = unknown;
