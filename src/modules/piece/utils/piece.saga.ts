import { PayloadAction } from '@reduxjs/toolkit';
import { Router } from 'next/router';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchPieceByIdAPI, fetchUserByIdAPI } from './piece.api';
import { fetchPieceByIdStart, fetchPieceByIdSuccess } from './piece.slice';

function* fetchPieceSaga(action: PayloadAction<number>) {
  try {
    const pieceResponse = yield call(fetchPieceByIdAPI, action.payload);
    const pieceMakerResponse = yield call(fetchUserByIdAPI, action.payload);
    const result = {
      piece: pieceResponse.body,
      pieceMaker: pieceMakerResponse.body
    };
    yield put(fetchPieceByIdSuccess(result));
  } catch (error) {
    throw new Error(`fetch piece by pieceId error ${error.message}`);
  }
}

export function* watchPieceSaga() {
  yield all([takeEvery(fetchPieceByIdStart.type, fetchPieceSaga)]);
}
