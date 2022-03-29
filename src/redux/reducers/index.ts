import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import uiReducer from './ui';
import handbookReducer from './handbook';
import packExerciseReducer from './pack-exercise';
import packPtOnlineReducer from './pack-pt-online';
import addressReducer from './address';
import wheelReducer from './wheel';
import turnWheelReducer from './turn-wheel';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  uiReducer,
  handbookReducer,
  packExerciseReducer,
  packPtOnlineReducer,
  addressReducer,
  wheelReducer,
  turnWheelReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
