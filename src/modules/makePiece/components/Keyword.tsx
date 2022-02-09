import React from 'react';
import styled from 'styled-components';

interface KeywordProps {
  selected: boolean;
  onSelect: () => void;
  text: string;
}

const Keyword = ({ selected, onSelect, text }: KeywordProps) => {
  return (
    <Container onClick={onSelect} selected={selected}>
      #{text}
    </Container>
  );
};

export default Keyword;

interface ContainerProps {
  selected: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 8px 4px 0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 12px;
  height: 36px;
  ${(props) =>
    props.selected
      ? `border: 1px solid ${props.theme.brandColor}; color :${props.theme.brandColor};`
      : `border: 1px solid ${props.theme.grayScale.border}; color :#${props.theme.grayScale.body};`}
`;
