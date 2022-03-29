import { createActionCreator } from 'deox';

import { EHandbookControllerAction } from '@/redux/actions/handbook-controller/constants';
import {
  TGetHandbookResponse,
  TGetHandbooksResponse,
  TParamsGetHandbooks,
} from '@/services/api/handbook-controller/types';
import {
  TGetHandbooksRequest,
  TGetHandbooksSuccess,
  TGetHandbooksFailed,
  TGetHandbookFailed,
  TGetHandbookRequest,
  TGetHandbookSuccess,
} from '@/redux/actions/handbook-controller/types';

export const getHandbooksAction = {
  request: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOKS_REQUEST,
    (resolve) =>
      (params: TParamsGetHandbooks, cb?: (response: TGetHandbooksResponse) => void): TGetHandbooksRequest =>
        resolve({ params, cb }),
  ),
  success: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOKS_SUCCESS,
    (resolve) =>
      (response: TGetHandbooksResponse): TGetHandbooksSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOKS_FAILED,
    (resolve) =>
      (error: unknown): TGetHandbooksFailed =>
        resolve({ error }),
  ),
};

export const getHandbookAction = {
  request: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOK_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetHandbookResponse) => void): TGetHandbookRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOK_SUCCESS,
    (resolve) =>
      (response: TGetHandbookResponse): TGetHandbookSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    EHandbookControllerAction.GET_HANDBOOK_FAILED,
    (resolve) =>
      (error: unknown): TGetHandbookFailed =>
        resolve({ error }),
  ),
};
