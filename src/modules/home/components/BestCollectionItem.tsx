import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Headline } from '../../../../styles/text/Headline';
import ArchiveButton from '../../../common/components/buttons/ArchiveButton';
import { Collection } from '../../../common/interfaces/collection.interface';
import { SubTitle } from '../../../../styles/text/SubTitle';

interface CollectionItemProps {
  item: Collection;
}

const BestCollectionItem = ({ item }: CollectionItemProps) => {
  const [isArchived, setIsArchived] = useState(false);
  const router = useRouter();
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  return (
    <ContainerBox className="item">
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container
        style={{ backgroundImage: `url(${item.coverImage})` }}
        onClick={() => router.push(`/collection/${item.id}`)}
      >
        <Content>
          <Title type={'5'}>{item.title}</Title>
          <Location type={'2'}>제주</Location>
        </Content>
      </Container>
    </ContainerBox>
  );
};

export default BestCollectionItem;

const ContainerBox = styled.div`
  width: 304px;
  height: 200px;
  min-width: 304px;
  min-height: 200px;
  display: flex;
  margin: 0 8px 8px 8px;
  border-radius: 8px;
  position: relative;
`;
const Container = styled.div`
  width: 304px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #cccccc;
  border-radius: 8px;
  justify-content: flex-end;
  color: #ffffff;
  background-size: cover;
`;
const Content = styled.div`
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 8px;
  ${Headline}
`;

const Location = styled.div`
  ${SubTitle}
`;
