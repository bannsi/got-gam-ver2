import { configureStore, Store } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = (context: Context) => {
  // 사가 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();
  // RTK의 configureStore를 사용해 스토어 생성,
  const store = configureStore({
    reducer: rootReducer,
    //rootReducer로 스토어 설정
    devTools: true,
    // 크롬의 리덕스 devtool을 사용
    middleware: [sagaMiddleware]
    // configureStore가 자동으로 sagaMiddleware를 applyMiddleware로 넘겨줌
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  // 사가 미들웨어를 실행시킨다.
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
// makeStore에서 반환되는 store의 타입
// export type AppState = ReturnType<AppStore['getState']>;
// 스토어에서 state를 가져왔을 때 반환되는 state의 타입
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });
