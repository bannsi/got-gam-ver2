import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PieceItem from '../../../common/components/items/PieceItem';
import { fetchMyPiecesStart, selectMyPieces } from '../utils/myPage.slice';

const MyPieces = () => {
  const dispatch = useDispatch();
  const pieces = useSelector(selectMyPieces);

  useEffect(() => {
    dispatch(fetchMyPiecesStart());
  }, []);
  return (
    <Container>
      {pieces.map((piece) => (
        <PieceItem key={piece.pieceId} piece={piece} />
      ))}
    </Container>
  );
};

export default MyPieces;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 2px;
  row-gap: 2px;
  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  overflow-y: scroll;
  padding-bottom: 150px;
`;
