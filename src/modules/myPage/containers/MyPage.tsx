import React, { useEffect } from 'react';
import styled from 'styled-components';
import Profile from '../components/Profile/Profile';

function MyPage() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default MyPage;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
