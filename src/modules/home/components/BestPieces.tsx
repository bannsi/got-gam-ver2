import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../../styles/text/SubTitle';
import PieceList from '../../../common/components/items/PieceList';
import { Piece } from '../../../common/interfaces/piece.interface';

interface BestPiecesProps {
  pieceList: Piece[];
}

const BestPieces = ({ pieceList }: BestPiecesProps) => {
  return (
    <Container>
      <Label type={'1'}>베스트 조각</Label>
      <PieceList list={pieceList} />
    </Container>
  );
};

export default BestPieces;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Label = styled.div`
  ${SubTitle}
  margin: 15px 16px;
`;
