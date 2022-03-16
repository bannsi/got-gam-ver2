import { fork } from 'redux-saga/effects';
import { watchMakePiece } from '../modules/makePiece/utils/makePiece.saga';
import { watchMyPageSaga } from '../modules/myPage/utils/myPage.saga';
import { watchPieceSaga } from '../modules/piece/utils/piece.saga';

export function* rootSaga() {
  yield fork(watchMakePiece);
  yield fork(watchMyPageSaga);
  yield fork(watchPieceSaga);
}
