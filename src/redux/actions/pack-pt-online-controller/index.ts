import { createActionCreator } from 'deox';

import { EPackPtOnlineControllerAction } from '@/redux/actions/pack-pt-online-controller/constants';
import {
  TBuyPackPtOnlineResponse,
  TGetPackPtOnlineResponse,
  TGetPackPtOnlinesResponse,
  TParamsGetPackPtOnlines,
} from '@/services/api/pack-pt-online-controller/types';
import {
  TGetPackPtOnlinesRequest,
  TGetPackPtOnlinesSuccess,
  TGetPackPtOnlinesFailed,
  TGetPackPtOnlineFailed,
  TGetPackPtOnlineRequest,
  TGetPackPtOnlineSuccess,
  TBuyPackPtOnlineFailed,
  TBuyPackPtOnlineRequest,
  TBuyPackPtOnlineSuccess,
} from '@/redux/actions/pack-pt-online-controller/types';

export const getPackPtOnlinesAction = {
  request: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_REQUEST,
    (resolve) =>
      (params: TParamsGetPackPtOnlines, cb?: (response: TGetPackPtOnlinesResponse) => void): TGetPackPtOnlinesRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_SUCCESS,
    (resolve) =>
      (response: TGetPackPtOnlinesResponse): TGetPackPtOnlinesSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINES_FAILED,
    (resolve) =>
      (error: unknown): TGetPackPtOnlinesFailed =>
        resolve({ error }),
  ),
};

export const getPackPtOnlineAction = {
  request: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetPackPtOnlineResponse) => void): TGetPackPtOnlineRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_SUCCESS,
    (resolve) =>
      (response: TGetPackPtOnlineResponse): TGetPackPtOnlineSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackPtOnlineControllerAction.GET_PACK_PT_ONLINE_FAILED,
    (resolve) =>
      (error: unknown): TGetPackPtOnlineFailed =>
        resolve({ error }),
  ),
};

export const buyPackPtOnlineAction = {
  request: createActionCreator(
    EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TBuyPackPtOnlineResponse) => void, failedCb?: () => void): TBuyPackPtOnlineRequest =>
        resolve({ id, cb, failedCb }),
  ),
  success: createActionCreator(
    EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_SUCCESS,
    (resolve) =>
      (response: TBuyPackPtOnlineResponse): TBuyPackPtOnlineSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EPackPtOnlineControllerAction.BUY_PACK_PT_ONLINE_FAILED,
    (resolve) =>
      (error: unknown): TBuyPackPtOnlineFailed =>
        resolve({ error }),
  ),
};
