import React from 'react';
import Archive from '../../src/modules/archive/containers/Archive';
import { getLayout } from '../../src/modules/layout/Layout';

const index = () => {
  return <Archive />;
};

index.layout = getLayout;

export default index;
