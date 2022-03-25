import React from 'react';
import styled from 'styled-components';
import { Piece } from '../../../common/interfaces/piece.interface';

interface PieceDetailProps {
  piece: Piece | null;
}

const PieceDetail = ({ piece }: PieceDetailProps) => {
  return piece ? (
    <Container>
      <Img src={piece.images[0].image}></Img>
      <Desc>{piece.content}</Desc>
    </Container>
  ) : (
    <div>loading..</div>
  );
};

export default PieceDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Img = styled.img`
  width: calc(100vw - 32px);
  height: calc(100vw - 32px);
  border-radius: 8px 8px 0 0;
  background-color: #cccccc;
  object-fit: cover;
`;

const Desc = styled.div`
  display: flex;
  padding: 24px 16px;
  font-size: 14px;
  color: ${(props) => props.theme.grayScale.body};
`;
