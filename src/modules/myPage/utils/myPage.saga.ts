import { call, put, takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';
import { fetchMyInfoAPI, fetchMyPiecesAPI } from './myPage.api';
import { fetchMyInfoSuccess, fetchMyPiecesStart, fetchMyPiecesSuccess } from './myPage.slice';

function* fetchMyPiecesSaga() {
  const { body } = yield call(fetchMyInfoAPI);
  const result = yield call(fetchMyPiecesAPI, body.kakaoId);

  yield put(fetchMyInfoSuccess(body));
  yield put(fetchMyPiecesSuccess(result.body));
}

export function* watchMyPageSaga() {
  yield all([takeLatest(fetchMyPiecesStart.type, fetchMyPiecesSaga)]);
}
