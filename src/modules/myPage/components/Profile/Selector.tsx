import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../../styles/text/Caption';

interface SelectorProps {
  showPiece: boolean;
  setShowPiece: (showPiece: boolean) => void;
}

const Selector = ({ showPiece, setShowPiece }: SelectorProps) => {
  return (
    <Container>
      <SelectItem selected={showPiece} onClick={() => setShowPiece(true)}>
        조각
      </SelectItem>
      <SelectItem selected={!showPiece} onClick={() => setShowPiece(false)}>
        조각모음
      </SelectItem>
    </Container>
  );
};

export default Selector;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 24px;
`;

interface SelectItemProps {
  selected: boolean;
}
const SelectItem = styled.div<SelectItemProps>`
  ${Caption}
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.selected
      ? 'color: #5CC485; border-bottom: 1px solid #5CC485;'
      : 'color: #666666; border: none;'};

  box-sizing: border-box;
`;
