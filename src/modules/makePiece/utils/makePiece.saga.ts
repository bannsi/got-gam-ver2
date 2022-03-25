import { PayloadAction } from '@reduxjs/toolkit';
import { channel } from 'redux-saga';
import { call, put, select, throttle } from 'redux-saga/effects';
import { all, takeEvery, takeLatest } from 'typed-redux-saga';
import {
  fetchCompanionIdsAPI,
  fetchKeywordIdsAPI,
  fetchOptionIdsAPI,
  getPlaceListAPI,
  searchPlaceListAPI,
  KeywordResponse,
  WhoKeywordResponse,
  makePieceAPI,
  MakePieceRequest
} from './makePiece.api';
import { LocationResponse } from './LocationResponse.type';
import {
  fetchLocationStart,
  selectImgLocation,
  fetchLocationSuccess,
  makePieceStart,
  makePieceSuccess,
  searchLocationStart,
  searchLocationSuccess,
  fetchAllKeyword,
  fetchCompanionIds,
  fetchKeywordIds,
  fetchOptionIds,
  selectForms,
  FileType
} from './makePiece.slice';
import { Location } from './makePiece.type';
import { Keyword } from '../../../common/interfaces/keyword.interface';
import { WhoKeyword } from '../../../common/interfaces/whoKeyword.interface';
import Router from 'next/router';
import { Image } from '../../../common/interfaces/piece.interface';

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
function* searchLocationSaga(action: PayloadAction<string>) {
  try {
    const query = action.payload;
    if (query) {
      const results = yield call(searchPlaceListAPI, query);
      yield put(searchLocationSuccess(results));
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchAllKeywordSaga() {
  try {
    const keywords: KeywordResponse = yield call(fetchKeywordIdsAPI);
    const options: KeywordResponse = yield call(fetchOptionIdsAPI);
    const companions: WhoKeywordResponse = yield call(fetchCompanionIdsAPI);

    yield put(fetchKeywordIds(keywords.body));
    yield put(fetchOptionIds(options.body));
    yield put(fetchCompanionIds(companions.body));
  } catch (error) {
    console.log(error);
  }
}

function* makePieceSaga() {
  try {
    const data = yield select(selectForms);
    const form: MakePieceRequest = {
      date: data.date,
      content: data.contents,
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
      addressDetail: data.addressDetail,
      placeUrl: data.placeURL,
      images: data.imgs.map((img: FileType) => {
        return { image: img.url, thumbnail: img.thumbail } as Image;
      }),
      keywords: data.keywords,
      optionalKeywords: data.options,
      whos: data.companions,
      place: data.place
    };

    const { body } = yield call(makePieceAPI, form);
    yield Router.push('piece/[pieceId]', body.pieceId);
  } catch (error) {
    console.log(error);
  }
}

export function* watchMakePiece() {
  yield all([
    takeEvery(fetchLocationStart.type, fetchLocationSaga),
    takeEvery(makePieceStart.type, makePieceSaga),
    throttle(500, searchLocationStart.type, searchLocationSaga),
    takeEvery(fetchAllKeyword.type, fetchAllKeywordSaga)
  ]);
}
