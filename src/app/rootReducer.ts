import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import makePieceSlice from '../modules/makePiece/utils/makePiece.slice';
import myPageSlice from '../modules/myPage/utils/myPage.slice';

export const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      return reducer(state, action);
    }
  } // 서버에서 생성한 스토어의 상태를 HYDRATE 액션을 통해서 클라이언트와 합쳐주 새로운 상태를 만든다.
};

const reducer = combineReducers({
  ['makePiece']: makePieceSlice,
  ['myPage']: myPageSlice
});

declare global {
  type RootState = ReturnType<typeof reducer>;
}
