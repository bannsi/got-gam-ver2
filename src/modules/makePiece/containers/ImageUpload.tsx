import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { nextPage } from '../utils/makePiece.slice';

const ImageUpload = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Container>
      여기에 사진을 끌어다 놓으세요.
      <input type="file" accept="image/png" multiple></input>
      <NextButton disable={false} onNext={() => dispatch(nextPage())} />
    </Container>
  );
};

export default ImageUpload;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;
