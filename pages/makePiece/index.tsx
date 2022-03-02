import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import makeRequest from '../../src/app/makeRequest';
import { wrapper } from '../../src/app/store';
import MakePiece from '../../src/modules/makePiece/MakePiece';

const index = () => {
  return <MakePiece />;
};

// const index:NextPage<RootState> = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   return <MakePiece />;
// };

export default connect((state: RootState) => state)(index);

// export const getServerSideProps = wrapper.getServerSideProps(store => ({res, res, ...etc}) => {
//   // const res = makeRequest<KeywordResponse>({ url: 'pieces/v1/keyword', method: 'get' });
//   const data = await res;

//   // if (!data) {
//   //   return {
//   //     notFound: true
//   //   };
//   // }
//   // return { props: { data: data } };
//   store.dispatch({type: 'setKeywords', payload: data})
// })

// interface KeywordResponse {
//   code: string;
//   message: string;
//   body: {
//     id: number;
//     name: string;
//   }[];
// }
