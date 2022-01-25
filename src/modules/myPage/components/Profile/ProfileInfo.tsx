import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../../../styles/text/SubTitle';
import PieceMakerItem from '../../../../common/components/items/PieceMakerItem';
import Follow from './Follow';

const ProfileInfo = () => {
  return (
    <Container>
      <Content>
        <PieceMakerItem />
        <Name type="1">이곧감</Name>
      </Content>
      <Follow />
    </Container>
  );
};

export default ProfileInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  margin-left: 11px;
  ${SubTitle}
`;
