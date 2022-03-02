import React from 'react';
import { IconContainer } from './IconContainer';

const DropdownIcon = () => {
  return (
    <IconContainer
      dangerouslySetInnerHTML={{
        __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="5.5" r="1.5" fill="#666666"/>
<circle cx="11.5" cy="12.5" r="1.5" fill="#666666"/>
<circle cx="11.5" cy="19.5" r="1.5" fill="#666666"/>
</svg>
        `
      }}
    ></IconContainer>
  );
};

export default DropdownIcon;
