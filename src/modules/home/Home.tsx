import React from 'react';
import styled from 'styled-components';
import BestCollections from './components/BestCollections';
import BestPieceMakers from './components/BestPieceMakers';
import BestPieces from './components/BestPieces';
import Header from './components/Header';

function Home() {
  return (
    <Container>
      <Header />
      {/* <BestCollections />
      <BestPieces /> */}
      <BestPieceMakers />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
