import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location, LocationResponse } from './makePiece.type';
import { pages } from './pages';

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
    keywords: string[];
    companions: string[];
    contents: string;
  };
  keywordIds: string[];
  companionIds: string[];
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
    companions: [],
    contents: ''
  },
  keywordIds: [],
  companionIds: [],
  currentPageIndex: 0,
  locationList: []
} as MakePieceState;

const makePieceSlice = createSlice({
  name: 'makePiece',
  initialState,
  reducers: {
    setImgLocation(state, action: PayloadAction<Location>) {
      state.form.imgLocation = { ...action.payload };
      console.log(action.payload);
    },
    setDate(state, action: PayloadAction<Date>) {
      state.form.date = action.payload;
      console.log(action.payload);
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
    setKeywords(state, action: PayloadAction<string[]>) {
      state.form.keywords = [...action.payload];
    },
    setCompanions(state, action: PayloadAction<string[]>) {
      state.form.companions = [...action.payload];
    },
    setContents(state, action: PayloadAction<string>) {
      state.form.contents = action.payload;
    },
    fetchKeywordIds(state, action: PayloadAction<string[]>) {
      state.keywordIds = action.payload;
    },
    fetchCompanionIds(state, action: PayloadAction<string[]>) {
      state.companionIds = action.payload;
    },
    fetchLocationStart() {
      console.log('fetch location');
    },
    fetchLocationSuccess(state, action: PayloadAction<LocationResponse[]>) {
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
      return initialState;
    }
  }
});

export const {
  setImgLocation,
  setLocation,
  setImg,
  setDate,
  nextPage,
  backPage,
  makePieceStart,
  makePieceSuccess,
  fetchLocationStart,
  fetchLocationSuccess
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
