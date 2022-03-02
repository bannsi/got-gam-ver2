import React from 'react';
import { wrapper } from '../../src/app/store';
import { getLayout } from '../../src/modules/layout/Layout';
import MyPage from '../../src/modules/myPage/containers/MyPage';

const My = () => {
  return <MyPage />;
};

My.layout = getLayout;

export default My;
