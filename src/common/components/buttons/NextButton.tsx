import React from 'react';
import styled from 'styled-components';
// import { ButtonText } from '../text/ButtonText';

interface NextButtonProps {
  text: string;
  onNext: () => void;
  disable?: boolean;
}

const NextButton = ({ disable, text, onNext }: NextButtonProps) => {
  return (
    <Container
      disable={disable}
      onClick={() => {
        if (!disable) onNext();
      }}
    >
      {/* <ButtonText>{text}</ButtonText> */}
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
  /* margin: 0 16px; */
  ${(props) =>
    props.disable
      ? `
  background: #cccccc;`
      : `background: #000000;`}

  border-radius: 8px;
`;
