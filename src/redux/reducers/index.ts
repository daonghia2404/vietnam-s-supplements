import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import uiReducer from './ui';
import authReducer from './auth';
import handbookReducer from './handbook';
import packExerciseReducer from './pack-exercise';
import packMealReducer from './pack-meal';
import packPtOnlineReducer from './pack-pt-online';
import addressReducer from './address';
import wheelReducer from './wheel';
import turnWheelReducer from './turn-wheel';
import paymentReducer from './payment';
import rankReducer from './rank';
import productReducer from './product';
import orderReducer from './order';
import userMealScheduleReducer from './user-meal-schedule';
import newReducer from './new';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  uiReducer,
  authReducer,
  handbookReducer,
  packExerciseReducer,
  packMealReducer,
  packPtOnlineReducer,
  addressReducer,
  wheelReducer,
  turnWheelReducer,
  paymentReducer,
  rankReducer,
  productReducer,
  orderReducer,
  userMealScheduleReducer,
  newReducer,
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
