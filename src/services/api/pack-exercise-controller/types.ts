import { TPaginateResponse } from '@/common/types';

export type TParamsGetPackExercises = {
  page: number;
  pageSize: number;
};

export type TParamsGetPackExercisesBought = {
  page: number;
  pageSize: number;
};

export type TPackExerciseResponse = {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
  prePrice: number;
  price: number;
  physicalCondition: 2;
  type: 2;
  createdAt: string;
  updatedAt: string;
};

export type TGetPackExercisesResponse = TPaginateResponse & {
  records: TPackExerciseResponse[];
};

export type TGetPackExercisesBoughtResponse = {
  id: string;
  packExercise: TPackExerciseResponse;
  createdAt: string;
  updatedAt: string;
}[];

export type TGetPackExerciseResponse = TPackExerciseResponse;
