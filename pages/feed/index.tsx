import React from 'react';
import Feed from '../../src/modules/feed/Feed';
import { getLayout } from '../../src/modules/layout/Layout';

const index = () => {
  return <Feed />;
};

index.layout = getLayout;

export default index;
