import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentPageIndex } from './utils/makePiece.slice';
import ImageUpload from './containers/ImageUpload';
import Location from './containers/Location';
import Date from './containers/Date';
import Keywords from './containers/Keywords';
import Companions from './containers/Companions';
import Contents from './containers/Contents';
import { pages } from './utils/pages';
import MakeHeader from './components/MakeHeader';
import SetLocation from './containers/SetLocation';

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
  const currentPageIndex = useSelector(selectCurrentPageIndex);
  const Page = components[pages[currentPageIndex]] as () => JSX.Element;
  return (
    <Container>
      <MakeHeader />
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
