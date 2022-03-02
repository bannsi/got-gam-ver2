import React from 'react';
import styled from 'styled-components';

interface KeywordProps {
  selected: boolean;
  handleSelect?: () => void;
  text: string;
  isKeyword: boolean;
  short?: boolean;
}

const KeywordItem = ({ short, isKeyword, selected, handleSelect, text }: KeywordProps) => {
  return (
    <Container short={short} onClick={handleSelect} selected={selected}>
      {isKeyword && '#'}
      {text}
    </Container>
  );
};

export default KeywordItem;

interface ContainerProps {
  selected: boolean;
  short?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 8px 4px 0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: ${(props) => (props.short ? `4px 16px` : `8px 12px`)};
  font-size: ${(props) => (props.short ? `12px` : `14px`)};
  transition: all 0.3s;
  ${(props) =>
    props.selected
      ? `border: 1px solid ${props.theme.brandColor}; color :${props.theme.brandColor};`
      : `border: 1px solid ${props.theme.grayScale.border}; color :${props.theme.grayScale.sub};`}
`;
