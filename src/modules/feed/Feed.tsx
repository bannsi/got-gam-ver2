import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Headline } from '../../../styles/text/Headline';
import { IconContainer } from '../../common/components/icons/IconContainer';
import CommaIcon from '../../common/components/icons/CommaIcon';
import Filter from './containers/Filter';
import FilterItem from './components/FilterItem';
import { Keyword } from '../../common/interfaces/keyword.interface';
import { WhoKeyword } from '../../common/interfaces/whoKeyword.interface';

const Feed = () => {
  const [showPiece, setShowPiece] = useState(true);
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState<Keyword>();
  const [keyword, setKeyword] = useState<Keyword>();
  const [companion, setCompanion] = useState<WhoKeyword>();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMyPieceStart());
  //   dispatch(fetchMyCollectionStart());
  // }, []);

  // const pieceList = useSelector((state: RootState) => selectMyPieceList(state));
  // const collectionList = useSelector((state: RootState) => selectMyCollectionList(state));

  return (
    <Container>
      {visible && <Filter handleClose={() => setVisible(false)} />}
      <TitleContainer type="5">
        <Title onClick={() => setShowPiece(true)} showPiece={showPiece}>
          조각
          <CommaIcon visible={showPiece} />
        </Title>
        <Title onClick={() => setShowPiece(false)} showPiece={!showPiece}>
          조각모음
          <CommaIcon visible={!showPiece} />
        </Title>
      </TitleContainer>
      <FilterItem
        handleSelect={() => setVisible(true)}
        location={location}
        keyword={keyword}
        companion={companion}
      />
      {/* {showPiece ? <PieceList list={pieceList} /> : <CollectionList list={collectionList} />} */}
    </Container>
  );
};

export default Feed;

interface TitleProps {
  showPiece: boolean;
}

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
`;
const TitleContainer = styled.div`
  display: flex;
  ${Headline}
`;

const Title = styled.div<TitleProps>`
  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  transition: all 0.3s;
  color: ${(props) => (props.showPiece ? '#000000' : '#cccccc')};
`;
