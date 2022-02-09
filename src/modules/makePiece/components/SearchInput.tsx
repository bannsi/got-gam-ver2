import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../common/components/icons/SearchIcon';

interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchInput = ({ search, setSearch }: SearchProps) => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input
        value={search}
        placeholder="검색"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
    </InputContainer>
  );
};

export default SearchInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background: #f3f3f3;
  border-radius: 4px;
  svg {
    margin: 8px;
    width: 24px;
    height: 24px;
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  ::placeholder {
    color: ${(props) => props.theme.grayScale.disable};
  }
`;
