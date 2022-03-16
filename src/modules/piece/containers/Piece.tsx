import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../../../common/components/items/Header';
import PieceMakerItem from '../../../common/components/items/PieceMakerItem';
import PieceDetail from '../components/PieceDetail';
import PieceKeywords from '../components/PieceKeywords';
import PieceLocation from '../components/PieceLocation';
import PieceMaker from '../components/PieceMaker';
import { fetchPieceByIdAPI } from '../utils/piece.api';
import { fetchPieceByIdStart, selectPiece, selectPieceLoading } from '../utils/piece.slice';

const Piece = () => {
  const router = useRouter();
  const pieceId = router.query.pieceId as string;
  const dispatch = useDispatch();
  useEffect(() => {
    if (pieceId) {
      dispatch(fetchPieceByIdStart(parseInt(pieceId)));
    }
  }, [pieceId]);
  const piece = useSelector(selectPiece);
  const loading = useSelector(selectPieceLoading);
  return (
    <Container>
      <Header />
      <ElementContainer>
        <PieceMaker />
        <PieceDetail piece={piece} />
        <PieceLocation piece={piece} />
        <PieceKeywords piece={piece} />
      </ElementContainer>
    </Container>
  );
};

export default Piece;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  background: ${(props) => props.theme.grayScale.background};
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
