import React, { useState } from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../../styles/text/Caption';

const Follow = () => {
  const [follow, setFollow] = useState(false);
  return <Container onClick={() => setFollow(!follow)}>{follow ? '팔로우' : '언팔로우'}</Container>;
};

export default Follow;

const Container = styled.div`
  width: 66px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #000000;
  border-radius: 6px;
  ${Caption}
  color: #ffffff;
`;
