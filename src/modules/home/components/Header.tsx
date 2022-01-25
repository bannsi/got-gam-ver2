import React from 'react';
import styled from 'styled-components';
import { Headline } from '../../../../styles/text/Headline';
import JuunieIcon from '../../../common/components/icons/JuunieIcon';

function Header() {
  return (
    <Container type="4">
      <JuunieIcon />
      <span>지금은 지루해도</span>
      <span>여행? 곧,감</span>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0 42px 16px;
  svg {
    margin-bottom: 4px;
  }
  ${Headline}
`;
