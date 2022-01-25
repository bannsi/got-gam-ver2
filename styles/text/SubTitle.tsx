import { css } from 'styled-components';

interface SubTitleProps {
  type: '1' | '2';
}

export const SubTitle = css<SubTitleProps>`
  font-size: ${(props) => (props.type == '1' ? '16px' : '14px')};
  font-weight: ${(props) => (props.type == '1' ? 500 : 400)};
`;
