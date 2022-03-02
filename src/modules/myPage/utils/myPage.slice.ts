import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../../../common/interfaces/collection.interface';
import { Me } from '../../../common/interfaces/me.interface';
import { Piece } from '../../../common/interfaces/piece.interface';

interface myPageState {
  me: Me;
  myPieces: Piece[];
  myCollections: Collection[];
}

const initialState: myPageState = {
  me: {
    kakaoId: '',
    nickname: '쥬니',
    enabled: true,
    createdAt: new Date(),
    image: {
      id: 0,
      encoded: ''
    }
  },
  myPieces: [],
  myCollections: []
};

const myPageSlice = createSlice({
  name: 'myPage',
  initialState,
  reducers: {
    fetchMyPiecesStart() {
      console.dir('fetch my pieces');
    },
    fetchMyPiecesSuccess(state, action: PayloadAction<Piece[]>) {
      state.myPieces = [...action.payload];
    },
    fetchMeSuccess(state, action: PayloadAction<Me>) {
      state.me = action.payload;
    }
  }
});
export const { fetchMyPiecesStart, fetchMyPiecesSuccess, fetchMeSuccess } = myPageSlice.actions;
export default myPageSlice.reducer;

export const selectMyPieces = (state: RootState) => state.myPage.myPieces;
export const selectMe = (state: RootState) => state.myPage.me;
