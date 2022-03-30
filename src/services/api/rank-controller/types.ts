import { TPaginateResponse } from '@/common/types';

export type TParamsGetHistoryPoints = {
  page: number;
  pageSize: number;
};

export type TGetBonusResponse = {
  currentPoint: number;
  nextLevelPoint: number;
  rank: number;
  nextLevelBonus: {
    gradePoint: number;
    message: string;
    money: number;
    rank: number;
  }[];
  totalPoint: number;
};

export type TGetHistoryPointsResponse = TPaginateResponse & {
  records: THistoryPoint[];
};

export type THistoryPoint = {
  id: number;
  numberPoint: number;
  userId: string;
  type: string;
  message: string;
  createdAt: string;
  updatedAt: string;
};
