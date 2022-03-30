import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/pack-exercise-controller';
import {
  getPackExerciseAction,
  getPackExercisesAction,
  getPackExercisesBoughtAction,
} from '@/redux/actions/pack-exercise-controller';
import {
  TGetPackExerciseResponse,
  TGetPackExercisesBoughtResponse,
  TGetPackExercisesResponse,
} from '@/services/api/pack-exercise-controller/types';

export function* getPackExercisesSaga(action: ActionType<typeof getPackExercisesAction.request>): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackExercises, params)) as TGetPackExercisesResponse;

    yield put(getPackExercisesAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackExercisesAction.failure(err));
  }
}
export function* getPackExercisesBoughtSaga(
  action: ActionType<typeof getPackExercisesBoughtAction.request>,
): Generator {
  const { params, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackExercisesBought, params)) as TGetPackExercisesBoughtResponse;

    yield put(getPackExercisesBoughtAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackExercisesBoughtAction.failure(err));
  }
}
export function* getPackExerciseSaga(action: ActionType<typeof getPackExerciseAction.request>): Generator {
  const { id, cb } = action.payload;
  try {
    const response = (yield call(Instance.getPackExercise, id)) as TGetPackExerciseResponse;

    yield put(getPackExerciseAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getPackExerciseAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(getPackExercisesAction.request.type, getPackExercisesSaga)]);
  yield all([takeLatest(getPackExercisesBoughtAction.request.type, getPackExercisesBoughtSaga)]);
  yield all([takeLatest(getPackExerciseAction.request.type, getPackExerciseSaga)]);
}
