import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import NextButton from '../../../common/components/buttons/NextButton';
import Header from '../../../common/components/items/Header';
import KeywordItem from '../../../common/components/items/KeywordItem';
import KeywordList from '../../makePiece/components/KeywordList';
import {
  fetchAllKeyword,
  selectCompanions,
  selectKeywords
} from '../../makePiece/utils/makePiece.slice';

interface FilterProps {
  handleClose: () => void;
}

const Filter = ({ handleClose }: FilterProps) => {
  const dispatch = useDispatch();
  const keywords = useSelector(selectKeywords);
  const companions = useSelector(selectCompanions);
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const [selectedCompanions, setSelectedCompanions] = useState<number[]>([]);
  function handleSelectKeyword(id: number) {
    if (selectedKeywords.includes(id)) {
      setSelectedKeywords(selectedKeywords.filter((key) => key !== id));
    } else {
      setSelectedKeywords([...selectedKeywords, id]);
    }
  }
  function handleSelectCompanion(id: number) {
    if (selectedCompanions.includes(id)) {
      setSelectedCompanions(selectedCompanions.filter((key) => key !== id));
    } else {
      setSelectedCompanions([...selectedCompanions, id]);
    }
  }
  function handleFilter() {
    handleClose();
  }
  useEffect(() => {
    if (!keywords.length || !companions.length) {
      dispatch(fetchAllKeyword());
    }
  }, []);
  return (
    <Container>
      <Header text="필터" handleBack={handleClose} />
      <Content>
        <Title>지역</Title>
        {/* <KeywordList>
          {companions.map((companion) => (
            <KeywordItem
              isKeyword={true}
              key={companion.id}
              handleSelect={() => handleSelectCompanion(companion.id)}
              selected={selectedCompanions.includes(companion.id)}
              text={companion.who}
            />
          ))}
        </KeywordList> */}
        <Title>컨셉</Title>
        <KeywordList>
          {keywords.map((keyword) => (
            <KeywordItem
              isKeyword={true}
              key={keyword.id}
              handleSelect={() => handleSelectKeyword(keyword.id)}
              selected={selectedKeywords.includes(keyword.id)}
              text={keyword.name}
            />
          ))}
        </KeywordList>
        <Title>동행자</Title>
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
        <NextButton text="선택 완료" onNext={() => handleFilter()} />
      </Content>
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
  z-index: 10;
  background-color: white;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  flex: 1 1 auto;
  justify-content: space-between;
`;

const Title = styled.div`
  ${Caption}
`;
