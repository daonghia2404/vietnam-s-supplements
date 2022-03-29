import { EHandbookControllerAction } from '@/redux/actions/handbook-controller/constants';
import {
  TGetHandbookResponse,
  TGetHandbooksResponse,
  TParamsGetHandbooks,
} from '@/services/api/handbook-controller/types';

export type TGetHandbooksRequest = {
  type: EHandbookControllerAction.GET_HANDBOOKS_REQUEST;
  payload: {
    params: TParamsGetHandbooks;
    cb?: (response: TGetHandbooksResponse) => void;
  };
};

export type TGetHandbooksSuccess = {
  type: EHandbookControllerAction.GET_HANDBOOKS_SUCCESS;
  payload: { response: TGetHandbooksResponse };
};

export type TGetHandbooksFailed = { type: EHandbookControllerAction.GET_HANDBOOKS_FAILED; payload: { error: unknown } };

export type TGetHandbookRequest = {
  type: EHandbookControllerAction.GET_HANDBOOK_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetHandbookResponse) => void;
  };
};

export type TGetHandbookSuccess = {
  type: EHandbookControllerAction.GET_HANDBOOK_SUCCESS;
  payload: { response: TGetHandbookResponse };
};

export type TGetHandbookFailed = { type: EHandbookControllerAction.GET_HANDBOOK_FAILED; payload: { error: unknown } };
