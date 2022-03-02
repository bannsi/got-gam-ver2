import { call, put, takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';
import { fetchMeAPI, fetchMyPiecesAPI } from './myPage.api';
import { fetchMeSuccess, fetchMyPiecesStart, fetchMyPiecesSuccess } from './myPage.slice';

function* fetchMyPiecesSaga() {
  const { body } = yield call(fetchMeAPI);
  const result = yield call(fetchMyPiecesAPI, body.kakaoId);

  yield put(fetchMeSuccess(body));
  yield put(fetchMyPiecesSuccess(result.body));
}

export function* watchMyPageSaga() {
  yield all([takeLatest(fetchMyPiecesStart.type, fetchMyPiecesSaga)]);
}
