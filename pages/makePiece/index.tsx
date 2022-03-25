import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import makeRequest from '../../src/app/makeRequest';
import { wrapper } from '../../src/app/store';
import MakePiece from '../../src/modules/makePiece/MakePiece';

const index = () => {
  return <MakePiece />;
};

export default connect((state: RootState) => state)(index);
