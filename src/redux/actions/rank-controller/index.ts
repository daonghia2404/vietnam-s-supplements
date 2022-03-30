import { createActionCreator } from 'deox';

import { ERankControllerAction } from '@/redux/actions/rank-controller/constants';
import {
  TGetBonusResponse,
  TGetHistoryPointsResponse,
  TParamsGetHistoryPoints,
} from '@/services/api/rank-controller/types';
import {
  TGetHistoryPointsRequest,
  TGetHistoryPointsSuccess,
  TGetHistoryPointsFailed,
  TGetBonusFailed,
  TGetBonusRequest,
  TGetBonusSuccess,
} from '@/redux/actions/rank-controller/types';

export const getHistoryPointsAction = {
  request: createActionCreator(
    ERankControllerAction.GET_HISTORY_POINTS_REQUEST,
    (resolve) =>
      (params: TParamsGetHistoryPoints, cb?: (response: TGetHistoryPointsResponse) => void): TGetHistoryPointsRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    ERankControllerAction.GET_HISTORY_POINTS_SUCCESS,
    (resolve) =>
      (response: TGetHistoryPointsResponse): TGetHistoryPointsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERankControllerAction.GET_HISTORY_POINTS_FAILED,
    (resolve) =>
      (error: unknown): TGetHistoryPointsFailed =>
        resolve({ error }),
  ),
};

export const getBonusAction = {
  request: createActionCreator(
    ERankControllerAction.GET_BONUS_REQUEST,
    (resolve) =>
      (cb?: (response: TGetBonusResponse) => void): TGetBonusRequest =>
        resolve({ cb }),
  ),
  success: createActionCreator(
    ERankControllerAction.GET_BONUS_SUCCESS,
    (resolve) =>
      (response: TGetBonusResponse): TGetBonusSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ERankControllerAction.GET_BONUS_FAILED,
    (resolve) =>
      (error: unknown): TGetBonusFailed =>
        resolve({ error }),
  ),
};
