import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { Question } from '../components/Question';
import { Title } from '../components/Title';
import { dateFormat } from '../utils/dateFormat';
import { nextPage, selectAddress, selectDate } from '../utils/makePiece.slice';

const Keywords = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const address = useSelector(selectAddress);
  return (
    <Container>
      <div className="title">
        <Title>
          <div className="address">{dateFormat(date)}</div>
          <div className="desc">에 갔던</div>
        </Title>
        <Title>
          <div className="address">{address}</div>
          <div className="desc">은</div>
        </Title>
      </div>
      <div className="content">
        <Question>어떤 여행이었나요?</Question>
      </div>
      <div className="content">
        <Question>어땠나요?(선택)</Question>
      </div>
      <NextButton disable={false} onNext={() => dispatch(nextPage())} />
    </Container>
  );
};

export default Keywords;
const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  .title {
    margin-bottom: 40px;
  }
  .content {
    flex: 1 1 auto;
    overflow: scroll;
  }
`;
