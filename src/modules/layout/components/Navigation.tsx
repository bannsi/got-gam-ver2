import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import ArchiveIcon from '../../../common/components/icons/navigation/ArchiveIcon';
import FeedIcon from '../../../common/components/icons/navigation/FeedIcon';
import HomeIcon from '../../../common/components/icons/navigation/HomeIcon';
import MyNavIcon from '../../../common/components/icons/navigation/MyNavIcon';
import PlusIcon from '../../../common/components/icons/PlusIcon';
import { Footer } from './Footer';

const isPath = (url: string, match: string) => {
  return url === match ? 'filled' : 'outlined';
};

const Navigation = () => {
  const router = useRouter();

  return (
    <Container>
      <HomeIcon onClick={() => router.push('/')} type={isPath(router.pathname, '/')} />
      <FeedIcon onClick={() => router.push('/feed')} type={isPath(router.pathname, '/feed')} />
      <PlusIcon />
      <ArchiveIcon
        onClick={() => router.push('/archive')}
        type={isPath(router.pathname, '/archive')}
      />
      <MyNavIcon onClick={() => router.push('/my')} type={isPath(router.pathname, '/my')} />
    </Container>
  );
};

export default Navigation;

const Container = styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
