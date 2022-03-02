import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { Keyword } from '../../../common/interfaces/keyword.interface';
import KeywordItem from '../../../common/components/items/KeywordItem';
import KeywordList from '../components/KeywordList';
import { Question } from '../components/Question';
import { Title } from '../components/Title';
import { dateFormat } from '../utils/dateFormat';
import {
  nextPage,
  selectAddress,
  selectDate,
  selectKeywords,
  selectOptions,
  selectSelectedKeywords,
  selectSelectedOptions,
  setKeywords,
  setOptions
} from '../utils/makePiece.slice';

const Keywords = () => {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const address = useSelector(selectAddress);
  const keywords = useSelector(selectKeywords);
  const options = useSelector(selectOptions);
  const selectedK = useSelector(selectSelectedKeywords);
  const selectedOpt = useSelector(selectSelectedOptions);
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>(selectedK);
  const [selectedOptions, setSelectedOptions] = useState<number[]>(selectedOpt);
  function handleSelectKeyword(id: number) {
    if (selectedKeywords.includes(id)) {
      setSelectedKeywords(selectedKeywords.filter((key) => key !== id));
    } else {
      setSelectedKeywords([...selectedKeywords, id]);
    }
  }
  function handleSelectOption(id: number) {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((key) => key !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
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
        <Question>어떤 여행이었나요?</Question>
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
        <Question>어땠나요?(선택)</Question>
        <KeywordList>
          {options.map((opt) => (
            <KeywordItem
              isKeyword={true}
              key={opt.id}
              handleSelect={() => handleSelectOption(opt.id)}
              selected={selectedOptions.includes(opt.id)}
              text={opt.name}
            />
          ))}
        </KeywordList>
      </div>

      <NextButton
        disable={selectedKeywords.length === 0}
        onNext={() => {
          dispatch(setKeywords(selectedKeywords));
          dispatch(setOptions(selectedOptions));
          dispatch(nextPage());
        }}
      />
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
