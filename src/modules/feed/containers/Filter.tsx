import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import NextButton from '../../../common/components/buttons/NextButton';
import Header from '../../../common/components/items/Header';

interface FilterProps {
  handleClose: () => void;
}

const Filter = ({ handleClose }: FilterProps) => {
  return (
    <Container>
      <Header text="필터" handleBack={handleClose} />
      <Content>
        <Title>지역</Title>
        {/* <KeywordList></KeywordList> */}
        <NextButton text="선택 완료" onNext={() => console.log('필터 액션')} />
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
