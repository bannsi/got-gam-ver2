import { css } from 'styled-components';

interface HeadlineProps {
  type: '1' | '2' | '3' | '4' | '5';
}

const HeadlineMapper = {
  '1': { weight: 400, size: '58px' },
  '2': { weight: 400, size: '47px' },
  '3': { weight: 400, size: '33px' },
  '4': { weight: 700, size: '23px' },
  '5': { weight: 500, size: '19px' }
};

export const Headline = css<HeadlineProps>`
  font-size: ${(props) => HeadlineMapper[props.type].size};
  font-weight: ${(props) => HeadlineMapper[props.type].weight};
`;
