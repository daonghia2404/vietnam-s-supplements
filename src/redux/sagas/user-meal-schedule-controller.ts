import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/user-meal-schedule-controller';
import {
  createUserInfoBodyAction,
  createUserMealScheduleAction,
  getUserMealScheduleAction,
  getUserMealScheduleByDateAction,
  getUserMealScheduleFromTodayAction,
} from '@/redux/actions';
import {
  TCreateUserInfoBodyResponse,
  TCreateUserMealScheduleResponse,
  TGetUserMealScheduleByDateResponse,
  TGetUserMealScheduleFromTodayResponse,
  TGetUserMealScheduleResponse,
} from '@/services/api/user-meal-schedule-controller/types';

export function* getUserMealScheduleSaga(action: ActionType<typeof getUserMealScheduleAction.request>): Generator {
  const { cb } = action.payload;
  try {
    const response = (yield call(Instance.getUserMealSchedule)) as TGetUserMealScheduleResponse;

    yield put(getUserMealScheduleAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getUserMealScheduleAction.failure(err));
  }
}

export function* getUserMealScheduleByDateSaga(
  action: ActionType<typeof getUserMealScheduleByDateAction.request>,
): Generator {
  const { date, cb } = action.payload;
  try {
    const response = (yield call(Instance.getUserMealScheduleByDate, date)) as TGetUserMealScheduleByDateResponse;

    yield put(getUserMealScheduleByDateAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getUserMealScheduleByDateAction.failure(err));
  }
}

export function* getUserMealScheduleFromTodaySaga(
  action: ActionType<typeof getUserMealScheduleFromTodayAction.request>,
): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(
      Instance.getUserMealScheduleFromToday,
      params,
    )) as TGetUserMealScheduleFromTodayResponse;

    yield put(getUserMealScheduleFromTodayAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getUserMealScheduleFromTodayAction.failure(err));
  }
}

export function* createUserMealScheduleSaga(
  action: ActionType<typeof createUserMealScheduleAction.request>,
): Generator {
  const { body, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.createUserMealSchedule, body)) as TCreateUserMealScheduleResponse;

    yield put(createUserMealScheduleAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(createUserMealScheduleAction.failure(err));
  }
}

export function* createUserInfoBodySaga(action: ActionType<typeof createUserInfoBodyAction.request>): Generator {
  const { body, cb, failedCb } = action.payload;
  try {
    const response = (yield call(Instance.createUserInfoBody, body)) as TCreateUserInfoBodyResponse;

    yield put(createUserInfoBodyAction.success(response));
    cb?.(response);
  } catch (err) {
    failedCb?.();
    yield put(createUserInfoBodyAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getUserMealScheduleAction.request.type, getUserMealScheduleSaga)]);
  yield all([takeLatest(getUserMealScheduleByDateAction.request.type, getUserMealScheduleByDateSaga)]);
  yield all([takeLatest(getUserMealScheduleFromTodayAction.request.type, getUserMealScheduleFromTodaySaga)]);
  yield all([takeLatest(createUserMealScheduleAction.request.type, createUserMealScheduleSaga)]);
  yield all([takeLatest(createUserInfoBodyAction.request.type, createUserInfoBodySaga)]);
}
