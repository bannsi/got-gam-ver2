import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { backPage, fetchAllKeyword, selectCurrentPageIndex } from './utils/makePiece.slice';
import ImageUpload from './containers/ImageUpload';
import Location from './containers/Location';
import Date from './containers/Date';
import Keywords from './containers/Keywords';
import Companions from './containers/Companions';
import Contents from './containers/Contents';
import { pages } from './utils/pages';
import SetLocation from './containers/SetLocation';
import Script from 'next/script';
import Header from '../../common/components/items/Header';
import Router from 'next/router';

type ComponentsType = {
  [key: string]: () => JSX.Element;
};

const components: ComponentsType = {
  ['ImageUpload']: ImageUpload,
  ['Location']: Location,
  ['SetLocation']: SetLocation,
  ['Date']: Date,
  ['Keywords']: Keywords,
  ['Companions']: Companions,
  ['Contents']: Contents
};

const MakePiece = () => {
  const dispatch = useDispatch();
  const currentPageIndex = useSelector(selectCurrentPageIndex);
  const Page = components[pages[currentPageIndex]] as () => JSX.Element;

  useEffect(() => {
    dispatch(fetchAllKeyword());
  }, []);
  const handleBack = () => {
    if (currentPageIndex === 0) {
      Router.back();
    } else {
      dispatch(backPage());
    }
  };
  return (
    <Container>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY}&autoload=false`}
      ></Script>
      <Header text="조각 만들기" handleBack={handleBack} />
      <Page />
    </Container>
  );
};

export default MakePiece;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
