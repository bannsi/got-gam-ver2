import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../../../styles/text/Button';
import {
  fetchLocationStart,
  nextPage,
  selectLocationList,
  setLocation
} from '../utils/makePiece.slice';
import SearchInput from '../components/SearchInput';
import RightArrowIcon from '../../../common/components/icons/RightArrowIcon';
import { Caption } from '../../../../styles/text/Caption';
import NextButton from '../../../common/components/buttons/NextButton';

const Location = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const locationList = useSelector(selectLocationList);
  useEffect(() => {
    dispatch(fetchLocationStart());
  }, []);
  return (
    <Container>
      <SearchInput search={search} setSearch={setSearch} />
      <DirectSearch onClick={() => dispatch(nextPage())}>
        <span>지도에서 직접 지정</span>
        <RightArrowIcon />
      </DirectSearch>
      <LocationList>
        {locationList.map((location) => (
          <LocationItem
            onClick={() => {
              dispatch(setLocation(location));
              dispatch(nextPage());
            }}
            key={location.id}
          >
            <span className="place-name">{location.place_name}</span>
            <span className="address">{location.address_name}</span>
          </LocationItem>
        ))}
      </LocationList>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px;
`;

const DirectSearch = styled.div`
  width: 100%;
  cursor: pointer;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Button}
  color: ${(props) => props.theme.grayScale.sub};
`;

const LocationItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  .place-name {
    ${Button}
    font-size: 14px;
  }
  .address {
    ${Caption}
    font-size: 12px;
  }
`;
const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;
