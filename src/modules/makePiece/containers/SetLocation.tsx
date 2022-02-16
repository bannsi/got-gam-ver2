/* global kakao */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import { SubTitle } from '../../../../styles/text/SubTitle';
import {
  nextPage,
  selectLocationLat,
  selectLocationLng,
  selectAddress,
  selectAddressDetail
} from '../utils/makePiece.slice';
import NextButton from '../../../common/components/buttons/NextButton';

declare global {
  interface Window {
    kakao: any;
  }
}

const SetLocation = () => {
  const { kakao } = window;
  const dispatch = useDispatch();
  const lat = useSelector(selectLocationLat);
  const lng = useSelector(selectLocationLng);
  const address = useSelector(selectAddress);
  const addressDetail = useSelector(selectAddressDetail);
  console.log(lat, lng, typeof lat);
  useEffect(() => {
    kakao.maps.load(() => {
      const el = document.getElementById('map');
      const map = new kakao.maps.Map(el, {
        center: new kakao.maps.LatLng(lat, lng),
        level: 10
      });
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(map);
      marker.setDraggable(true);
    });
  }, [lat, lng]);

  return (
    <Container>
      <Map id="map" />
      <Info type={'1'}>
        <div className="address">{address}</div>
        <div className="desc">{addressDetail}</div>
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
