import { ERankControllerAction } from '@/redux/actions/rank-controller/constants';
import {
  TParamsGetHistoryPoints,
  TGetHistoryPointsResponse,
  TGetBonusResponse,
} from '@/services/api/rank-controller/types';

export type TGetHistoryPointsRequest = {
  type: ERankControllerAction.GET_HISTORY_POINTS_REQUEST;
  payload: {
    params: TParamsGetHistoryPoints;
    cb?: (response: TGetHistoryPointsResponse) => void;
  };
};

export type TGetHistoryPointsSuccess = {
  type: ERankControllerAction.GET_HISTORY_POINTS_SUCCESS;
  payload: { response: TGetHistoryPointsResponse };
};

export type TGetHistoryPointsFailed = {
  type: ERankControllerAction.GET_HISTORY_POINTS_FAILED;
  payload: { error: unknown };
};

export type TGetBonusRequest = {
  type: ERankControllerAction.GET_BONUS_REQUEST;
  payload: {
    cb?: (response: TGetBonusResponse) => void;
  };
};

export type TGetBonusSuccess = {
  type: ERankControllerAction.GET_BONUS_SUCCESS;
  payload: { response: TGetBonusResponse };
};

export type TGetBonusFailed = { type: ERankControllerAction.GET_BONUS_FAILED; payload: { error: unknown } };
