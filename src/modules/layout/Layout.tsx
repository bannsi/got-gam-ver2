import Head from 'next/head';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import Navigation from './components/Navigation';
import SearchHeader from './components/SearchHeader';

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="누군가의 기록이 나에게는 정보가 되고, 또 나의 기록이 누군가에게는 정보가 되는 여행 플랫폼"
        />
        <meta name="keywords" content="곧감, 여행플랫폼, 여행, 여행정보, 여행추천" />
        <meta name="author" content="반시들" />
        <title>여행? 언제감? 곧,감</title>
      </Head>
      <SearchHeader />
      {children}
      <Navigation />
    </Container>
  );
}

export default Layout;

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 812px;
  height: 100vh;
  margin: 0 auto;
`;
