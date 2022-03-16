import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SubTitle } from '../../../../../styles/text/SubTitle';
import PieceMakerItem from '../../../../common/components/items/PieceMakerItem';
import { selectMyInfo } from '../../utils/myPage.slice';
import FollowButton from '../../../../common/components/buttons/FollowButton';

const ProfileInfo = () => {
  const me = useSelector(selectMyInfo);
  console.log(me);
  return (
    <Container>
      <Content>
        <PieceMakerItem src={me.image} />
        <Name type="1">{me.nickname}</Name>
      </Content>
      <FollowButton />
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
