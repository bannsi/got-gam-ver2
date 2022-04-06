import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';

const ModalInput = styled.input`
  width: 100%;
  background: #f7f7f7;
  border-radius: 8px;
  height: 40px;
  border: none;
  outline: none;
  padding: 0 12px;
  margin-top: 4px;
  margin-bottom: 25px;
  ::placeholder {
    color: #cccccc;
  }
  ${Caption}
`;

export default ModalInput;
