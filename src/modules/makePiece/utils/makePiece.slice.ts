import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WhoKeyword } from '../../../common/interfaces/whoKeyword.interface';
import { Keyword } from '../../../common/interfaces/keyword.interface';
import { Location, LocationResponse } from './makePiece.type';
import { pages } from './pages';
import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';

export interface FileType {
  id: number; // 파일들의 고유값 id
  object: File;
  url: string | ArrayBuffer | null;
}

interface MakePieceState {
  form: {
    imgLocation: Location;
    latitude: string;
    longitude: string;
    address: string;
    addressDetail: string;
    placeURL: string;
    imgs: FileType[];
    date: Date;
    keywords: number[];
    options: number[];
    companions: number[];
    contents: string;
  };
  keywordIds: Keyword[];
  companionIds: WhoKeyword[];
  optionIds: Keyword[];
  currentPageIndex: number;
  locationList: LocationResponse[];
}

const initialState = {
  form: {
    imgLocation: { lat: 0, lng: 0 } as Location,
    latitude: '',
    longitude: '',
    address: '',
    addressDetail: '',
    placeURL: '',
    imgs: [],
    date: new Date(),
    keywords: [],
    options: [],
    companions: [],
    contents: ''
  },
  keywordIds: [],
  companionIds: [],
  optionIds: [],
  currentPageIndex: 0,
  locationList: []
} as MakePieceState;

const makePieceSlice = createSlice({
  name: 'makePiece',
  initialState,
  reducers: {
    setImgLocation(state, action: PayloadAction<Location>) {
      state.form.imgLocation = { ...action.payload };
    },
    setDate(state, action: PayloadAction<Date>) {
      state.form.date = action.payload;
    },
    setLocation(state, action: PayloadAction<LocationResponse>) {
      state.form.latitude = action.payload.y;
      state.form.longitude = action.payload.x;
      state.form.address = action.payload.place_name;
      state.form.addressDetail = action.payload.address_name;
      state.form.placeURL = action.payload.place_url;
    },
    setImg(state, action: PayloadAction<FileType[]>) {
      state.form.imgs = action.payload;
    },
    setKeywords(state, action: PayloadAction<number[]>) {
      state.form.keywords = [...action.payload];
    },
    setOptions(state, action: PayloadAction<number[]>) {
      state.form.options = [...action.payload];
    },
    setCompanions(state, action: PayloadAction<number[]>) {
      state.form.companions = [...action.payload];
    },
    setContents(state, action: PayloadAction<string>) {
      state.form.contents = action.payload;
    },
    fetchAllKeyword(state) {
      console.log('fetch keywords');
    },
    fetchKeywordIds(state, action: PayloadAction<Keyword[]>) {
      state.keywordIds = [...action.payload];
    },
    fetchOptionIds(state, action: PayloadAction<Keyword[]>) {
      state.optionIds = [...action.payload];
    },
    fetchCompanionIds(state, action: PayloadAction<WhoKeyword[]>) {
      state.companionIds = [...action.payload];
    },
    fetchLocationStart() {
      console.log('fetch location');
    },
    fetchLocationSuccess(state, action: PayloadAction<LocationResponse[]>) {
      state.locationList = [...action.payload];
    },
    searchLocationStart(state, action: PayloadAction<string>) {
      console.log('serach');
    },
    searchLocationSuccess(state, action: PayloadAction<LocationResponse[]>) {
      state.locationList = [...action.payload];
    },
    nextPage(state) {
      if (pages.length > state.currentPageIndex + 1) {
        state.currentPageIndex++;
      }
    },
    backPage(state) {
      if (state.currentPageIndex > 0) {
        state.currentPageIndex--;
      }
    },
    makePieceStart() {
      console.log('makepiece');
    },
    makePieceSuccess(state) {
      state = initialState;
    }
  }
});

export const {
  setImgLocation,
  setLocation,
  setImg,
  setKeywords,
  setOptions,
  setCompanions,
  setDate,
  setContents,
  nextPage,
  backPage,
  makePieceStart,
  makePieceSuccess,
  fetchLocationStart,
  fetchLocationSuccess,
  searchLocationStart,
  searchLocationSuccess,
  fetchAllKeyword,
  fetchCompanionIds,
  fetchOptionIds,
  fetchKeywordIds
} = makePieceSlice.actions;
export default makePieceSlice.reducer;

export const selectCurrentPageIndex = (state: RootState) => state.makePiece.currentPageIndex;
export const selectDate = (state: RootState) => state.makePiece.form.date;
export const selectImgs = (state: RootState) => state.makePiece.form.imgs;
export const selectImgLocation = (state: RootState) => state.makePiece.form.imgLocation;
export const selectLocationList = (state: RootState) => state.makePiece.locationList;
export const selectLocationLat = (state: RootState) => state.makePiece.form.latitude;
export const selectLocationLng = (state: RootState) => state.makePiece.form.longitude;
export const selectAddress = (state: RootState) => state.makePiece.form.address;
export const selectAddressDetail = (state: RootState) => state.makePiece.form.addressDetail;
export const selectKeywords = (state: RootState) => state.makePiece.keywordIds;
export const selectSelectedKeywords = (state: RootState) => state.makePiece.form.keywords;
export const selectOptions = (state: RootState) => state.makePiece.optionIds;
export const selectSelectedOptions = (state: RootState) => state.makePiece.form.options;
export const selectCompanions = (state: RootState) => state.makePiece.companionIds;
export const selectSelectedCompanions = (state: RootState) => state.makePiece.form.companions;
export const selectForms = (state: RootState) => state.makePiece.form;
