import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/pack-meal-controller';
import { buyPackMealAction, getPackMealAction, getPackMealsAction } from '@/redux/actions/pack-meal-controller';
import {
  TBuyPackMealResponse,
  TGetPackMealResponse,
  TGetPackMealsResponse,
} from '@/services/api/pack-meal-controller/types';

export function* getPackMealsSaga(action: ActionType<typeof getPackMealsAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackMeals, params)) as TGetPackMealsResponse;

    yield put(getPackMealsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackMealsAction.failure(err));
  }
}

export function* getPackMealSaga(action: ActionType<typeof getPackMealAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackMeal, id)) as TGetPackMealResponse;

    yield put(getPackMealAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackMealAction.failure(err));
  }
}

export function* buyPackMealSaga(action: ActionType<typeof buyPackMealAction.request>): Generator {
  const { body, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.buyPackMeal, body)) as TBuyPackMealResponse;

    yield put(buyPackMealAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(buyPackMealAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getPackMealsAction.request.type, getPackMealsSaga)]);
  yield all([takeLatest(getPackMealAction.request.type, getPackMealSaga)]);
  yield all([takeLatest(buyPackMealAction.request.type, buyPackMealSaga)]);
}
