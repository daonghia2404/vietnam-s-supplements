import { ETurnWheelControllerAction } from '@/redux/actions/turn-wheel-controller/constants';
import {
  TBuyTurnWheelResponse,
  TGetTurnWheelUserResponse,
  TShareSocialTurnWheelResponse,
} from '@/services/api/turn-wheel-controller/types';

export type TGetTurnWheelUserRequest = {
  type: ETurnWheelControllerAction.GET_TURN_WHEEL_USER_REQUEST;
  payload: {
    id: string;
    cb?: (response: TGetTurnWheelUserResponse) => void;
  };
};

export type TGetTurnWheelUserSuccess = {
  type: ETurnWheelControllerAction.GET_TURN_WHEEL_USER_SUCCESS;
  payload: { response: TGetTurnWheelUserResponse };
};

export type TGetTurnWheelUserFailed = {
  type: ETurnWheelControllerAction.GET_TURN_WHEEL_USER_FAILED;
  payload: { error: unknown };
};

export type TBuyTurnWheelRequest = {
  type: ETurnWheelControllerAction.BUY_TURN_WHEEL_REQUEST;
  payload: {
    id: string;
    cb?: (response: TBuyTurnWheelResponse) => void;
  };
};

export type TBuyTurnWheelSuccess = {
  type: ETurnWheelControllerAction.BUY_TURN_WHEEL_SUCCESS;
  payload: { response: TBuyTurnWheelResponse };
};

export type TBuyTurnWheelFailed = {
  type: ETurnWheelControllerAction.BUY_TURN_WHEEL_FAILED;
  payload: { error: unknown };
};

export type TShareSocialTurnWheelRequest = {
  type: ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_REQUEST;
  payload: {
    id: string;
    cb?: (response: TShareSocialTurnWheelResponse) => void;
  };
};

export type TShareSocialTurnWheelSuccess = {
  type: ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_SUCCESS;
  payload: { response: TShareSocialTurnWheelResponse };
};

export type TShareSocialTurnWheelFailed = {
  type: ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_FAILED;
  payload: { error: unknown };
};
