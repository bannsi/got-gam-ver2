import React from 'react';
import styled from 'styled-components';
import { IconContainer } from './IconContainer';

const SearchIcon = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50049 6L15.5005 12L9.50049 18" stroke="#CCCCCC" stroke-width="1.72487" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
      }}
    ></div>
  );
};

export default SearchIcon;
