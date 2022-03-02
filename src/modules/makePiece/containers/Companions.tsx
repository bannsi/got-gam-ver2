import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import KeywordItem from '../../../common/components/items/KeywordItem';
import KeywordList from '../components/KeywordList';
import { Question } from '../components/Question';
import { Title } from '../components/Title';
import { dateFormat } from '../utils/dateFormat';
import {
  nextPage,
  selectAddress,
  selectCompanions,
  selectDate,
  setCompanions,
  selectSelectedCompanions
} from '../utils/makePiece.slice';

const Companions = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const address = useSelector(selectAddress);
  const companions = useSelector(selectCompanions);
  const selected = useSelector(selectSelectedCompanions);
  const [selectedCompanions, setSelectedCompanions] = useState<number[]>(selected);
  function handleSelectCompanion(id: number) {
    if (selectedCompanions.includes(id)) {
      setSelectedCompanions(selectedCompanions.filter((key) => key !== id));
    } else {
      setSelectedCompanions([...selectedCompanions, id]);
    }
  }
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
        <Question>누구와 함께 했나요?</Question>
        <KeywordList>
          {companions.map((companion) => (
            <KeywordItem
              isKeyword={true}
              key={companion.id}
              handleSelect={() => handleSelectCompanion(companion.id)}
              selected={selectedCompanions.includes(companion.id)}
              text={companion.who}
            />
          ))}
        </KeywordList>
      </div>
      <NextButton
        disable={selectedCompanions.length === 0}
        onNext={() => {
          dispatch(setCompanions(selectedCompanions));
          dispatch(nextPage());
        }}
      />
    </Container>
  );
};

export default Companions;
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
