import { TBodyCreateUserMealSchedule } from '@/services/api/user-meal-schedule-controller/types';

export type TParamsGetPackMeals = {
  page: number;
  pageSize: number;
};

export type TPackMealResponse = {
  id: string;
  title: string;
  description: string;
  image: string;
  point: number;
  prePrice: number;
  price: number;
  numberDate: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TGetPackMealsResponse = TPackMealResponse[];

export type TGetPackMealResponse = TPackMealResponse;

export type TBodyBuyPackMeal = TBodyCreateUserMealSchedule;
export type TBuyPackMealResponse = unknown;
