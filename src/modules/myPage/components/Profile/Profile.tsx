import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MyCollections from '../../containers/MyCollections';
import MyPieces from '../../containers/MyPieces';
import { fetchMyPiecesStart } from '../../utils/myPage.slice';
// import { RootState } from '../../../app/rootReducer';
// import {
//   fetchMyCollectionStart,
//   fetchMyPieceStart
// } from '../../../modules/myPage/utils/myPage.action';
// import {
//   selectMyCollectionList,
//   selectMyPieceList
// } from '../../../modules/myPage/utils/myPage.reducer';
// import CollectionList from '../CollectionList';
// import PieceList from '../PieceList';
import FollowInfo from './FollowInfo';
import ProfileInfo from './ProfileInfo';
import Selector from './Selector';

const Profile = () => {
  const [showPiece, setShowPiece] = useState(true);

  return (
    <Container>
      <ProfileInfo></ProfileInfo>
      <FollowInfo></FollowInfo>
      <Selector showPiece={showPiece} setShowPiece={setShowPiece}></Selector>
      {showPiece ? <MyPieces /> : <MyCollections />}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
