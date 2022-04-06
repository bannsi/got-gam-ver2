import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import { SubTitle } from '../../../../styles/text/SubTitle';

const ModalContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  .title {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    color: #666666;
    ${SubTitle}
  }
  .caption {
    ${Caption}
  }
`;

export default ModalContent;
