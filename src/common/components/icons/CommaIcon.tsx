import React from 'react';
import styled from 'styled-components';

const CommaIcon = ({ visible }: CommaProps) => {
  return (
    <Conatiner
      visible={visible}
      dangerouslySetInnerHTML={{
        __html: `<svg width="4" height="8" viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66699 0L4 0.373991V3.67287C4 4.10338 3.92786 4.5569 3.78357 5.03343C3.63865 5.5093 3.41127 5.94573 3.10016 6.34273C2.78905 6.73907 2.4058 7.05719 1.9504 7.29512C1.49501 7.53306 0.96747 7.70855 0.367149 7.82226V6.73381C1.01127 6.53005 1.48341 6.17249 1.78357 5.66244C2.08374 5.1524 2.23317 4.51155 2.23317 3.74122H0.300161L0 3.33305V0.339812L0.33301 0H3.66699Z" fill="#F45400"/>
</svg>
        `
      }}
    ></Conatiner>
  );
};

export default CommaIcon;

interface CommaProps {
  visible: boolean;
}
const Conatiner = styled.div<CommaProps>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  padding-bottom: 2px;
`;
