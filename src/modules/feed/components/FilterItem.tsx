import React from 'react';
import styled from 'styled-components';
import FilterIcon from '../../../common/components/icons/FilterIcon';

import KeywordItem from '../../../common/components/items/KeywordItem';

import { Keyword } from '../../../common/interfaces/keyword.interface';
import { WhoKeyword } from '../../../common/interfaces/whoKeyword.interface';

interface FilterItemProps {
  location?: Keyword;
  keyword?: Keyword;
  companion?: WhoKeyword;
  handleSelect: () => void;
}

const FilterItem = ({ location, keyword, companion, handleSelect }: FilterItemProps) => {
  return (
    <Container>
      <IconContainer onClick={handleSelect}>
        <FilterIcon />
      </IconContainer>
      <KeywordItem short={true} isKeyword={false} text="지역" selected={!!location} />
      <KeywordItem short={true} isKeyword={false} text="컨셉" selected={!!keyword} />
      <KeywordItem short={true} isKeyword={false} text="동행자" selected={!!companion} />
    </Container>
  );
};

export default FilterItem;

const Container = styled.div`
  display: flex;
  padding: 16px;
  color: #666666;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 8px;
`;
