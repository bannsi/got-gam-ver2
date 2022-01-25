import React from 'react';
import styled from 'styled-components';
import SettingIcon from '../../../common/components/icons/SettingIcon';
import { SubTitle } from '../../../../styles/text/SubTitle';
import { Header } from '../../layout/components/Header';

const MyPageHeader = () => {
  return (
    <Container type="2">
      <span>내 조각</span>
      <SettingIcon />
    </Container>
  );
};

export default MyPageHeader;

const Container = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  ${SubTitle}
`;
