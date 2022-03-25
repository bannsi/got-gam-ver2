import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../../../styles/text/SubTitle';
import BackIcon from '../../../common/components/icons/BackIcon';

interface ArchiveHeaderProps {
  folder: string | undefined;
}
interface ContainerProps {
  // isFolder: boolean;
  type: string;
}

const ArchiveHeader = () => {
  const router = useRouter();
  const isFolder = router.query.folder;

  return (
    <Container type="2">
      {isFolder && <BackIcon onBack={() => router.back()} />}
      <div>{'아카이브'}</div>
    </Container>
  );
};

export default ArchiveHeader;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 48px;
  min-height: 48px;
  ${SubTitle}
`;
