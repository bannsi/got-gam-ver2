import React from 'react';
import styled from 'styled-components';

const FilterIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33342 8V13.2533C9.36009 13.4533 9.29342 13.6667 9.14009 13.8067C9.07841 13.8685 9.00515 13.9175 8.9245 13.951C8.84386 13.9844 8.7574 14.0016 8.67009 14.0016C8.58278 14.0016 8.49632 13.9844 8.41567 13.951C8.33502 13.9175 8.26176 13.8685 8.20009 13.8067L6.86009 12.4667C6.78738 12.3956 6.73209 12.3087 6.69855 12.2127C6.66501 12.1167 6.65413 12.0142 6.66675 11.9133V8H6.64675L2.80675 3.08C2.69849 2.94102 2.64964 2.76484 2.67088 2.58995C2.69212 2.41507 2.78171 2.2557 2.92009 2.14667C3.04675 2.05333 3.18675 2 3.33342 2H12.6668C12.8134 2 12.9534 2.05333 13.0801 2.14667C13.2185 2.2557 13.3081 2.41507 13.3293 2.58995C13.3505 2.76484 13.3017 2.94102 13.1934 3.08L9.35342 8H9.33342Z" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default FilterIcon;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;
