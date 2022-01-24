import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation';

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
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
`;
