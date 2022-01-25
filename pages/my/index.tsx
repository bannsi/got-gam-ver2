import React from 'react';
import { getLayout } from '../../src/modules/layout/Layout';
import MyPage from '../../src/modules/myPage/components/MyPage';

const My = () => {
  return <MyPage />;
};

My.layout = getLayout;

export default My;
