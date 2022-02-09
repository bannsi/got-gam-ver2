/* global kakao */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import { SubTitle } from '../../../../styles/text/SubTitle';
import { nextPage } from '../utils/makePiece.slice';
import NextButton from '../../../common/components/buttons/NextButton';
import Script from 'next/script';

const SetLocation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const container = document.getElementById('mapper');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 20
    };
    const map = new window.kakao.maps.Map(container, options);
  }, []);
  return (
    <Container>
      <Script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9000674c91e38f9293fe6609d2320104"
      ></Script>
      <Map id="mapper" />
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
  width: 100%;
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
