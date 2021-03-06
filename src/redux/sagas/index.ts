import { all, fork } from 'redux-saga/effects';

import authControllerSaga from './auth-controller';
import handbookControllerSaga from './handbook-controller';
import packExerciseControllerSaga from './pack-exercise-controller';
import packMealControllerSaga from './pack-meal-controller';
import packPtOnlineControllerSaga from './pack-pt-online-controller';
import addressControllerSaga from './address-controller';
import wheelControllerSaga from './wheel-controller';
import turnWheelControllerSaga from './turn-wheel-controller';
import uploadControllerSaga from './upload-controller';
import paymentControllerSaga from './payment-controller';
import rankControllerSaga from './rank-controller';
import productControllerSaga from './product-controller';
import orderControllerSaga from './order-controller';
import userMealScheduleControllerSaga from './user-meal-schedule-controller';
import newControllerSaga from './new-controller';
import categoryControllerSaga from './category-controller';
import cartControllerSaga from './cart-controller';
import voucherControllerSaga from './voucher-controller';
import bannerControllerSaga from './banner-controller';
import contactControllerSaga from './contact-controller';

const rootSaga = function* root(): Generator {
  yield all([
    fork(authControllerSaga),
    fork(handbookControllerSaga),
    fork(packExerciseControllerSaga),
    fork(packMealControllerSaga),
    fork(packPtOnlineControllerSaga),
    fork(addressControllerSaga),
    fork(wheelControllerSaga),
    fork(turnWheelControllerSaga),
    fork(uploadControllerSaga),
    fork(paymentControllerSaga),
    fork(rankControllerSaga),
    fork(productControllerSaga),
    fork(orderControllerSaga),
    fork(userMealScheduleControllerSaga),
    fork(newControllerSaga),
    fork(categoryControllerSaga),
    fork(cartControllerSaga),
    fork(voucherControllerSaga),
    fork(bannerControllerSaga),
    fork(contactControllerSaga),
  ]);
};

export default rootSaga;
