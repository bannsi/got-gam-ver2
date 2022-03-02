import React from 'react';
import styled from 'styled-components';

interface PieceMakerProps {
  src: string;
}
const PieceMakerItem = ({ src }: PieceMakerProps) => {
  return <Container src={src} className="profileImg"></Container>;
};

export default PieceMakerItem;

const Container = styled.img`
  width: 72px;
  height: 72px;
  min-width: 72px;
  min-height: 72px;
  border-radius: 100%;
  border: 1px solid #ffffff;
  object-fit: cover;
`;
