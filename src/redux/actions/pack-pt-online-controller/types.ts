import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';
import {
  TBuyPackPtOnlineResponse,
  TGetPackPtOnlineResponse,
  TGetPackPtOnlinesResponse,
  TParamsGetPackPtOnlines,
} from '@/services/api/pack-pt-online-controller/types';

export type TGetPackPtOnlinesRequest = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_REQUEST;
  payload: {
    params: TParamsGetPackPtOnlines;
    cb?: (response: TGetPackPtOnlinesResponse) => void;
  };
};

export type TGetPackPtOnlinesSuccess = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_SUCCESS;
  payload: { response: TGetPackPtOnlinesResponse };
};

export type TGetPackPtOnlinesFailed = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_FAILED;
  payload: { error: unknown };
};

export type TGetPackPtOnlineRequest = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetPackPtOnlineResponse) => void;
  };
};

export type TGetPackPtOnlineSuccess = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_SUCCESS;
  payload: { response: TGetPackPtOnlineResponse };
};

export type TGetPackPtOnlineFailed = {
  type: EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_FAILED;
  payload: { error: unknown };
};

export type TBuyPackPtOnlineRequest = {
  type: EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_REQUEST;
  payload: {
    id: string;
    cb?: (response: TBuyPackPtOnlineResponse) => void;
    failedCb?: () => void;
  };
};

export type TBuyPackPtOnlineSuccess = {
  type: EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_SUCCESS;
  payload: { response: TBuyPackPtOnlineResponse };
};

export type TBuyPackPtOnlineFailed = {
  type: EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_FAILED;
  payload: { error: unknown };
};
