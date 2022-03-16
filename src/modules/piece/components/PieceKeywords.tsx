import React from 'react';
import styled from 'styled-components';
import { Piece } from '../../../common/interfaces/piece.interface';

interface KeywordProps {
  piece: Piece | null;
}
const PieceKeywords = ({ piece }: KeywordProps) => {
  return piece ? (
    <Container>
      {piece.keywords?.map((key) => (
        <Keyword key={key.id}>{key.name}</Keyword>
      ))}
      {piece.opKeywords?.map((key) => (
        <Keyword key={key.id}>{key.name}</Keyword>
      ))}
      {piece.whos?.map((key) => (
        <Keyword key={key.id}>{key.who}</Keyword>
      ))}
    </Container>
  ) : (
    <Container />
  );
};

export default PieceKeywords;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #ffffff;
`;

const Keyword = styled.div`
  font-size: 12px;
  margin: 2px 4px 2px 0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px 16px;
  border: 1px solid ${(props) => props.theme.brandColor};
  color: ${(props) => props.theme.brandColor};
`;
