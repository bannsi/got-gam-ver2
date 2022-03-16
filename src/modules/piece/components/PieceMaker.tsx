import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import FollowButton from '../../../common/components/buttons/FollowButton';
import { selectPieceMaker } from '../utils/piece.slice';

const PieceMaker = () => {
  const pieceMaker = useSelector(selectPieceMaker);
  return pieceMaker ? (
    <Container>
      <Maker>
        <img src={pieceMaker.image} />
        {pieceMaker.nickname}
      </Maker>
      <FollowButton />
    </Container>
  ) : (
    <Container />
  );
};

export default PieceMaker;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Maker = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #c4c4c4;
    margin-right: 4px;
    object-fit: cover;
  }
  ${Caption}
`;
