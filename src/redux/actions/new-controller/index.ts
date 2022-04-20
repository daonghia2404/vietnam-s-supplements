import { createActionCreator } from 'deox';

import { ENewControllerAction } from '@/redux/actions/new-controller/constants';
import { TGetNewResponse, TGetNewsResponse, TParamsGetNews } from '@/services/api/new-controller/types';
import {
  TGetNewsRequest,
  TGetNewsSuccess,
  TGetNewsFailed,
  TGetNewFailed,
  TGetNewRequest,
  TGetNewSuccess,
} from '@/redux/actions/new-controller/types';

export const getNewsAction = {
  request: createActionCreator(
    ENewControllerAction.GET_NEWS_REQUEST,
    (resolve) =>
      (params: TParamsGetNews, cb?: (response: TGetNewsResponse) => void): TGetNewsRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    ENewControllerAction.GET_NEWS_SUCCESS,
    (resolve) =>
      (response: TGetNewsResponse): TGetNewsSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ENewControllerAction.GET_NEWS_FAILED,
    (resolve) =>
      (error: unknown): TGetNewsFailed =>
        resolve({ error }),
  ),
};

export const getNewAction = {
  request: createActionCreator(
    ENewControllerAction.GET_NEW_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetNewResponse) => void): TGetNewRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ENewControllerAction.GET_NEW_SUCCESS,
    (resolve) =>
      (response: TGetNewResponse): TGetNewSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ENewControllerAction.GET_NEW_FAILED,
    (resolve) =>
      (error: unknown): TGetNewFailed =>
        resolve({ error }),
  ),
};
