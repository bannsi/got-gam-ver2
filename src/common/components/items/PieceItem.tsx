import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ArchiveButton from '../buttons/ArchiveButton';
import { Piece } from '../../interfaces/piece.interface';
import Image from 'next/image';

interface Props {
  piece: Piece;
}

const PieceItem = ({ piece }: Props) => {
  const [isArchived, setIsArchived] = useState(false);
  const onArchive = () => {
    setIsArchived(!isArchived);
  };
  const router = useRouter();

  return (
    <ContainerBox>
      <ArchiveButton isArchived={isArchived} onArchive={onArchive} />
      <Container src={piece?.images[0]} onClick={() => router.push(`/piece/${piece.pieceId}`)} />
    </ContainerBox>
  );
};

export default PieceItem;

const ContainerBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: calc(50vw - 1.5px);
  height: calc(50vw - 1.5px);
`;

const Container = styled(Image)`
  width: 100%;
  height: 100%;
  background: #cccccc;
  object-fit: cover;
`;
