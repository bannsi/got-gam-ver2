import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../common/components/icons/SearchIcon';
import { Header } from './Header';

const SearchHeader = () => {
  return (
    <Container>
      <SearchIcon />
    </Container>
  );
};

export default SearchHeader;

const Container = styled(Header)`
  justify-content: flex-end;
`;
