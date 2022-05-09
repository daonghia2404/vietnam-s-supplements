import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionType } from 'deox';

import Instance from '@/services/api/contact-controller';
import { TPostAgentResponse, TPostContactResponse } from '@/services/api/contact-controller/types';
import { postAgentAction, postContactAction } from '@/redux/actions';

export function* postContactSaga(action: ActionType<typeof postContactAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.postContact, body)) as TPostContactResponse;

    yield put(postContactAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(postContactAction.failure(err));
  }
}

export function* postAgentSaga(action: ActionType<typeof postAgentAction.request>): Generator {
  const { body, cb } = action.payload;
  try {
    const response = (yield call(Instance.postAgent, body)) as TPostAgentResponse;

    yield put(postAgentAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(postAgentAction.failure(err));
  }
}

export default function* root(): Generator {
  yield all([takeLatest(postContactAction.request.type, postContactSaga)]);
  yield all([takeLatest(postAgentAction.request.type, postAgentSaga)]);
}
