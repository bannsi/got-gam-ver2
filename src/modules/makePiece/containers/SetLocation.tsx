/* global kakao */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import { SubTitle } from '../../../../styles/text/SubTitle';
import { nextPage } from '../utils/makePiece.slice';
import NextButton from '../../../common/components/buttons/NextButton';

declare global {
  interface Window {
    kakao: any;
  }
}

const SetLocation = () => {
  const { kakao } = window;
  const dispatch = useDispatch();
  useEffect(() => {
    kakao.maps.load(() => {
      const el = document.getElementById('map');
      const map = new kakao.maps.Map(el, {
        center: new kakao.maps.Coords(523951.25, 1085073.75)
      });
    });
  }, []);

  return (
    <Container>
      <Map id="map" />
      <Info type={'1'}>
        <div className="address">부산의 중심 서면</div>
        <div className="desc">부산광역시 금정구 부산대학로 63번길 2</div>
        <NextButton text="이 위치로 설정" onNext={() => dispatch(nextPage())} />
      </Info>
    </Container>
  );
};

export default SetLocation;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`;

const Map = styled.div`
  display: flex;
  width: 100vw;
  flex: 1 1 auto;
  background: #ffffff;
`;

const Info = styled.div`
  width: 100%;
  padding: 24px 16px;
  /* height: 200px; */
  .address {
    ${SubTitle}
    margin-bottom: 8px;
  }
  .desc {
    ${Caption}
    margin-bottom: 40px;
  }
`;
