import { TPaginateResponse } from '@/common/types';
import { EHistoryPrizeStatus, ETypeHistoryWheel } from '@/services/api/wheel-controller/enums';

export type TParamsGetWheelsUser = {
  page: number;
  pageSize: number;
};

export type TWheelResponse = {
  id: string;
  title: string;
  image: string;
  point: number;
  status: 0;
  outOfDate: string;
  createdAt: string;
  updatedAt: string;
  turnWheel: number;
};

export type TGetWheelsUserResponse = TPaginateResponse & {
  records: TWheelResponse[];
};

export type TGetWheelResponse = {
  result: {
    createdAt: string;
    id: string;
    image: string;
    listPrizes: TPrizesResponse[];
    outOfDate: string;
    point: number;
    status: 1;
    title: string;
    updatedAt: string;
  };
};

export type TPrizesResponse = {
  createdAt: string;
  description: string;
  idPrize: string;
  imagePrize: string;
  namePrize: string;
  outOfDate: string;
  percent: number;
  quantity: number;
  updatedAt: string;
  wheelId: string;
};

export type TParamsGetHistoryWheel = {
  page: number;
  pageSize: number;
  type?: ETypeHistoryWheel;
};

export type TGetHistoryWheelResponse = TPaginateResponse & {
  records: THistoryWheelResponse[];
};

export type THistoryWheelResponse = {
  createdAt: string;
  description: string;
  id: string;
  outOfDate: string;
  prize: string;
  status: EHistoryPrizeStatus;
  updatedAt: string;
  userId: string;
};

export type TStartWheelResponse = {
  message: string;
  prize: TPrizesResponse;
  turnOfUser: number;
};
