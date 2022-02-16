import { fork } from 'redux-saga/effects';
import { watchMakePiece } from '../modules/makePiece/utils/makePiece.saga';

export function* rootSaga() {
  yield fork(watchMakePiece);
}
