import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../../styles/text/SubTitle';
import PieceMakerItem from '../../../common/components/items/PieceMakerItem';

const BestPieceMakers = () => {
  return (
    <Container>
      <Label type={'1'}>이번 주 베스트 조각가는 누구일까요?</Label>
      <MakerList>
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
        <PieceMakerItem />
      </MakerList>
    </Container>
  );
};

export default BestPieceMakers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const Label = styled.div`
  margin: 15px 16px;
  ${SubTitle}
`;

const MakerList = styled.div`
  display: flex;
  overflow-x: scroll;
  .profileImg {
    margin: 0 4px;
    &:last-child {
      margin-right: 16px;
    }
    &:first-child {
      margin-left: 16px;
    }
  }
`;
