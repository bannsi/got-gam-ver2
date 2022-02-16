import { PayloadAction } from '@reduxjs/toolkit';
import { channel } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { all, takeLatest } from 'typed-redux-saga';
import { getPlaceListAPI } from './getPlaceListAPI';
import { LocationResponse } from './LocationResponse.type';
import {
  fetchLocationStart,
  selectImgLocation,
  fetchLocationSuccess,
  makePieceStart,
  makePieceSuccess
} from './makePiece.slice';
import { Location } from './makePiece.type';

function* fetchLocationSaga(action: PayloadAction<Location[]>) {
  try {
    const { lat, lng } = yield select(selectImgLocation);
    const results = yield all([
      call(getPlaceListAPI, lat, lng, 'AT4'),
      call(getPlaceListAPI, lat, lng, 'AD5'),
      call(getPlaceListAPI, lat, lng, 'FD6'),
      call(getPlaceListAPI, lat, lng, 'CE7'),
      call(getPlaceListAPI, lat, lng, 'CT1')
    ]);

    const mapped = results.reduce(
      (acc: [], cur: []) => ((acc = [...acc, ...cur]), acc),
      []
    ) as LocationResponse[];
    yield put(fetchLocationSuccess(mapped));
  } catch (error) {
    console.log(error.message);
  }
}
function* makePieceSaga() {
  try {
    yield put(makePieceSuccess());
  } catch (error) {
    console.log(error);
  }
}

export function* watchMakePiece() {
  yield all([
    takeLatest(fetchLocationStart.type, fetchLocationSaga),
    takeLatest(makePieceStart.type, makePieceSaga)
  ]);
}
