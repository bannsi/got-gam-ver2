import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../styles/text/Button';
import { Caption } from '../../../styles/text/Caption';
import { SubTitle } from '../../../styles/text/SubTitle';
import Modal from '../../common/components/modal/Modal';
import MyPageHeader from '../myPage/components/MyPageHeader';
import { Header } from './components/Header';
import Navigation from './components/Navigation';
import SearchHeader from './components/SearchHeader';

interface LayoutProps {
  children: ReactElement;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
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
      {router.pathname.includes('/my') ? <MyPageHeader /> : <SearchHeader />}
      {children}
      <Navigation onClick={() => setVisible(true)} />
      <Modal onClose={() => setVisible(false)} visible={visible}>
        <ModalContent type="1">
          <div className="title">기록하기</div>
          <ModalItem onClick={() => router.push('/makePiece')}>
            <div className="btn">조각</div>
            <div className="desc">다녀온 장소마다 세세하게 기록해요</div>
          </ModalItem>
          <ModalItem onClick={() => router.push('/makeCollection')}>
            <div className="btn">조각모음</div>
            <div className="desc  ">조각들을 모아 여행을 한눈에 정리해요</div>
          </ModalItem>
        </ModalContent>
      </Modal>
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

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    color: #666666;
    ${SubTitle}
  }
  .btn {
    ${Button}
  }
  .desc {
    ${Caption}
  }
  margin-bottom: 48px;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid #e1e1e1;
`;
