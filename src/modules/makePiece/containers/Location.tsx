import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../../styles/text/Button';
import NextButton from '../../../common/components/buttons/NextButton';
import { nextPage } from '../utils/makePiece.slice';
import SearchInput from '../components/SearchInput';
import RightArrowIcon from '../../../common/components/icons/RightArrowIcon';

const Location = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  return (
    <Container>
      <SearchInput search={search} setSearch={setSearch} />
      <DirectSearch onClick={() => dispatch(nextPage())}>
        <span>지도에서 직접 지정</span>
        <RightArrowIcon />
      </DirectSearch>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
`;

const DirectSearch = styled.div`
  width: 100%;
  cursor: pointer;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Button}
  color: ${(props) => props.theme.grayScale.sub};
`;
