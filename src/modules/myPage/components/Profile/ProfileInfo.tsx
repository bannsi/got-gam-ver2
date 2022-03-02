import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SubTitle } from '../../../../../styles/text/SubTitle';
import PieceMakerItem from '../../../../common/components/items/PieceMakerItem';
import { selectMe } from '../../utils/myPage.slice';
import Follow from './Follow';

const ProfileInfo = () => {
  const me = useSelector(selectMe);
  return (
    <Container>
      <Content>
        <PieceMakerItem src={me.image.encoded} />
        <Name type="1">{me.nickname}</Name>
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
