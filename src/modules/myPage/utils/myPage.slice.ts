import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Collection } from '../../../common/interfaces/collection.interface';
import { User } from '../../../common/interfaces/user.interface';
import { Piece } from '../../../common/interfaces/piece.interface';
import { PieceThumnail } from '../../../common/interfaces/pieceThumbnail.interface';

interface myPageState {
  me: User;
  myPieces: PieceThumnail[];
  myCollections: Collection[];
}

const initialState: myPageState = {
  me: {
    kakaoId: '',
    nickname: '',
    enabled: true,
    createdAt: new Date(),
    image: ''
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
    fetchMyPiecesSuccess(state, action: PayloadAction<PieceThumnail[]>) {
      state.myPieces = [...action.payload];
    },
    fetchMyInfoSuccess(state, action: PayloadAction<User>) {
      state.me = action.payload;
    }
  }
});
export const { fetchMyPiecesStart, fetchMyPiecesSuccess, fetchMyInfoSuccess } = myPageSlice.actions;
export default myPageSlice.reducer;

export const selectMyPieces = (state: RootState) => state.myPage.myPieces;
export const selectMyInfo = (state: RootState) => state.myPage.me;
