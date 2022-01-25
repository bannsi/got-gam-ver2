import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../../styles/text/Caption';
import { SubTitle } from '../../../../../styles/text/SubTitle';

const FollowInfo = () => {
  return (
    <Container type={'1'}>
      <div className="item">
        <div className="number">1</div>
        <div className="title">팔로우</div>
      </div>
      <div className="item">
        <div className="number">3</div>
        <div className="title">팔로잉</div>
      </div>
      <div className="item">
        <div className="number">4</div>
        <div className="title">조각</div>
      </div>
    </Container>
  );
};

export default FollowInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 16px;
  height: 74px;
  background: #f7f7f7;
  border-radius: 8px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    ${SubTitle}
    .title {
      color: #999999;
      ${Caption}
    }
    .number {
      color: #666666;
    }
  }
`;
