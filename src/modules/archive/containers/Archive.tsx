import React from 'react';
import styled from 'styled-components';
import AddFolderButton from '../components/AddFolderButton';

const Archive = () => {
  return (
    <Container>
      <AddFolderButton onClick={() => console.log('!!')} />
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  padding: 16px;
`;
