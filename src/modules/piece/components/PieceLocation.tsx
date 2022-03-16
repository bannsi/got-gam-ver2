import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../styles/text/Button';
import { Caption } from '../../../../styles/text/Caption';
import ArrowIcon from '../../../common/components/icons/ArrowIcon';
import LocationIcon from '../../../common/components/icons/LocationIcon';
import { Piece } from '../../../common/interfaces/piece.interface';

interface PieceLocationProps {
  piece: Piece | null;
}

const PieceLocation = ({ piece }: PieceLocationProps) => {
  return piece ? (
    <Container onClick={() => (window.location.href = piece.placeUrl)}>
      <Content>
        <LocationIcon />
        <Place>
          <div className="place">{piece.address}</div>
          <div className="detail">{piece.addressDetail}</div>
        </Place>
      </Content>
      <ArrowIcon />
    </Container>
  ) : (
    <div>loading...</div>
  );
};

export default PieceLocation;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Place = styled.div`
  display: flex;
  flex-direction: column;
  .place {
    margin-bottom: 5px;
    color: ${(props) => props.theme.grayScale.black};
    ${Button}
  }
  .detail {
    ${Caption}
  }
`;
