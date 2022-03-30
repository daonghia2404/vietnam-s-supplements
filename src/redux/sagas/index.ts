import { all, fork } from 'redux-saga/effects';

import authControllerSaga from './auth-controller';
import handbookControllerSaga from './handbook-controller';
import packExerciseControllerSaga from './pack-exercise-controller';
import packPtOnlineControllerSaga from './pack-pt-online-controller';
import addressControllerSaga from './address-controller';
import wheelControllerSaga from './wheel-controller';
import turnWheelControllerSaga from './turn-wheel-controller';
import uploadControllerSaga from './upload-controller';
import paymentControllerSaga from './payment-controller';
import rankControllerSaga from './rank-controller';
import productControllerSaga from './product-controller';
import orderControllerSaga from './order-controller';

const rootSaga = function* root(): Generator {
  yield all([
    fork(authControllerSaga),
    fork(handbookControllerSaga),
    fork(packExerciseControllerSaga),
    fork(packPtOnlineControllerSaga),
    fork(addressControllerSaga),
    fork(wheelControllerSaga),
    fork(turnWheelControllerSaga),
    fork(uploadControllerSaga),
    fork(paymentControllerSaga),
    fork(rankControllerSaga),
    fork(productControllerSaga),
    fork(orderControllerSaga),
  ]);
};

export default rootSaga;
