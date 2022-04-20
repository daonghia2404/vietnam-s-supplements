import { ENewControllerAction } from '@/redux/actions/new-controller/constants';
import { TGetNewResponse, TGetNewsResponse, TParamsGetNews } from '@/services/api/new-controller/types';

export type TGetNewsRequest = {
  type: ENewControllerAction.GET_NEWS_REQUEST;
  payload: {
    params: TParamsGetNews;
    cb?: (response: TGetNewsResponse) => void;
  };
};

export type TGetNewsSuccess = {
  type: ENewControllerAction.GET_NEWS_SUCCESS;
  payload: { response: TGetNewsResponse };
};

export type TGetNewsFailed = { type: ENewControllerAction.GET_NEWS_FAILED; payload: { error: unknown } };

export type TGetNewRequest = {
  type: ENewControllerAction.GET_NEW_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetNewResponse) => void;
  };
};

export type TGetNewSuccess = {
  type: ENewControllerAction.GET_NEW_SUCCESS;
  payload: { response: TGetNewResponse };
};

export type TGetNewFailed = { type: ENewControllerAction.GET_NEW_FAILED; payload: { error: unknown } };
