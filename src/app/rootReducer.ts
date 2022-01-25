import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({})(state, action); // 서버에서 생성한 스토어의 상태를 HYDRATE 액션을 통해서 클라이언트와 합쳐주 새로운 상태를 만든다.
};
