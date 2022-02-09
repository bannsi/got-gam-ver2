import React from 'react';
import BackIcon from '../../../common/components/icons/BackIcon';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { backPage, selectCurrentPageIndex } from '../utils/makePiece.slice';
import styled from 'styled-components';

const MakeHeader = () => {
  const dispatch = useDispatch();
  const currentPageIndex = useSelector(selectCurrentPageIndex);
  const onBack = () => {
    if (currentPageIndex === 0) {
      Router.back();
    } else {
      dispatch(backPage());
    }
  };
  return (
    <Header>
      <BackIcon onBack={() => onBack()} />
      <div>조각 만들기</div>
    </Header>
  );
};

export default MakeHeader;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  min-height: 48px;
  background: #ffffff;
  padding: 0 4px;
  display: flex;
  align-items: center;
`;
