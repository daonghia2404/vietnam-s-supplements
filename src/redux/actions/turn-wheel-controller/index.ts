import { createActionCreator } from 'deox';

import { ETurnWheelControllerAction } from '@/redux/actions/turn-wheel-controller/constants';
import {
  TBuyTurnWheelResponse,
  TGetTurnWheelUserResponse,
  TShareSocialTurnWheelResponse,
} from '@/services/api/turn-wheel-controller/types';
import {
  TGetTurnWheelUserRequest,
  TGetTurnWheelUserSuccess,
  TGetTurnWheelUserFailed,
  TBuyTurnWheelFailed,
  TBuyTurnWheelRequest,
  TBuyTurnWheelSuccess,
  TShareSocialTurnWheelFailed,
  TShareSocialTurnWheelRequest,
  TShareSocialTurnWheelSuccess,
} from '@/redux/actions/turn-wheel-controller/types';

export const getTurnWheelUserAction = {
  request: createActionCreator(
    ETurnWheelControllerAction.GET_TURN_WHEEL_USER_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TGetTurnWheelUserResponse) => void): TGetTurnWheelUserRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ETurnWheelControllerAction.GET_TURN_WHEEL_USER_SUCCESS,
    (resolve) =>
      (response: TGetTurnWheelUserResponse): TGetTurnWheelUserSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ETurnWheelControllerAction.GET_TURN_WHEEL_USER_FAILED,
    (resolve) =>
      (error: unknown): TGetTurnWheelUserFailed =>
        resolve({ error }),
  ),
};

export const buyTurnWheelAction = {
  request: createActionCreator(
    ETurnWheelControllerAction.BUY_TURN_WHEEL_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TBuyTurnWheelResponse) => void): TBuyTurnWheelRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ETurnWheelControllerAction.BUY_TURN_WHEEL_SUCCESS,
    (resolve) =>
      (response: TBuyTurnWheelResponse): TBuyTurnWheelSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ETurnWheelControllerAction.BUY_TURN_WHEEL_FAILED,
    (resolve) =>
      (error: unknown): TBuyTurnWheelFailed =>
        resolve({ error }),
  ),
};

export const shareSocialTurnWheelAction = {
  request: createActionCreator(
    ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_REQUEST,
    (resolve) =>
      (id: string, cb?: (response: TShareSocialTurnWheelResponse) => void): TShareSocialTurnWheelRequest =>
        resolve({ id, cb }),
  ),
  success: createActionCreator(
    ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_SUCCESS,
    (resolve) =>
      (response: TShareSocialTurnWheelResponse): TShareSocialTurnWheelSuccess =>
        resolve({ response }),
  ),
  failure: createActionCreator(
    ETurnWheelControllerAction.SHARE_SOCIAL_TURN_WHEEL_FAILED,
    (resolve) =>
      (error: unknown): TShareSocialTurnWheelFailed =>
        resolve({ error }),
  ),
};
