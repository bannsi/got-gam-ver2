import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../styles/text/Button';

interface NextButtonProps {
  text?: string;
  onNext: () => void;
  disable?: boolean;
}

const NextButton = ({ disable, text, onNext }: NextButtonProps) => {
  return (
    <Container
      disabled={disable}
      disable={disable}
      onClick={() => {
        if (!disable) onNext();
      }}
    >
      {text ? text : '다음'}
    </Container>
  );
};

export default NextButton;

interface ContainerProps {
  disable?: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  width: 100%;
  color: #ffffff;
  transition: all 0.3s;
  ${Button}
  ${(props) =>
    props.disable
      ? `
  background: #cccccc;
  cursor: not-allowed;`
      : `background: #000000;`}

  border-radius: 8px;
`;
