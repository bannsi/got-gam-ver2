import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Piece } from '../../../common/interfaces/piece.interface';
import { User } from '../../../common/interfaces/user.interface';

interface PieceState {
  loading: boolean;
  piece: Piece | null;
  pieceMaker: User | null;
}

const initialState: PieceState = {
  loading: true,
  piece: null,
  pieceMaker: null
};

const pieceSlice = createSlice({
  name: 'piece',
  initialState,
  reducers: {
    fetchPieceByIdStart(state, action: PayloadAction<number>) {
      console.log('fetch piece by id');
    },
    fetchPieceByIdSuccess(state, action: PayloadAction<{ piece: Piece; pieceMaker: User }>) {
      state.piece = action.payload.piece;
      state.pieceMaker = action.payload.pieceMaker;
      state.loading = false;
    }
  }
});
export const { fetchPieceByIdStart, fetchPieceByIdSuccess } = pieceSlice.actions;
export default pieceSlice.reducer;
export const selectPiece = (state: RootState) => state.piece.piece;
export const selectPieceLoading = (state: RootState) => state.piece.loading;
export const selectPieceMaker = (state: RootState) => state.piece.pieceMaker;
