import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  margin-bottom: 3px;
  .address {
    font-weight: bold;
  }
  .desc {
    color: ${(props) => props.theme.grayScale.sub};
  }
`;
